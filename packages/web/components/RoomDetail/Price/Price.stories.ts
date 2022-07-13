import Price from './Price';

export default { component: Price };

export const Default = Price.bind({});
Default.args = { price: 100, forWhatLabel: 'night' };

export const Float = Price.bind({});
Float.args = { price: 100.53 };
