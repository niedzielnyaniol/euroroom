import { Box, Flex, Heading, HStack, Spacer, Text, VStack } from '@chakra-ui/react';
import { i18n } from '@lingui/core';
import { Plural, t } from '@lingui/macro';
import { useLingui } from '@lingui/react';
import ImageType from '../../types/ImageType';
import LabeledIcon from '../LabeledIcon';
import MyImage from '../MyImage/MyImage';
import Price from './Price';
import SqMetersIcon from '../../assets/icons/sq-meters.svg';
import PersonIcon from '../../assets/icons/person.svg';
import BedIcon from '../../assets/icons/bed.svg';
import Address from '../../types/Address';
import { formatAddress } from '../../utils/address';
import BedInfo from '../../types/BedInfo';
import theme from '../../config/theme';

export type RoomDetailProps = {
  name: string;
  pricePerNight: number;
  maxGuests: number;
  squareMeters: number;
  bedInfo: BedInfo;
  mainPhoto: ImageType;
  address: Address;
  variant?: 'transparent';
};

const RoomDetail = ({
  bedInfo,
  mainPhoto,
  maxGuests,
  name,
  pricePerNight,
  squareMeters,
  variant,
  address: { street, buildingNumber },
}: RoomDetailProps) => {
  const lingui = useLingui();
  const isTransparent = variant === 'transparent';
  const labeledStyles = isTransparent
    ? {
        fontColor: 'white',
        fontSize: '12px',
      }
    : undefined;
  const iconStyles = isTransparent
    ? {
        width: 20,
        height: 20,
      }
    : undefined;

  return (
    <Box
      boxShadow={isTransparent ? 'lg' : 'base'}
      _hover={{ boxShadow: isTransparent ? 'dark-lg' : 'md' }}
      transitionDuration="0.3s"
      borderRadius="lg"
      overflow="hidden"
      h="100%"
      position="relative"
    >
      <Box position="relative" w="100%" h={isTransparent ? '100%' : '294px'} overflow="hidden">
        <MyImage src={mainPhoto.url} alt={mainPhoto.alternativeText} layout="fill" objectFit="cover" />
        {isTransparent && (
          <Box
            bgGradient="linear(to-b, blackAlpha.50, blackAlpha.400, blackAlpha.600)"
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
          >
            <Box p="10px 12px">
              <Price forWhatLabel={t`night`} price={pricePerNight} variant="white" />
            </Box>
          </Box>
        )}
      </Box>
      <VStack
        position={isTransparent ? 'absolute' : undefined}
        bottom="0"
        spacing="16px"
        p={isTransparent ? '10px 20px' : '20px 22px'}
        bg={isTransparent ? 'transparent' : 'white'}
        align="start"
      >
        <HStack w="100%">
          <Box>
            <Heading color={isTransparent ? 'white' : undefined} fontSize="2xl">
              {name}
            </Heading>
            <Text color={isTransparent ? 'white' : theme.primary.colors.lightFont}>
              {formatAddress({ locale: lingui.i18n._locale, street, streetTranslation: t`st`, buildingNumber })}
            </Text>
          </Box>
          <Spacer />
          {isTransparent || <Price forWhatLabel={t`night`} price={pricePerNight} />}
        </HStack>
        <Flex
          columnGap={isTransparent ? '12px' : '36px'}
          bg={isTransparent ? 'blackAlpha.500' : undefined}
          p={isTransparent ? '10px 12px' : undefined}
          borderRadius={isTransparent ? 'md' : undefined}
          color={isTransparent ? 'white' : undefined}
        >
          <LabeledIcon {...labeledStyles} icon={<PersonIcon {...iconStyles} />} title={t`Maximum number of adults`}>
            <Plural value={maxGuests} one="# Person" other="# Persons" />
          </LabeledIcon>
          <LabeledIcon {...labeledStyles} icon={<SqMetersIcon {...iconStyles} />} title={t`Room area`}>
            {i18n.number(squareMeters)}m²
          </LabeledIcon>
          <LabeledIcon {...labeledStyles} icon={<BedIcon {...iconStyles} />} title={bedInfo.additionalInfo}>
            <Plural value={bedInfo.numberOfBeds} one="# Bed" few="# Beds" other="# Beds" />
          </LabeledIcon>
        </Flex>
      </VStack>
    </Box>
  );
};

export default RoomDetail;
