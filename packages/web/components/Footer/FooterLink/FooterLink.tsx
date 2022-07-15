import MyLink from '../../MyLink';

type FooterLinkProps = {
  children: string;
  href: string;
};

const FooterLink = ({ children, href }: FooterLinkProps) => (
  <div>
    <MyLink underline href={href}>
      {children}
    </MyLink>
  </div>
);

export default FooterLink;
