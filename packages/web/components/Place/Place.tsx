import { Box, Center, Divider, Flex, Text } from '@chakra-ui/react';
import theme from '../../config/theme';
import PlaceNearby from '../../types/PlaceNearby';
import MyImage from '../MyImage/MyImage';

type PlaceProps = Omit<PlaceNearby, 'id' | 'link'>;

const Place = ({ distance, image, name }: PlaceProps) => (
  <Box bg="white" h="100%" borderRadius="lg" boxShadow="base" transition="0.3s" _hover={{ boxShadow: 'md' }}>
    <Box pos="relative" overflow="hidden" borderTopRadius="lg" h="calc(100% - 74px)">
      <MyImage src={image.url} alt={image.alternativeText} layout="fill" objectFit="cover" />
    </Box>
    <Flex align="end" p="20px 25px" bg="white" borderBottomRadius="lg">
      <Text fontSize="2xl" mt="-2px" fontWeight={600}>
        {name}
      </Text>
      <Center h="36px" m="0 20px -2px">
        <Divider h="25px" orientation="vertical" borderColor={theme.primary.colors.defaultBorder} />
      </Center>
      <Text fontSize="larger" fontWeight={600} color={theme.primary.colors.primary}>
        {distance}
      </Text>
    </Flex>
  </Box>
);

export default Place;
