import HotelCard from './HotelCard';

export default { component: HotelCard };

export const Default = HotelCard.bind({});
Default.args = {
  image: {
    url: 'https://www.fillmurray.com/630/764',
    alternativeText: 'test',
  },
  title: 'Euro room is more than a stay',
  description:
    "We have a lot of effort to bring more quality time to you and the people you love. You will have a chance to enjoy meaningful moments together and that's reason why we're here.",
  benefits: [
    { id: 1, title: '20+', subtitle: 'various services' },
    { id: 2, title: '150+', subtitle: 'different rooms' },
    { id: 3, title: '15+', subtitle: 'experience' },
  ],
};
