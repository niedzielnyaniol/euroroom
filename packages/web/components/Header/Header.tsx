import { Select, Text } from '@chakra-ui/react';
import { t } from '@lingui/macro';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';
import ROUTES from '../../config/routes';
import Container from '../Container';
import styles from './Header.module.css';

const Header = () => {
  const router = useRouter();
  const { route } = router;

  const handleLangChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    router.push(router.asPath, undefined, { locale: e.target.value });
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles['header-wrapper']}>
          <div className={styles['first-section']}>
            <div className={styles['logo-container']}>
              <Link href={ROUTES.index.route}>
                <Image src="/er-logo.webp" width={130} height={50} objectFit="contain" />
              </Link>
            </div>
            <div className={styles['lang-select-wrapper']}>
              <Select value={router.locale} variant="unstyled" onChange={handleLangChange}>
                <option value="pl">PL</option>
                <option value="en">EN</option>
              </Select>
            </div>
          </div>
          <div className={styles['nav-section']}>
            <Text
              color={ROUTES.index.route === route ? 'black' : 'gray.600'}
              fontWeight={ROUTES.index.route === route ? '900' : undefined}
            >
              <Link href={ROUTES.index.route}>{t`index`}</Link>
            </Text>
            <Text
              color={ROUTES.rooms.route === route ? 'black' : 'gray.600'}
              fontWeight={ROUTES.rooms.route === route ? '900' : undefined}
            >
              <Link href={ROUTES.rooms.route}>{t`rooms`}</Link>
            </Text>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;