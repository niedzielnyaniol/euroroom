import { Box, Button, Grid, HStack, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import theme from '../../../config/theme';
import ImageType from '../../../types/ImageType';
import Container from '../../Container';
import MyImage from '../../MyImage/MyImage';
import RangeCalendar from '../RangeCalendar';
import useMedia from '../../../utils/useMedia';
import SelectLanguage from '../../SelectLanguage/SelectLanguage';

export type HeroSectionProps = {
  title: string;
  description: string;
  welcomeMsg: string;
  image: ImageType;
};

const HeroSection = ({ title, description, welcomeMsg, image }: HeroSectionProps) => {
  const { isDesktop } = useMedia();

  return isDesktop ? (
    <Container>
      <Grid pos={{ xl: 'relative' }} templateColumns={{ xl: '1fr auto' }} columnGap={{ xl: '83px' }}>
        <Box mt={{ xl: '128px' }}>
          <Text color={theme.primary.colors.primary} fontSize={{ xl: 'xl' }} fontWeight={{ xl: 600 }}>
            {welcomeMsg}
          </Text>

          <Box mt={{ xl: '16px' }} mb={{ xl: '48px' }}>
            <Heading as="h1" fontSize={{ xl: '6xl' }} fontWeight={{ xl: 600 }}>
              {title}
            </Heading>
          </Box>
          <Box w={{ xl: '400px' }}>
            <Text>{description}</Text>
          </Box>
        </Box>
        {isDesktop && (
          <MyImage
            objectFit="cover"
            src={image.url}
            alt={image.alternativeText}
            width={630}
            height={764}
            style={{ borderBottomLeftRadius: '30px' }}
          />
        )}
        <Box pos="absolute" bottom="140px">
          <RangeCalendar />
        </Box>
      </Grid>
    </Container>
  ) : (
    <Box
      position="relative"
      h="calc(100vh + 20px)"
      borderBottomLeftRadius="16px"
      borderBottomRightRadius="16px"
      overflow="hidden"
      zIndex={10001}
      mb="-16px"
    >
      <MyImage objectFit="cover" src={image.url} alt={image.alternativeText} layout="fill" />
      <Box
        pos="absolute"
        w="100%"
        h="100%"
        zIndex={1}
        bg="linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)"
      >
        <VStack justify="space-between" h="100%" align="start" p="20px 20px 40px">
          <HStack pt="20px" w="100%" justify="space-between">
            <Image src="/er-logo.webp" style={{ cursor: 'pointer' }} width={130} height={50} objectFit="contain" />
            <SelectLanguage variant="flag" />
          </HStack>
          <SimpleGrid gap="16px" w="100%" pb="32px" color="white" fontWeight={600}>
            <Box>
              <Text>{welcomeMsg}</Text>
              <Text fontWeight={600} fontSize="3xl">
                Witaj w Euroroom!
              </Text>
            </Box>
            <Button w="100%" bgColor="red.700" size="lg" color="white" colorScheme="red" fontSize="larger">
              Find your room
            </Button>
          </SimpleGrid>
        </VStack>
      </Box>
    </Box>
  );
};

export default HeroSection;
