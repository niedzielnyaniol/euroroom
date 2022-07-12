import { Heading, Text } from '@chakra-ui/react';
import ImageType from '../../types/ImageType';
import Container from '../Container';
import MyImage from '../MyImage/MyImage';
import styles from './HeroSection.module.css';
import RangeCalendar from './RangeCalendar';

export type HeroSectionProps = {
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
          <Heading as="h1" fontSize="6xl" fontWeight={600}>
            {title}
          </Heading>
        </div>
        <div className={styles['description-wrapper']}>
          <Text>{description}</Text>
        </div>
      </div>
      <MyImage
        objectFit="cover"
        src={image.url}
        alt={image.alternativeText}
        width={630}
        height={764}
        className={styles.image}
      />
      <div className={styles['range-calendar-wrapper']}>
        <RangeCalendar />
      </div>
    </div>
  </Container>
);

export default HeroSection;
