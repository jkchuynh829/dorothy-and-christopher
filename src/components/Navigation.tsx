import { useRouter } from 'next/router';
import { useState, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import tw, { styled } from 'twin.macro';
import { useThrottledCallback } from 'use-debounce';
import { useSelector } from '../store';
import NavLink from './NavLink';

const Container = animated(
  styled.nav`
    ${tw`absolute w-full top-0 bg-transparent fixed flex justify-center items-center z-20`}
  `
);

const Gradient = styled.div`
  ${tw`absolute top-0 left-0 w-full h-full`}
  background: linear-gradient(to bottom, rgba(15, 15, 15, 0.50), transparent);
`;

interface NavigationProps {
  disableScrollEffect: boolean;
}
const Navigation = ({ disableScrollEffect }: NavigationProps) => {
  const maintenanceMode = useSelector((state) => state.maintenanceMode.enabled);

  const { pathname } = useRouter();

  const [scrolled, setScrolled] = useState(false);

  const onScroll = useThrottledCallback(() => {
    if (window.scrollY > 100 && !scrolled) {
      setScrolled(true);
    }
    if (window.scrollY <= 100 && scrolled) {
      setScrolled(false);
    }
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  const navAnimation = useSpring({
    height: scrolled || disableScrollEffect ? '5rem' : '10rem',
    color: scrolled || disableScrollEffect ? '#0F0F0F' : '#FAFAFA',
    background: scrolled || disableScrollEffect ? '#FAFAFA' : 'transparent',
    boxShadow:
      scrolled || disableScrollEffect
        ? '0px 1px 3px rgba(15, 15, 15, 0.15)'
        : '0px 1px 3px rgba(0, 0, 0, 0)',
  });

  const isCurrentPath = useCallback(
    (link: string) => {
      return link === pathname;
    },
    [pathname]
  );

  if (maintenanceMode) return <></>;

  return (
    <Container style={navAnimation}>
      {!scrolled && <Gradient />}
      <NavLink href="/" selected={isCurrentPath('/')}>
        Home
      </NavLink>
      <NavLink href="/our-story" selected={isCurrentPath('/our-story')}>
        Our Story
      </NavLink>
      <NavLink href="/save-the-date" selected={isCurrentPath('/save-the-date')}>
        Save the Date
      </NavLink>
    </Container>
  );
};

export default Navigation;
