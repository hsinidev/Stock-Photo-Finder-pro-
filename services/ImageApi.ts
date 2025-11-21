
import type { PexelsApiResponse } from '../types';

interface FetchParams {
  apiKey: string;
  query: string;
  orientation: string;
  size: string;
  page: number;
}

const API_BASE_URL = 'https://api.pexels.com/v1';

export const fetchImages = async ({ apiKey, query, orientation, size, page }: FetchParams): Promise<PexelsApiResponse> => {
  const perPage = 20;
  const url = query 
    ? `${API_BASE_URL}/search?query=${encodeURIComponent(query)}&orientation=${orientation}&size=${size}&page=${page}&per_page=${perPage}`
    : `${API_BASE_URL}/curated?page=${page}&per_page=${perPage}`;

  const response = await fetch(url, {
    headers: {
      Authorization: apiKey,
    },
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('Authentication failed. Please check your Pexels API Key.');
    }
    throw new Error(`Failed to fetch images. Status: ${response.status}`);
  }

  const data: PexelsApiResponse = await response.json();
  return data;
};
