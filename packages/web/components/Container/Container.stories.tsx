import Container from './Container';

export default {
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => (
  <Container>
    <div style={{ height: 500, background: 'green' }} />
  </Container>
);
