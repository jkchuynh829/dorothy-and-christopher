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

const Container = tw.div`w-full flex flex-col items-center overflow-scroll h-full`;
const HeroHeading = tw.div`text-center z-10 mt-120 md:mt-0 text-white text-8xl md:text-6xl`;
const Section = tw.div`min-h-screen w-full flex flex-row justify-center`;
const Content = tw.div`absolute w-full h-full flex justify-center items-center flex-col`;

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
const SectionInner = styled.div`
  max-width: 80rem;
  ${tw`bg-white w-full flex flex-row`}
`;
const Block = styled.div`
  ${tw`relative flex-1 m-16 my-36`};
  &:first-of-type {
    ${tw`mr-8`}
  }
  &:last-of-type {
    ${tw`ml-8 text-white`}
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

const Home = () => {
  return (
    <Container>
      <HeroContainer>
        <Carousel images={[image2, image1, image3, image4, image5]} />
        <HeroHeading>
          <GoldTextClip>
            <PaddedAerotis>
              dorothy <Almara>&</Almara> christopher
            </PaddedAerotis>
          </GoldTextClip>
        </HeroHeading>
      </HeroContainer>
      <Section id="save-the-date">
        <SectionInner>
          <Block>
            <SaveTheDate />
          </Block>
          <Block>
            <Image
              src={saveTheDate}
              alt="hero"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
            <Content>
              <AerotisHeading>save the date</AerotisHeading>
              <SaveTheDateP>August 20, 2022</SaveTheDateP>
              <SaveTheDateP>Pasadena, CA</SaveTheDateP>
            </Content>
          </Block>
        </SectionInner>
      </Section>
    </Container>
  );
};

export default Home;
