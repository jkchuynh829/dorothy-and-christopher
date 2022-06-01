import { mdiClose, mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import { useRouter } from 'next/router';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
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

const Mobile = tw.div`hidden lg:flex w-full`;
const Desktop = tw.div`block lg:hidden`;
const HamburgerContainer = tw.div`cursor-pointer opacity-50 hover:opacity-100 mx-8`;
const CloseIconContainer = tw.div`cursor-pointer opacity-50 hover:opacity-100 w-full flex justify-end mb-3`;
const MobileMenu = styled.div<{ showMobileMenu: boolean }>`
  ${tw`hidden lg:flex`}
  position: absolute;
  top: 0;
  left: -375px;
  width: 375px;
  height: 100vh;
  background: white;
  padding: 24px;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0px 1px 3px rgba(15, 15, 15, 0.15);
  color: #0f0f0f;
  ${({ showMobileMenu }) => (showMobileMenu ? 'left: 0px;' : 'left: -375px;')}
`;

const Gradient = styled.div`
  ${tw`absolute top-0 left-0 w-full h-full`}
  background: linear-gradient(to bottom, rgba(15, 15, 15, 0.50), transparent);
`;

const Navigation = () => {
  const maintenanceMode = useSelector(
    (state) => state.maintenanceMode.maintenanceEnabled
  );

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const rsvpEnabled = useSelector((state) => state.maintenanceMode.rsvpEnabled);

  const { pathname } = useRouter();

  const [scrolled, setScrolled] = useState(false);

  const onScroll = useThrottledCallback(() => {
    const shouldScroll = SCROLLED_PAGES.includes(pathname);
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
    return scrolled || SCROLLED_PAGES.includes(pathname);
  }, [scrolled, pathname]);

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
      return link === pathname;
    },
    [pathname]
  );

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu(!showMobileMenu);
  }, [showMobileMenu, setShowMobileMenu]);

  if (maintenanceMode) return <></>;

  return (
    <Container style={navAnimation}>
      <Mobile style={{ color: navAnimation.color as any }}>
        <HamburgerContainer onClick={toggleMobileMenu}>
          <Icon path={mdiMenu} size="32px" />
        </HamburgerContainer>
      </Mobile>
      <Desktop>
        {!scrolled && !SCROLLED_PAGES.includes(pathname) && <Gradient />}
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
        <NavLink
          href="/wedding-party"
          selected={isCurrentPath('/wedding-party')}
        >
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
      </Desktop>
      <MobileMenu showMobileMenu={showMobileMenu}>
        <CloseIconContainer onClick={toggleMobileMenu}>
          <Icon path={mdiClose} size="32px" />
        </CloseIconContainer>
        <NavLink
          href="/"
          selected={isCurrentPath('/')}
          onClick={() => window.scrollTo(0, 0)}
          close={toggleMobileMenu}
        >
          Home
        </NavLink>
        <NavLink
          href="/#rsvp"
          selected={isCurrentPath('/#rsvp')}
          close={toggleMobileMenu}
        >
          {rsvpEnabled ? 'RSVP' : 'Save the Date'}
        </NavLink>
        <NavLink
          href="/our-story"
          selected={isCurrentPath('/our-story')}
          close={toggleMobileMenu}
        >
          Our Story
        </NavLink>
        <NavLink
          close={toggleMobileMenu}
          href="/wedding-party"
          selected={isCurrentPath('/wedding-party')}
        >
          Wedding Party
        </NavLink>
        <NavLink
          href="/faqs"
          selected={isCurrentPath('/faqs')}
          close={toggleMobileMenu}
        >
          FAQS
        </NavLink>
        <NavLink
          href="/things-to-do"
          selected={isCurrentPath('/things-to-do')}
          close={toggleMobileMenu}
        >
          Things to do
        </NavLink>
        <NavLink
          href="/registry"
          selected={isCurrentPath('/registry')}
          close={toggleMobileMenu}
        >
          Registry
        </NavLink>
      </MobileMenu>
    </Container>
  );
};

export default Navigation;
