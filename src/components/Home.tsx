import React from 'react';
import tw, { styled } from 'twin.macro';
import { Aerotis, Almara, H2 } from './Typography';
import ContentWrapper from './ContentWrapper';
import image1 from '../assets/photos/hero-1.jpg';
import image2 from '../assets/photos/hero-2.jpg';
import image3 from '../assets/photos/hero-3.jpg';
import image4 from '../assets/photos/hero-4.jpg';
import image5 from '../assets/photos/hero-5.jpg';

import GoldTextClip from './GoldTextClip';
import Carousel from './Carousel';
import SaveTheDate from './SaveTheDate';

const Container = tw.div`w-full flex flex-col items-center overflow-scroll h-full`;
const HeroHeading = tw.div`text-center z-10 mt-120 text-white text-8xl`;
const Heading = tw.div`mt-44 text-white text-8xl w-full mb-6`;
const ExtraMargin = tw.div`flex justify-center w-full mb-96`;

const HeroContainer = styled.div`
  ${tw`relative min-h-screen w-full flex justify-center items-center`}
  &::after {
    content: '';
    ${tw`absolute w-full h-full bg-black opacity-35`}
  }
`;
const PaddedAerotis = styled(Aerotis)`
  ${tw`mb-6`}
`;

const Home = () => {
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
      <ExtraMargin>
        <ContentWrapper>
          <Heading id="save-the-date">
            <GoldTextClip>
              <Aerotis>save the date</Aerotis>
            </GoldTextClip>
          </Heading>
          <H2>PASADENA, CA AUGUST 20, 2022</H2>
          <SaveTheDate />
        </ContentWrapper>
      </ExtraMargin>
    </Container>
  );
};

export default Home;
