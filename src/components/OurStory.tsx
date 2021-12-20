import React from 'react';
import tw, { styled } from 'twin.macro';
import { Aerotis } from './Typography';
import ContentWrapper from './ContentWrapper';
import StorySection from './StorySection';
import hero from '../assets/our-story/hero.jpg';
import storyPhoto1 from '../assets/our-story/DOROTHYANDCHRIS3.jpg';
import storyPhoto2 from '../assets/our-story/DOROTHYANDCHRIS58.jpg';
import storyPhoto3 from '../assets/our-story/DOROTHYANDCHRIS74.jpg';
import storyPhoto4 from '../assets/our-story/DOROTHYANDCHRIS16.jpg';
import Image from 'next/image';
import GoldTextClip from './GoldTextClip';

const Container = tw.div`w-full flex flex-col items-center overflow-scroll h-full bg-white`;
const Heading = tw.div`w-full text-white text-8xl mb-6 z-50`;

const HeroContainer = styled.div`
  ${tw`relative max-h-screen w-full flex justify-center items-center`}
  height: 50vh;
`;
const HeroImageContainer = styled.div`
  ${tw`absolute top-0 left-0 w-full h-full`}
  img {
    filter: blur(6px) grayscale(40%);
  }
  &::after {
    content: '';
    ${tw`absolute w-full h-full bg-black opacity-40`}
  }
`;

const OurStory = () => {
  return (
    <Container>
      <HeroContainer>
        <HeroImageContainer>
          <Image
            src={hero}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </HeroImageContainer>
        <ContentWrapper>
          <Heading>
            <GoldTextClip>
              <Aerotis>our story</Aerotis>
            </GoldTextClip>
          </Heading>
        </ContentWrapper>
      </HeroContainer>
      <ContentWrapper>
        <StorySection image={storyPhoto1} format="image-right">
          In early 2011 while at USC, I joined a fraternity and had already been
          in the Filipino club (Troy Philippines). Dorothy had been a part of
          the Vietnamese Student Association (VSA). Troy Phi and VSA
          collaborated on a boba fundraiser and I stopped by to support.
          Apparently, this is where Dorothy first saw me and thought it was
          perplexing that I ordered 2 boba drinks and finished both of them
          right then and there. (She should’ve known right away that we were
          meant to be because we’re both boba addicts!) Later that night,
          funnily enough, she was assigned to be my “sister” as a part of the
          fraternity’s sister program...and that’s how we officially met
          (awkward laugh)...weird, right?
        </StorySection>
        <StorySection image={storyPhoto2} format="image-left">
          Throughout that same year, I got to know her more. Our first
          “adventure” was a trip to the Bay Area with some of our USC friends
          (shout out to Road Trip Crew aka “RTC”!). That’s when I started to
          realize...this girl is really weird…but I kinda like her! Fast forward
          a few months, without any regard for the dating laws in the Greek
          handbook, we started dating. On August 20, 2012, we had dinner at the
          Alcove Cafe in Los Feliz. By fate, they were also having a movie night
          and played her favorite movie, Stand By Me. I couldn’t wait any longer
          and right before the movie began, I asked her to be my girlfriend, and
          the rest is history!
        </StorySection>
        <StorySection image={storyPhoto3} format="image-right">
          Since then, we’ve gone on many more adventures and started a hashtag:
          #duckiexduarteadventures. “Duckie” is a nickname she gave to me (ask
          Dorothy why if you’re interested) and “Duarte” is the nickname she
          acquired in high school. One of our first dates was when I took her to
          see her favorite DJ, Kaskade. Since then, we’ve gone to many more of
          his shows and have made it an annual tradition to see him live.
        </StorySection>
        <StorySection image={storyPhoto3} format="image-left">
          We’ve also gone to various cities around the world and have made it a
          mission to collect refrigerator magnets of the cities we visit. As
          relatively diehard USC football fans since our childhood, we went to
          games together as students and now continue to be season ticket
          holders. One of our most memorable trips was seeing USC lose to
          Alabama in Dallas 6-52. At least we got the magnet though! Our
          favorite experiences at the Coliseum span from storming the field
          after we beat Stanford our senior year to beating Texas in double
          overtime and finally to our proposal.
        </StorySection>
        <StorySection image={storyPhoto4} format="image-right">
          My favorite adventures though are the ones we have every day at home.
          Whether we’re watching football or One Tree Hill, or if I’m losing to
          her at board games, or even just sitting there while she cooks because
          I’m useless in the kitchen, I cherish these small moments. These
          adventures have culminated in our wedding day, August 20, 2022,
          exactly 10 years after I asked her to be my girlfriend. Thank you to
          everyone who’s been a part of our story and adventure.
        </StorySection>
      </ContentWrapper>
    </Container>
  );
};

export default OurStory;
