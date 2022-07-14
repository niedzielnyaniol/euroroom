import MyLink from '../../MyLink';

type FooterLinkProps = {
  children: string;
  href: string;
};

const FooterLink = ({ children, href }: FooterLinkProps) => (
  <div>
    <MyLink underline color="#fff" href={href}>
      {children}
    </MyLink>
  </div>
);

export default FooterLink;
