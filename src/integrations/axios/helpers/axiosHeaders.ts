interface IApiRequestHeaders {
  'Content-Type': 'application/json' | 'multipart/form-data';
  Authorization: string;
}

export const generateHttpHeaders = (): IApiRequestHeaders => {
  const headers: IApiRequestHeaders = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer YOUR_ACCESS_TOKEN', // Replace with actual token retrieval logic
  };

  return headers;
};

export default generateHttpHeaders;
