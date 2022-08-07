import { Box, Text, useTheme, VStack } from '@chakra-ui/react';
import AmenityType from '../../../types/Amenity';
import LabeledIcon from '../../LabeledIcon';
import MarkIcon from '../../../assets/icons/mark.svg';
import MyImage from '../../MyImage/MyImage';
import themeConfig from '../../../config/theme';

type AmenityProps = Omit<AmenityType, 'id'>;

const Amenity = ({ more, name, image }: AmenityProps) => {
  const theme = useTheme();

  return (
    <Box>
      {image && (
        <LabeledIcon
          icon={<MyImage src={image.url} alt={image.alternativeText} width="36px" height="36px" />}
          fontColor={theme.colors.black}
        >
          <Text as="span" fontWeight={600}>
            {name}
          </Text>
        </LabeledIcon>
      )}
      {more && more.length > 0 && (
        <VStack mt={2} align="start">
          {more.map(({ id, name: moreName }) => (
            <LabeledIcon
              key={id}
              icon={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <Box color={themeConfig.primary.colors.primaryDark}>
                  <MarkIcon />
                </Box>
              }
            >
              {moreName}
            </LabeledIcon>
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default Amenity;
