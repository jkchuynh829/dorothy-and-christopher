import { useRouter } from 'next/router';
import { useState, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import tw, { styled } from 'twin.macro';
import { useThrottledCallback } from 'use-debounce';
import NavLink from './NavLink';

const Container = animated(styled.nav`
  ${tw`absolute w-full top-0 bg-transparent fixed flex justify-center items-center z-10`}
`);

const Navigation = () => {
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
    console.log('yoyoyo');
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  const navAnimation = useSpring({
    height: scrolled ? '5rem' : '10rem',
    color: scrolled ? '#0F0F0F' : '#FAFAFA',
    backgroundColor: scrolled ? '#FAFAFA' : 'transparent',
  });

  const isCurrentPath = useCallback(
    (link: string) => {
      return link === pathname;
    },
    [pathname]
  );

  return (
    <Container style={navAnimation}>
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
