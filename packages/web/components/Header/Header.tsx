import { Box, Flex, Grid, Text, useTheme } from '@chakra-ui/react';
import { t } from '@lingui/macro';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ROUTES from '../../config/routes';
import Container from '../Container';
import MyLink from '../MyLink';
import themeConfig from '../../config/theme';
import Hamburger from './Hamburger/Hamburger';
import useMedia from '../../utils/useMedia';
import SelectLanguage from '../SelectLanguage/SelectLanguage';

const Header = () => {
  const router = useRouter();
  const { route } = router;
  const theme = useTheme();
  const borderColor = theme.colors.gray[300];
  const { isDesktop } = useMedia();
  const [isOpened, setIsOpened] = useState(false);

  const handleHamburgerClick = () => setIsOpened((prevState) => !prevState);

  const closeMenu = () => setIsOpened(false);

  return (
    <Box
      as="header"
      pos={{ base: 'fixed', xl: 'sticky' }}
      top="0"
      w="100%"
      h={{ xl: '88px' }}
      borderBottom={{ xl: `1px solid ${borderColor}` }}
      zIndex={10000}
      bg="white"
    >
      <Container bg={{ base: 'white', xl: 'initial' }}>
        <Grid templateColumns={{ base: '1fr', xl: '1fr auto 1fr' }} p={{ xl: '19px 0' }}>
          <Flex
            align="center"
            flexDir={{ base: 'row-reverse', xl: 'initial' }}
            justifyContent={{ base: 'space-between', xl: 'initial' }}
          >
            {isDesktop || <Hamburger isOpened={isOpened} onClick={handleHamburgerClick} />}
            <Box
              pr={{ xl: '40px' }}
              mr={{ xl: '30px' }}
              borderRight={{ xl: '1px solid' }}
              borderColor={{ xl: borderColor }}
              onClick={closeMenu}
            >
              <MyLink href={ROUTES.index.route}>
                <Image
                  src="/er-logo.webp"
                  style={{ cursor: 'pointer' }}
                  {...(isDesktop
                    ? {
                        width: 130,
                        height: 50,
                      }
                    : {
                        width: 100,
                        height: 50,
                      })}
                  objectFit="contain"
                />
              </MyLink>
            </Box>
            <SelectLanguage />
          </Flex>
          {(isDesktop || isOpened) && (
            <Flex
              display={{ base: 'grid', xl: 'flex' }}
              textAlign={{ base: 'center', xl: 'initial' }}
              align="center"
              columnGap="52px"
              h={{ base: 'calc(100vh - 55px)', xl: 'initial' }}
              fontSize={{ base: '24px', xl: 'initial' }}
              paddingBottom={{ base: '32px', xl: 'initial' }}
            >
              <Text
                onClick={closeMenu}
                color={ROUTES.index.route === route ? 'black' : themeConfig.primary.colors.lightFont}
                fontWeight={ROUTES.index.route === route ? '900' : undefined}
              >
                <MyLink wide href={ROUTES.index.route}>{t`Home`}</MyLink>
              </Text>
              <Text
                onClick={closeMenu}
                color={route.includes(ROUTES.rooms.route) ? 'black' : themeConfig.primary.colors.lightFont}
                fontWeight={route.includes(ROUTES.rooms.route) ? '900' : undefined}
              >
                <MyLink wide href={ROUTES.rooms.route}>{t`Rooms`}</MyLink>
              </Text>
              <Text
                onClick={closeMenu}
                color={route.includes(ROUTES.services.route) ? 'black' : themeConfig.primary.colors.lightFont}
                fontWeight={route.includes(ROUTES.services.route) ? '900' : undefined}
              >
                <MyLink wide href={ROUTES.services.route}>{t`Services`}</MyLink>
              </Text>
              <Text
                onClick={closeMenu}
                color={ROUTES.faq.route === route ? 'black' : themeConfig.primary.colors.lightFont}
                fontWeight={ROUTES.faq.route === route ? '900' : undefined}
              >
                <MyLink wide href={ROUTES.faq.route}>{t`FAQ`}</MyLink>
              </Text>
              <Text
                onClick={closeMenu}
                color={ROUTES.contact.route === route ? 'black' : themeConfig.primary.colors.lightFont}
                fontWeight={ROUTES.contact.route === route ? '900' : undefined}
              >
                <MyLink wide href={ROUTES.contact.route}>{t`Contact`}</MyLink>
              </Text>
            </Flex>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
