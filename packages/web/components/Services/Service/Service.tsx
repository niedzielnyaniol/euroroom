import dynamic from 'next/dynamic';
import { Box, Center, Divider, Flex, HStack, Text } from '@chakra-ui/react';
import ServiceType from '../../../types/Service';
import MyImage from '../../MyImage/MyImage';
import theme from '../../../config/theme';

const Slider = dynamic(() => import('../../Slider'));

type ServiceProps = Omit<ServiceType, 'id'> & {
  order?: 'first' | 'last';
  variant?: 'reverse';
};

const Service = ({ images, name, icon, description, variant, order }: ServiceProps) => {
  const isReversed = variant === 'reverse';
  const isFirst = order === 'first';
  const isLast = order === 'last';

  return (
    <Flex display="flex" direction={isReversed ? 'row-reverse' : undefined}>
      <Box
        flex="1"
        w={645}
        borderRadius={theme.primary.radius.default}
        borderBottomRightRadius={isFirst && !isReversed ? 'none' : undefined}
        borderLeftRadius={isReversed && !isFirst && !isLast ? 'none' : undefined}
        borderRightRadius={!isReversed && !isFirst && !isLast ? 'none' : undefined}
        borderTopLeftRadius={isLast && isReversed ? 'none' : undefined}
        overflow="hidden"
      >
        <Slider borderRadius="none" arrowVariant="inside" bulletsInside bulletsVariant="white" w={645}>
          {images.map(({ id, alternativeText, url }) => (
            <Box h="442px" key={id} pos="relative">
              <Box
                bgGradient="linear(to-b, blackAlpha.50, blackAlpha.400, blackAlpha.600)"
                pos="absolute"
                top={0}
                left={0}
                w="100%"
                h="100%"
                zIndex={1}
              />
              <MyImage layout="fill" objectFit="cover" src={url} alt={alternativeText} />
            </Box>
          ))}
        </Slider>
      </Box>
      <Center flex="1">
        <Box w="410px">
          <HStack gap="16px" mb="24px">
            <MyImage width="44px" height="44px" src={icon.url} alt={icon.alternativeText} />
            <Text fontSize="3xl" fontWeight={600} textTransform="uppercase">
              {name}
            </Text>
          </HStack>
          <Divider />
          <Text mt="30px" color={theme.primary.colors.lightFont}>
            {description}
          </Text>
        </Box>
      </Center>
    </Flex>
  );
};

export default Service;
