import Benefits from './Benefits';

export default { component: Benefits };

export const Default = Benefits.bind({});
Default.args = {
  benefits: [
    { id: 1, title: '20+', subtitle: 'various services' },
    { id: 2, title: '150+', subtitle: 'different rooms' },
    { id: 3, title: '15+', subtitle: 'experience' },
  ],
};
