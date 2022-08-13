import dynamic from 'next/dynamic';
import { Box, Button, Center, Divider, Flex, HStack, Text } from '@chakra-ui/react';
import { Trans } from '@lingui/react';
import ServiceType from '../../../types/Service';
import MyImage from '../../MyImage/MyImage';
import theme from '../../../config/theme';
import ArrowIcon from '../../../assets/icons/arrow.svg';
import MyLink from '../../MyLink';
import ROUTES from '../../../config/routes';

const Slider = dynamic(() => import('../../Slider'));

type ServiceProps = Omit<ServiceType, 'richDescription'> & {
  order?: 'first' | 'last';
  variant?: 'reverse';
};

const Service = ({ images, name, icon, description, variant, order, id }: ServiceProps) => {
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
          {images.map(({ id: imageId, alternativeText, url }) => (
            <Box h="442px" key={imageId} pos="relative">
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
        <Flex flexDir="column" w="410px">
          <HStack flexDir={isReversed ? 'row-reverse' : undefined} gap="16px" mb="24px">
            <MyImage width="44px" height="44px" src={icon.url} alt={icon.alternativeText} />
            <Text fontSize="3xl" fontWeight={600} textTransform="uppercase">
              {name}
            </Text>
          </HStack>
          <Divider />
          <Text align={isReversed ? 'right' : undefined} mt="30px" color={theme.primary.colors.lightFont}>
            {description}
          </Text>
          <Button
            as="span"
            cursor="pointer"
            mt="54px"
            textTransform="uppercase"
            colorScheme="white"
            color={theme.primary.colors.primary}
            p="23px 33px"
            borderRadius={theme.primary.radius.default}
            border="1px solid"
            borderColor={theme.primary.colors.primary}
            fontSize="larger"
            ml={isReversed ? 'auto' : undefined}
            mr={isReversed ? undefined : 'auto'}
          >
            <MyLink href={`${ROUTES.services.route}/${id}`}>
              <HStack as="span" gap="12px">
                <Trans id="View details" />
                <ArrowIcon width="33px" />
              </HStack>
            </MyLink>
          </Button>
        </Flex>
      </Center>
    </Flex>
  );
};

export default Service;
