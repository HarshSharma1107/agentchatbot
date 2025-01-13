import apiClient from './apiClient';

export const queryCDPDocs = async (platform: string, query: string) => {
  try {
    const response = await apiClient.get(`/docs/${platform}`, {
      params: { query },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return 'Unable to fetch information.';
  }
};
