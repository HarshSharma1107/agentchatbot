import axios from 'axios';

/**
 * Query the backend API to fetch documentation data for a platform and query.
 * @param platform - The CDP platform
 * @param query - The user query
 */
export const queryCDPDocs = async (platform: string, query: string): Promise<string[]> => {
  try {
    const response = await axios.get('http://localhost:5000/api/query', {
      params: { platform, query },
    });
    return response.data;
  } catch (error) {
    console.error('Error querying CDP docs:', error);
    return ['Unable to fetch information.'];
  }
};
