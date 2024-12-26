import axios from 'axios';

export const fetchImages = async <T>(query: string, page: number): Promise<T> => {
  const ACCESS_KEY = '9L1rvjllpDtfBu6_1iuiiLcqgdUcSAPHcrIxoU8ZneE';
  const response = await axios.get<T>(
    `https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=${query}&page=${page}&per_page=12`
  );
  return response.data;
};
