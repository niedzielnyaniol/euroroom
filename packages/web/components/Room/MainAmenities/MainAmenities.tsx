import { Center, HStack } from '@chakra-ui/react';
import { Plural } from '@lingui/macro';
import { Trans } from '@lingui/react';
import { i18n } from '@lingui/core';
import IconTile from '../IconTile';
import PersonIcon from '../../../assets/icons/person.svg';
import BedIcon from '../../../assets/icons/bed.svg';
import SqMetersIcon from '../../../assets/icons/sq-meters.svg';
import BathroomIcon from '../../../assets/icons/bath.svg';
import HandIcon from '../../../assets/icons/hand.svg';

type MainAmenitiesProps = {
  squareMeters: number;
  maxGuests: number;
  numberOfBeds: number;
  pricePerNight: number;
  isBathroomInside: boolean;
};

const MainAmenities = ({
  numberOfBeds,
  isBathroomInside,
  maxGuests,
  pricePerNight,
  squareMeters,
}: MainAmenitiesProps) => (
  <Center>
    <HStack padding={8} gap="16px" borderRadius={12} columnGap="60px">
      <IconTile icon={<PersonIcon />}>
        <Plural value={maxGuests} one="# Person" other="# Persons" />
      </IconTile>
      <IconTile icon={<BedIcon />}>
        <Plural value={numberOfBeds} one="# Bed" few="# Beds" other="# Beds" />
      </IconTile>
      <IconTile icon={<SqMetersIcon />}>{squareMeters} m²</IconTile>
      <IconTile icon={<HandIcon />}>
        {i18n.number(pricePerNight, {
          style: 'currency',
          currency: 'PLN',
          // eslint-disable-next-line @typescript-eslint/no-magic-numbers
          maximumFractionDigits: 0,
        })}
      </IconTile>
      {isBathroomInside && (
        <IconTile icon={<BathroomIcon />}>
          <Trans id="Private bathroom" />
          {maxGuests}
        </IconTile>
      )}
    </HStack>
  </Center>
);

export default MainAmenities;
