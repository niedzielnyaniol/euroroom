import { As, Box, Heading, HStack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import MyLink from '../MyLink';
import ArrowIcon from '../../assets/icons/arrow.svg';

type SectionProps = {
  title: string;
  href?: string;
  hrefTitle?: string;
  children: ReactNode;
  as?: As;
};

const Section = ({ children, title, href, as = 'section', hrefTitle }: SectionProps) => (
  <Box as={as}>
    <HStack width="100%" justify="space-between">
      <Heading textTransform="uppercase">{title}</Heading>
      {href && hrefTitle && (
        <MyLink href={href}>
          <HStack>
            <Text fontWeight={600} color="red.600">
              {hrefTitle}
            </Text>
            <Text as="i" color="red.600">
              <ArrowIcon />
            </Text>
          </HStack>
        </MyLink>
      )}
    </HStack>
    <Box mt="80px">{children}</Box>
  </Box>
);

export default Section;
