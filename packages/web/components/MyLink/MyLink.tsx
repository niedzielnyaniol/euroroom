import { Text } from '@chakra-ui/react';
import Link from 'next/link';
import { ComponentProps } from 'react';

type MyLinkProps = ComponentProps<typeof Link> & {
  underline?: boolean;
  color?: string;
};

const MyLink = ({ underline, children, ...rest }: MyLinkProps) => (
  <Text
    as="span"
    {...(underline && {
      display: 'inline-block',
      pos: 'relative',
      _after: {
        content: '""',
        position: 'absolute',
        width: '100%',
        transform: 'scaleX(0)',
        height: '1px',
        bottom: 0,
        left: 0,
        backgroundColor: 'currentcolor',
        transformOrigin: 'bottom right',
        transition: 'transform 0.25s ease-out',
      },
      _hover: {
        _after: {
          transform: 'scaleX(1)',
          transformOrigin: 'bottom left',
        },
      },
    })}
  >
    <Link {...rest}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>{children}</a>
    </Link>
  </Text>
);

export default MyLink;
