import { Box, Flex, Grid, Select, Text, useTheme } from '@chakra-ui/react';
import { t } from '@lingui/macro';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';
import ROUTES from '../../config/routes';
import Container from '../Container';
import MyLink from '../MyLink';
import themeConfig from '../../config/theme';

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
      pos="sticky"
      top="0"
      h="88px"
      borderBottom="1px solid"
      borderColor={borderColor}
      zIndex={10000}
      bg="white"
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
              color={ROUTES.index.route === route ? 'black' : themeConfig.primary.colors.lightFont}
              fontWeight={ROUTES.index.route === route ? '900' : undefined}
            >
              <MyLink href={ROUTES.index.route}>{t`Home`}</MyLink>
            </Text>
            <Text
              color={route.includes(ROUTES.rooms.route) ? 'black' : themeConfig.primary.colors.lightFont}
              fontWeight={route.includes(ROUTES.rooms.route) ? '900' : undefined}
            >
              <MyLink href={ROUTES.rooms.route}>{t`Rooms`}</MyLink>
            </Text>
            <Text
              color={ROUTES.services.route === route ? 'black' : themeConfig.primary.colors.lightFont}
              fontWeight={ROUTES.services.route === route ? '900' : undefined}
            >
              <MyLink href={ROUTES.services.route}>{t`Services`}</MyLink>
            </Text>
            <Text
              color={ROUTES.faq.route === route ? 'black' : themeConfig.primary.colors.lightFont}
              fontWeight={ROUTES.faq.route === route ? '900' : undefined}
            >
              <MyLink href={ROUTES.faq.route}>{t`FAQ`}</MyLink>
            </Text>
            <Text
              color={ROUTES.contact.route === route ? 'black' : themeConfig.primary.colors.lightFont}
              fontWeight={ROUTES.contact.route === route ? '900' : undefined}
            >
              <MyLink href={ROUTES.contact.route}>{t`Contact`}</MyLink>
            </Text>
          </Flex>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
