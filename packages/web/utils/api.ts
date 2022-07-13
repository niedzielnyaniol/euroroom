import Locales from '../types/Locales';
import Meta from '../types/Meta';

const { NEXT_PUBLIC_SERVER_URL } = process.env;

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

export function get<T>(path: string, locale: string | undefined, populate: string[]) {
  const populateQuery = Array.from(new Set(populate))
    .map((el, index) => `&populate[${index}]=${el}`)
    .join('&');

  return fetch(`${NEXT_PUBLIC_SERVER_URL}/api/${path}?locale=${locale || 'pl'}&populate=*${populateQuery}`, {
    method: 'GET',
  }).then((data) => getJson<T>(data));
}
