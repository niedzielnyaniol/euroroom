import Slider from './Slider';

export default { component: Slider };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Center = ({ children, bg }: any) => (
  <div
    style={{
      width: '100%',
      background: bg,
      height: '520px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {children}
  </div>
);

export const Default = Slider.bind({});
Default.args = {
  arrowVariant: 'huge',
  bulletsVariant: 'color',
  children: [
    <Center key={1} bg="green">
      11
    </Center>,
    <Center key={2} bg="orange">
      12
    </Center>,
    <Center key={3} bg="green">
      13
    </Center>,
    <Center key={4} bg="orange">
      14
    </Center>,
  ],
};

export const ArrowsInside = Slider.bind({});
ArrowsInside.args = {
  ...Default.args,
  arrowVariant: 'inside',
  bulletsVariant: 'white',
  bulletsInside: true,
};
