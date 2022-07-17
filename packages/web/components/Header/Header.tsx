import { Box, Flex, Grid, Select, Text, useTheme } from '@chakra-ui/react';
import { t } from '@lingui/macro';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';
import ROUTES from '../../config/routes';
import Container from '../Container';
import MyLink from '../MyLink';

const Header = () => {
  const router = useRouter();
  const { route } = router;
  const theme = useTheme();
  const borderColor = theme.colors.gray[300];

  const handleLangChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    router.push(router.asPath, undefined, { locale: e.target.value });
  };

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      h="88px"
      borderBottom="1px solid"
      borderColor={borderColor}
      zIndex={10000}
      background="white"
    >
      <Container>
        <Grid templateColumns="1fr auto 1fr" p="19px 0">
          <Flex align="center">
            <Box pr="40px" mr="30px" borderRight="1px solid" borderColor={borderColor}>
              <MyLink href={ROUTES.index.route}>
                <Image src="/er-logo.webp" style={{ cursor: 'pointer' }} width={130} height={50} objectFit="contain" />
              </MyLink>
            </Box>
            <Box w="auto" cursor="pointer" display="inline-block">
              <Select value={router.locale} variant="unstyled" onChange={handleLangChange}>
                <option value="pl">PL</option>
                <option value="en">EN</option>
              </Select>
            </Box>
          </Flex>
          <Flex align="center" columnGap="52px">
            <Text
              color={ROUTES.index.route === route ? 'black' : 'gray.600'}
              fontWeight={ROUTES.index.route === route ? '900' : undefined}
            >
              <MyLink href={ROUTES.index.route}>{t`Home`}</MyLink>
            </Text>
            <Text
              color={ROUTES.rooms.route === route ? 'black' : 'gray.600'}
              fontWeight={ROUTES.rooms.route === route ? '900' : undefined}
            >
              <MyLink href={ROUTES.rooms.route}>{t`Rooms`}</MyLink>
            </Text>
          </Flex>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
