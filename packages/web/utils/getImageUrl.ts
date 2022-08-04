const getImageUrl = (url: string) => `${process.env.NEXT_PUBLIC_SERVER_URL}${url}`;

export default getImageUrl;
