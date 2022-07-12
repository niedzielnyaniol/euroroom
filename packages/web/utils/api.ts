import Locales from '../types/Locales';
import Meta from '../types/Meta';

const { API_PATH } = process.env;

type Attributes = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: Locales;
  meta: Meta;
};

function getJson<T>(res: Response): Promise<{ data: T & Attributes }> {
  return res.json();
}

export function get<T>(path: string, populate = '*', locale = 'pl') {
  return fetch(`${API_PATH}/${path}?locale=${locale}&populate=${populate}`, {
    method: 'GET',
  }).then((data) => getJson<T>(data));
}
