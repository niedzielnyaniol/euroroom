import Service from './Service';

export default { component: Service };

export const Default = Service.bind({});
Default.args = {
  name: 'Top restaurants',
  description:
    "Our restaurant on the top floor offers dishes that celebrate the flavors of all the country's regions, from north to south in a cozy sitting with warm light.",
  icon: {
    url: 'https://www.fillmurray.com/630/764',
    alternativeText: 'test',
  },
  images: [
    {
      url: 'https://www.fillmurray.com/630/764',
      alternativeText: 'test',
    },
    {
      url: 'https://www.fillmurray.com/630/764',
      alternativeText: 'test',
    },
    {
      url: 'https://www.fillmurray.com/630/764',
      alternativeText: 'test',
    },
    {
      url: 'https://www.fillmurray.com/630/764',
      alternativeText: 'test',
    },
    {
      url: 'https://www.fillmurray.com/630/764',
      alternativeText: 'test',
    },
    {
      url: 'https://www.fillmurray.com/630/764',
      alternativeText: 'test',
    },
  ],
};

export const Reversed = Default.bind({});
Reversed.args = {
  ...Default.args,
  variant: 'reverse',
};
