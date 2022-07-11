import { Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import ImageType from '../../types/ImageType';
import Container from '../Container';
import styles from './HeroSection.module.css';

type HeroSectionProps = {
  title: string;
  description: string;
  welcomeMsg: string;
  image: ImageType;
};

const HeroSection = ({ title, description, welcomeMsg, image }: HeroSectionProps) => (
  <Container>
    <div className={styles.container}>
      <div className={styles['text-wrapper']}>
        <Text color="red.600" fontSize="xl" fontWeight={600}>
          {welcomeMsg}
        </Text>
        <div className={styles['header-wrapper']}>
          <Heading as="h1" fontSize="6xl">
            {title}
          </Heading>
        </div>
        <div className={styles['description-wrapper']}>
          <Text>{description}</Text>
        </div>
      </div>
      <Image {...image} width={630} height={764} />
    </div>
  </Container>
);

export default HeroSection;
