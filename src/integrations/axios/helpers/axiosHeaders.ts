import { isEmpty } from '@/util/common.util';

interface IApiRequestHeaders {
  'Content-Type': 'application/json' | 'multipart/form-data';
  Authorization: string;
}

export const generateHttpHeaders = (): IApiRequestHeaders => {
  const accessToken = '';
  const tokenType = '';

  const authHeader =
    !isEmpty(accessToken) && !isEmpty(tokenType)
      ? `${tokenType} ${accessToken}`
      : '';

  const headers: IApiRequestHeaders = {
    'Content-Type': 'application/json',
    Authorization: authHeader,
  };

  return headers;
};

export default generateHttpHeaders;
