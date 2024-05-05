import { Repo } from '@/app/columns';

type FetchReposResponse = {
  error?: string;
  data: Repo[];
};

export const fetchRepos = async (searchPhrase = ''): Promise<FetchReposResponse> => {
  if (!searchPhrase.trim()) return { data: [] };

  return {
    data: [
      {
        id: 1,
        name: 'tonik',
        owner: 'tonik',
        stars: 1,
        created_at: '2021-01-01',
      }
    ],
  }
};
