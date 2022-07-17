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

export function get<T>(path: string, locale: string | undefined, populate?: string[], filters?: string[]) {
  const populateQuery = Array.from(new Set(populate))
    .map((el, index) => `&populate[${index}]=${el}`)
    .join('&');

  const filterQuery = Array.from(new Set(filters))
    .map((el) => `&filters${el}`)
    .join('&');

  console.log(filterQuery);

  return fetch(
    `${NEXT_PUBLIC_SERVER_URL}/api/${path}?locale=${locale || 'pl'}&populate=*${populateQuery}${
      filters ? `&${filterQuery}` : undefined
    }`,
    {
      method: 'GET',
    },
  ).then((data) => getJson<T>(data));
}
