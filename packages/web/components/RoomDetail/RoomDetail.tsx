import { Box, Flex, Heading, HStack, SimpleGrid, Spacer, Text } from '@chakra-ui/react';
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

export type RoomDetailProps = {
  name: string;
  pricePerNight: number;
  maxGuests: number;
  squareMeters: number;
  bedInfo: BedInfo;
  mainPhoto: ImageType;
  address: Address;
};

const RoomDetail = ({
  bedInfo,
  mainPhoto,
  maxGuests,
  name,
  pricePerNight,
  squareMeters,
  address: { street },
}: RoomDetailProps) => {
  const lingui = useLingui();

  return (
    <Box boxShadow="lg" _hover={{ boxShadow: '2xl' }} transitionDuration="0.3s" borderRadius="lg" overflow="hidden">
      <Box position="relative" width="100%" height="294px" overflow="hidden">
        <MyImage src={mainPhoto.url} alt={mainPhoto.alternativeText} layout="fill" objectFit="cover" />
      </Box>
      <SimpleGrid templateRows="1fr 1fr" spacing="16px" padding="20px 22px">
        <HStack>
          <div>
            <Heading fontSize="2xl">{name}</Heading>
            <Text color="gray.600">{formatAddress(lingui.i18n._locale, street, t`st`)}</Text>
          </div>
          <Spacer />
          <Price forWhatLabel={t`night`} price={pricePerNight} />
        </HStack>
        <Flex columnGap="36px">
          <LabeledIcon icon={<PersonIcon />} title={t`Maximum number of adults`}>
            <Plural value={maxGuests} one="# Person" other="# Persons" />
          </LabeledIcon>
          <LabeledIcon icon={<SqMetersIcon />} title={t`Room area`}>
            {i18n.number(squareMeters)}m²
          </LabeledIcon>
          <LabeledIcon icon={<BedIcon />} title={bedInfo.additionalInfo}>
            <Plural value={bedInfo.numberOfBeds} one="# Bed" few="# Beds" other="# Beds" />
          </LabeledIcon>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default RoomDetail;
