import { StatusCodes } from 'http-status-codes';
import { HttpMethods } from 'msw';

import logger from '@/common/util/logger.util';

class HttpClient {
  private readonly baseURL: string =
    process.env.API_BASE_URL ?? 'http://localhost:3000';
  private readonly timeout: number = 3000; // default timeout in ms

  constructor() {}

  /**
   * Intercepts the request before it is sent.
   * @param url The request URL.
   * @param config The request configuration.
   * @returns The processed URL and configuration.
   */
  private async interceptRequest(
    url: string,
    config: RequestInit
  ): Promise<[string, RequestInit]> {
    const fullUrl = url.startsWith('http') ? url : `${this.baseURL}${url}`;

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(config.headers as Record<string, string>),
    };

    const token = process.env.API_SECRET;
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    const finalConfig: RequestInit = {
      ...config,
      headers,
      signal: controller.signal,
    };

    finalConfig.signal?.addEventListener('abort', () =>
      clearTimeout(timeoutId)
    );

    logger(
      `[API Request][${config.method}][${fullUrl}]\nPayload: ${JSON.stringify(config.body)}`,
      'info'
    );

    return [fullUrl, finalConfig];
  }

  /**
   * Intercepts the response from the API.
   * @param response The API response.
   * @param originalUrl The original request URL.
   * @returns The processed response.
   */
  private async interceptResponse(
    response: Response,
    originalUrl: string
  ): Promise<Response> {
    logger(
      `[API Response][${response.status}][${originalUrl}]\nResponse: ${JSON.stringify(await response.json())}`,
      'info'
    );

    if (!response.ok) {
      const errorData = await response
        .json()
        .catch(() => ({ message: 'Unknown error' }));

      // Handle specific status codes
      switch (response.status) {
        case StatusCodes.UNAUTHORIZED:
          logger('[API] Unauthorized - redirecting to login', 'warn');
        case StatusCodes.FORBIDDEN:
          logger('[API] Forbidden access', 'warn');
          break;
        case StatusCodes.INTERNAL_SERVER_ERROR:
          logger(`[API] Server error: ${errorData.message}`, 'error');
          break;
      }

      throw new ApiError(
        response.status,
        errorData.message || 'Request failed',
        errorData
      );
    }

    return response;
  }

  /**
   * Sends an HTTP request.
   * @param url The URL to send the request to.
   * @param config The request configuration.
   * @returns The response data.
   */
  private async sendRequest<T>(url: string, config: RequestInit): Promise<T> {
    const [fullUrl, finalConfig] = await this.interceptRequest(url, config);

    try {
      const response = await fetch(fullUrl, finalConfig);
      const handledResponse = await this.interceptResponse(response, fullUrl);
      return await handledResponse.json();
    } catch (error) {
      logger(
        `[API Error][${finalConfig.method}][${fullUrl}]\nError: ${error}`,
        'error'
      );
      throw error;
    }
  }

  async get<T>(url: string, config: RequestInit = {}): Promise<T> {
    return this.sendRequest<T>(url, {
      ...config,
      method: HttpMethods.GET,
    });
  }

  async post<T>(
    url: string,
    data?: unknown,
    config: RequestInit = {}
  ): Promise<T> {
    return this.sendRequest<T>(url, {
      ...config,
      method: HttpMethods.POST,
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async put<T>(
    url: string,
    data?: unknown,
    config: RequestInit = {}
  ): Promise<T> {
    return this.sendRequest<T>(url, {
      ...config,
      method: HttpMethods.PUT,
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(url: string, config: RequestInit = {}): Promise<T> {
    return this.sendRequest<T>(url, {
      ...config,
      method: HttpMethods.DELETE,
    });
  }
}

// Custom error class for API errors.
export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public data?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Export singleton instance
export const httpClient = new HttpClient();
