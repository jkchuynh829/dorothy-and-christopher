import React from 'react';
import tw from 'twin.macro';
import { Aerotis, Paragraph as P } from './Typography';
import ContentWrapper from './ContentWrapper';
import GoldTextClip from './GoldTextClip';

const Container = tw.div`w-full flex flex-col items-center overflow-scroll h-full`;
const Heading = tw.div`w-full mt-80 text-black text-8xl mb-6`;

const OurStory = () => {
  return (
    <Container>
      <ContentWrapper>
        <Heading>
          <GoldTextClip>
            <Aerotis>our story</Aerotis>
          </GoldTextClip>
        </Heading>
        <P>
          I&apos;m baby celiac twee skateboard pabst. Direct trade man bun
          helvetica tacos street art man braid. Hot chicken cray hexagon raw
          denim, swag four dollar toast bitters ennui hammock vegan mlkshk tacos
          keytar forage. Fam try-hard edison bulb, mlkshk fingerstache offal
          pop-up kinfolk prism fanny pack roof party franzen shaman. Lo-fi
          celiac everyday carry, biodiesel offal stumptown activated charcoal
          dreamcatcher blog flexitarian pug sustainable selfies. Cloud bread
          hexagon humblebrag, bushwick gentrify keffiyeh vape tacos distillery
          leggings pitchfork blog everyday carry. Artisan ennui master cleanse,
          glossier helvetica shabby chic brunch occupy trust fund ramps iPhone.
        </P>
        <P>
          Hashtag food truck glossier crucifix chia vinyl messenger bag small
          batch gastropub squid paleo. Lo-fi PBR&B pinterest YOLO tousled. Plaid
          enamel pin paleo small batch pickled iPhone trust fund tattooed
          sartorial. Pop-up ugh cardigan, tbh bushwick portland tousled marfa.
        </P>
        <P>
          Microdosing woke retro yuccie DIY hashtag taxidermy. Cornhole kinfolk
          you probably haven&apos;t heard of them wolf readymade pok pok synth
          etsy meggings. Locavore mixtape iPhone kinfolk sartorial street art,
          bushwick normcore ugh gentrify PBR&B heirloom schlitz ethical lyft.
          Direct trade raclette taxidermy palo santo art party meh, portland
          chillwave four loko locavore forage umami cronut migas swag. Synth
          mlkshk small batch 90&apos;s, cronut biodiesel lumbersexual fam
          unicorn iceland food truck meh.
        </P>
        <P>
          Humblebrag glossier portland irony. Williamsburg scenester meditation
          craft beer wolf listicle fixie etsy. Flexitarian tofu poutine, ethical
          shoreditch DIY four loko typewriter hell of edison bulb kinfolk
          heirloom. Kickstarter whatever flannel vaporware, echo park kogi
          fashion axe butcher kitsch authentic quinoa chia neutra.
        </P>
      </ContentWrapper>
    </Container>
  );
};

export default OurStory;
