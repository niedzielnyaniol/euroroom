import { Heading, Text } from '@chakra-ui/react';
import { i18n } from '@lingui/core';
import { Plural, t } from '@lingui/macro';
import { useLingui } from '@lingui/react';
import ImageType from '../../types/ImageType';
import LabeledIcon from '../LabeledIcon';
import MyImage from '../MyImage/MyImage';
import Price from './Price';
import styles from './RoomDetail.module.css';
import SqMetersIcon from '../../assets/icons/sq-meters.svg';
import PersonIcon from '../../assets/icons/person.svg';
import BedIcon from '../../assets/icons/bed.svg';
import Address from '../../types/Address';
import { formatStreet } from '../../utils/address';

type RoomDetailProps = {
  name: string;
  pricePerNight: number;
  maxGuests: number;
  squareMeters: number;
  numberOfBeds: number;
  mainPhoto: ImageType;
  address: Address;
};

const RoomDetail = ({
  numberOfBeds,
  mainPhoto,
  maxGuests,
  name,
  pricePerNight,
  squareMeters,
  address: { street },
}: RoomDetailProps) => {
  const lingui = useLingui();

  return (
    <div>
      <div className={styles['image-container']}>
        <MyImage src={mainPhoto.url} alt={mainPhoto.alternativeText} layout="fill" objectFit="cover" />
      </div>
      <div className={styles['info-container']}>
        <div className={styles['info-container-top']}>
          <div>
            <Heading fontSize="2xl">{name}</Heading>
            {/* eslint-disable-next-line no-underscore-dangle */}
            <Text color="gray.600">{formatStreet(lingui.i18n._locale, street, t`st`)}</Text>
          </div>
          <Price forWhatLabel={t`night`} price={pricePerNight} />
        </div>
        <div className={styles['info-container-bottom']}>
          <LabeledIcon icon={<PersonIcon />} title={t`Maximum number of adults`}>
            <Plural value={maxGuests} one="# Person" other="# Persons" />
          </LabeledIcon>
          <LabeledIcon icon={<SqMetersIcon />} title={t`Room area`}>
            {i18n.number(squareMeters)}m²
          </LabeledIcon>
          <LabeledIcon icon={<BedIcon />} title={t`Beds and sofas`}>
            <Plural value={numberOfBeds} one="# Bed" other="# Beds" />
          </LabeledIcon>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
