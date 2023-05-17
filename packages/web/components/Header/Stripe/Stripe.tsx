type StripeProps = {
  rotation?: 'left' | 'right';
  hidden?: boolean;
};

const Stripe = ({ rotation, hidden }: StripeProps) => (
  <div
    style={{
      transform:
        // eslint-disable-next-line no-nested-ternary
        rotation === 'left'
          ? 'rotate(-45deg) translate(-7px, 7px)'
          : rotation === 'right'
          ? 'rotate(45deg) translate(-7px, -7px)'
          : undefined,
      transition: '.3s',
      width: 31,
      height: 2,
      borderBottom: '2px solid ',
      borderColor: hidden ? 'transparent' : 'black',
    }}
  />
);

export default Stripe;
