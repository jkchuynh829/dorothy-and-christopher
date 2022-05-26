import { useRouter } from 'next/router';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { useSpring, animated } from 'react-spring';
import tw, { styled } from 'twin.macro';
import { useThrottledCallback } from 'use-debounce';
import { useSelector } from '../store';
import NavLink from './NavLink';

const SCROLLED_PAGES = [
  '/wedding-party',
  '/faqs',
  '/things-to-do',
  '/registry',
];

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
    const shouldScroll = SCROLLED_PAGES.includes(asPath);
    if (window.scrollY > 100 && !scrolled) {
      setScrolled(true);
    }
    if (window.scrollY <= 100 && scrolled && !shouldScroll) {
      setScrolled(false);
    }
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  const shouldScroll = useMemo(() => {
    return scrolled || SCROLLED_PAGES.includes(asPath);
  }, [scrolled, asPath]);

  const navAnimation = useSpring({
    height: shouldScroll ? '6rem' : '10rem',
    color: shouldScroll ? '#0F0F0F' : '#FAFAFA',
    background: shouldScroll ? '#FAFAFA' : 'transparent',
    boxShadow: shouldScroll
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
      {!scrolled && !SCROLLED_PAGES.includes(asPath) && <Gradient />}
      <NavLink
        href="/"
        selected={isCurrentPath('/')}
        onClick={() => window.scrollTo(0, 0)}
      >
        Home
      </NavLink>
      <NavLink href="/#rsvp" selected={isCurrentPath('/#rsvp')}>
        {rsvpEnabled ? 'RSVP' : 'Save the Date'}
      </NavLink>
      <NavLink href="/our-story" selected={isCurrentPath('/our-story')}>
        Our Story
      </NavLink>
      <NavLink href="/wedding-party" selected={isCurrentPath('/wedding-party')}>
        Wedding Party
      </NavLink>
      <NavLink href="/faqs" selected={isCurrentPath('/faqs')}>
        FAQS
      </NavLink>
      <NavLink href="/things-to-do" selected={isCurrentPath('/things-to-do')}>
        Things to do
      </NavLink>
      <NavLink href="/registry" selected={isCurrentPath('/registry')}>
        Registry
      </NavLink>
    </Container>
  );
};

export default Navigation;
