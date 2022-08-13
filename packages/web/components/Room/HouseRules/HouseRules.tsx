import { Box, Text, VStack } from '@chakra-ui/react';
import { t } from '@lingui/macro';
import theme from '../../../config/theme';
import CheckInOut from '../../../types/CheckInOut';
import Rule from '../../../types/Rule';
import TimeRange from '../../TimeRange';
import timeToLocale from '../../../utils/timeToLocale';
import Container from '../../Container';
import Section from '../../Section';
import LabeledIcon from '../../LabeledIcon';
import MyImage from '../../MyImage/MyImage';
import Marked from '../../Marked';

type HouseRulesProps = {
  rules: Rule[];
  checkInOut: CheckInOut;
};

const HouseRules = ({ checkInOut, rules }: HouseRulesProps) => (
  <Box bg={theme.primary.colors.defaultSection} p="100px 0">
    <Container>
      <Section title={t`House rules`}>
        <TimeRange
          ranges={[
            {
              ...checkInOut.checkOut,
              color: theme.primary.colors.primary,
              tooltip: `${t`Check out`}: ${timeToLocale(checkInOut.checkOut.from)} - ${timeToLocale(
                checkInOut.checkOut.to,
              )}`,
            },
            {
              ...checkInOut.checkIn,
              color: 'green.600',
              tooltip: `${t`Check in`}: ${timeToLocale(checkInOut.checkIn.from)} - ${timeToLocale(
                checkInOut.checkIn.to,
              )}`,
            },
          ]}
        />
        <VStack align="start" gap="24px" mt="60px">
          {rules.map(({ description, icon, id, name }) => (
            <Box key={id}>
              <LabeledIcon
                fontSize="large"
                icon={<MyImage width="48px" height="48px" src={icon.url} alt={icon.alternativeText} />}
              >
                <Text fontWeight={600}>{name}</Text>
              </LabeledIcon>
              <Marked>{description}</Marked>
            </Box>
          ))}
        </VStack>
      </Section>
    </Container>
  </Box>
);

export default HouseRules;
