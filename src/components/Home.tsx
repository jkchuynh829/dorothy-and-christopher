import React from 'react';
import tw, { styled } from 'twin.macro';
import Image from 'next/image';
import { Aerotis, Almara, Paragraph } from './Typography';
import image1 from '../assets/photos/hero-1.jpg';
import image2 from '../assets/photos/hero-2.jpg';
import image3 from '../assets/photos/hero-3.jpg';
import image4 from '../assets/photos/hero-4.jpg';
import image5 from '../assets/photos/hero-5.jpg';
import saveTheDate from '../assets/our-story/DOROTHYANDCHRIS74.jpg';
import GoldTextClip from './GoldTextClip';
import Carousel from './Carousel';
import SaveTheDate from './SaveTheDate';
import Modal from './Modal';
import ConfirmRsvp from './ConfirmRsvp';
import { useSelector } from '../store';
import { useDispatch } from 'react-redux';
import { closeModal, setSelectedParty } from '../store/guests';
import { closeRsvpModal } from '../store/rsvp';
import Rsvp from './Rsvp';

const Container = tw.div`w-full flex flex-col items-center overflow-hidden h-full`;
const HeroHeading = tw.div`text-center z-10 mt-120 md:mt-60 text-white text-8xl md:text-6xl md:mx-14`;
const Section = styled.div`
  ${tw`relative min-h-screen w-full flex flex-row justify-center max-h-14`}
  min-height: 980px;
`;
const Content = tw.div`absolute w-full h-full flex justify-center items-center flex-col text-white`;

const HeroContainer = styled.div`
  ${tw`relative min-h-screen md:min-h-mobile-carousel w-full flex justify-center items-center`}
  &::after {
    content: '';
    ${tw`absolute w-full h-full bg-black opacity-35 md:opacity-50`}
  }
`;
const PaddedAerotis = styled(Aerotis)`
  ${tw`mb-6`}
`;
const SectionInner = styled.div`
  max-width: 80rem;
  ${tw`bg-white w-full flex flex-row`}
`;
const Block = styled.div`
  ${tw`relative flex-1 m-16 my-36 overflow-scroll border border-solid border-light-gray`};
  &:first-of-type {
    ${tw`mr-8 md:mx-0 py-8`}
  }
  &:last-of-type {
    ${tw`ml-8 text-white md:hidden`}
    &::after {
      content: '';
      ${tw`absolute w-full h-full bg-black opacity-35`}
    }
  }
`;
const AerotisHeading = styled(Aerotis)`
  ${tw`text-6xl mb-4 z-20`}
`;
const SaveTheDateP = styled(Paragraph)`
  ${tw`z-20 mb-2 text-2xl`}
`;
const MobileSection = styled(Section)`
  ${tw`hidden md:block`}
  &::after {
    content: '';
    ${tw`absolute w-full h-full bg-black opacity-35`}
  }
`;

const Home = () => {
  const dispatch = useDispatch();

  const { updatePartySuccess } = useSelector((state) => state.guests);
  const { showRsvpModal } = useSelector((state) => state.rsvp);
  const { rsvpEnabled } = useSelector((state) => state.maintenanceMode);
  return (
    <Container>
      <HeroContainer>
        <Carousel images={[image1, image2, image3, image4, image5]} />
        <HeroHeading>
          <GoldTextClip>
            <PaddedAerotis>
              dorothy <Almara>&</Almara> christopher
            </PaddedAerotis>
          </GoldTextClip>
        </HeroHeading>
      </HeroContainer>
      <Section id="rsvp">
        <SectionInner>
          <Block>{rsvpEnabled ? <Rsvp /> : <SaveTheDate />}</Block>
          <Block>
            <Image
              src={saveTheDate}
              alt="hero"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
            <Content>
              <AerotisHeading>
                {rsvpEnabled ? 'rsvp' : 'save the date'}
              </AerotisHeading>
              <SaveTheDateP>August 20, 2022</SaveTheDateP>
              <SaveTheDateP>Pasadena, CA</SaveTheDateP>
            </Content>
          </Block>
        </SectionInner>
      </Section>
      <MobileSection>
        <Image
          src={saveTheDate}
          alt="hero"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <Content>
          <AerotisHeading>
            {rsvpEnabled ? 'rsvp' : 'save the date'}
          </AerotisHeading>{' '}
          <SaveTheDateP>August 20, 2022</SaveTheDateP>
          <SaveTheDateP>Pasadena, CA</SaveTheDateP>
        </Content>
      </MobileSection>
      <Modal
        isOpen={updatePartySuccess}
        onClose={() => {
          dispatch(closeModal());
          dispatch(setSelectedParty(null));
        }}
      />
      <ConfirmRsvp
        isOpen={showRsvpModal}
        onClose={() => {
          dispatch(closeRsvpModal());
        }}
      />
    </Container>
  );
};

export default Home;
