import HeroSection from './HeroSection';

export const Default = HeroSection.bind({});
Default.args = {
  welcomeMsg: 'Welcome home',
  description:
    'Make yourself at home in our sophisticated guest rooms, take in the incredible views and enjoy fresh air from our beautiful sea city',
  title: 'Our world is your playground',
  image: {
    url: 'https://www.fillmurray.com/630/764',
    alternativeText: 'test',
  },
};

export default { component: HeroSection };
