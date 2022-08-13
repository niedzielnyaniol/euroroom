import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import theme from '../../../config/theme';
import ImageType from '../../../types/ImageType';
import Container from '../../Container';
import MyImage from '../../MyImage/MyImage';
import RangeCalendar from '../RangeCalendar';

export type HeroSectionProps = {
  title: string;
  description: string;
  welcomeMsg: string;
  image: ImageType;
};

const HeroSection = ({ title, description, welcomeMsg, image }: HeroSectionProps) => (
  <Container>
    <Grid position="relative" templateColumns="1fr auto" columnGap="83px">
      <Box mt="128px">
        <Text color={theme.primary.colors.primary} fontSize="xl" fontWeight={600}>
          {welcomeMsg}
        </Text>
        <Box mt="16px" mb="48px">
          <Heading as="h1" fontSize="6xl" fontWeight={600}>
            {title}
          </Heading>
        </Box>
        <Box w="400px">
          <Text>{description}</Text>
        </Box>
      </Box>
      <MyImage
        objectFit="cover"
        src={image.url}
        alt={image.alternativeText}
        width={630}
        height={764}
        style={{ borderBottomLeftRadius: '30px' }}
      />
      <Box position="absolute" bottom="140px">
        <RangeCalendar />
      </Box>
    </Grid>
  </Container>
);

export default HeroSection;
