import Link from 'next/link';
import tw, { styled } from 'twin.macro';

interface ContainerProps {
  selected: boolean;
}

const Container = styled.a<ContainerProps>`
  ${tw`relative font-urbanist uppercase text-nav-link mx-8 cursor-pointer transition-opacity my-1 hover:opacity-35`}
  ${({ selected }) => selected && tw`border-b md:mb-3`}
`;

interface NavLinkPropsBase {
  href: string;
  selected: boolean;
}

type NavLinkProps = React.PropsWithChildren<NavLinkPropsBase>;

const NavLink = ({ href, selected, children }: NavLinkProps) => {
  return (
    <Link href={href}>
      <Container selected={selected}>{children}</Container>
    </Link>
  );
};

export default NavLink;
