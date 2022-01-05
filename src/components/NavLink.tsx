import Link from 'next/link';
import tw, { styled } from 'twin.macro';

interface ContainerProps {
  selected: boolean;
}

const Container = styled.a<ContainerProps>`
  ${tw`relative font-urbanist uppercase text-nav-link mx-8 cursor-pointer transition-opacity hover:opacity-35`}
  ${({ selected }) =>
    selected && tw`border-b md:border-0 md:font-bold md:opacity-50`}
`;

interface NavLinkPropsBase {
  href: string;
  selected: boolean;
  onClick?: () => void;
}

type NavLinkProps = React.PropsWithChildren<NavLinkPropsBase>;

const NavLink = ({ href, selected, children, onClick }: NavLinkProps) => {
  return (
    <Link href={href}>
      <Container selected={selected} onClick={onClick}>
        {children}
      </Container>
    </Link>
  );
};

export default NavLink;
