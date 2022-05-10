import { useRouter } from 'next/router';
import { useState, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import tw, { styled } from 'twin.macro';
import { useThrottledCallback } from 'use-debounce';
import { useSelector } from '../store';
import NavLink from './NavLink';

const Container = animated(
  styled.nav`
    ${tw`absolute w-full top-0 bg-transparent fixed flex md:flex-col justify-center items-center z-20`}
  `
);

const Gradient = styled.div`
  ${tw`absolute top-0 left-0 w-full h-full`}
  background: linear-gradient(to bottom, rgba(15, 15, 15, 0.50), transparent);
`;

const Navigation = () => {
  const maintenanceMode = useSelector(
    (state) => state.maintenanceMode.maintenanceEnabled
  );

  const rsvpEnabled = useSelector((state) => state.maintenanceMode.rsvpEnabled);

  const { asPath } = useRouter();

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
    height: scrolled ? '6rem' : '10rem',
    color: scrolled ? '#0F0F0F' : '#FAFAFA',
    background: scrolled ? '#FAFAFA' : 'transparent',
    boxShadow: scrolled
      ? '0px 1px 3px rgba(15, 15, 15, 0.15)'
      : '0px 1px 3px rgba(0, 0, 0, 0)',
  });

  const isCurrentPath = useCallback(
    (link: string) => {
      return link === asPath;
    },
    [asPath]
  );

  if (maintenanceMode) return <></>;

  return (
    <Container style={navAnimation}>
      {!scrolled && <Gradient />}
      <NavLink
        href="/"
        selected={isCurrentPath('/')}
        onClick={() => window.scrollTo(0, 0)}
      >
        Home
      </NavLink>
      <NavLink href="/our-story" selected={isCurrentPath('/our-story')}>
        Our Story
      </NavLink>
      <NavLink href="/rsvp" selected={isCurrentPath('/rsvp')}>
        {rsvpEnabled ? 'RSVP' : 'Save the Date'}
      </NavLink>
    </Container>
  );
};

export default Navigation;
