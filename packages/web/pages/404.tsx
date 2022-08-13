import { Center, Heading, Text } from '@chakra-ui/react';
import { Trans } from '@lingui/react';
import MyLink from '../components/MyLink';
import ROUTES from '../config/routes';
import theme from '../config/theme';

const PageNotFound = () => (
  <Center pos="absolute" left="50%" top="50%" transform="translate(-50%, -50%)">
    <Heading fontSize="3xl">
      <Trans id="Page not found." /> <Trans id="Go to" />{' '}
      <Text as="span" color={theme.primary.colors.primary}>
        <MyLink underline href={ROUTES.index.route}>
          <Trans id="home page" />
        </MyLink>
      </Text>
    </Heading>
  </Center>
);

export default PageNotFound;
