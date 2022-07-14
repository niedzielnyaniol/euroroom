import classNames from 'classnames';
import Link from 'next/link';
import { ComponentProps } from 'react';
import styles from './MyLink.module.css';

type MyLinkProps = ComponentProps<typeof Link> & {
  underline?: boolean;
  color?: string;
};

const MyLink = ({ underline, color, children, ...rest }: MyLinkProps) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  /* @ts-expect-error */
  <span className={classNames({ [styles['underline-hover']]: underline })} style={{ '--text-decoration-color': color }}>
    <Link {...rest}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>{children}</a>
    </Link>
  </span>
);

export default MyLink;
