import { useCallback } from 'react';
import tw from 'twin.macro';
import GoldTextClip from './GoldTextClip';
import { H1, Paragraph, Aerotis } from './Typography';

const Container = tw.div`flex justify-center`;
const Inner = tw.div`mt-52 text-center max-w-2xl px-6`;
const Links = tw.a`font-urbanist text-lg mb-0 font-bold underline cursor-pointer`;
const Section = tw.div`mb-12`;
const Aside = tw(Paragraph)`mb-0 italic`;
const Seperator = tw.div`w-full h-1 bg-pink`;

const ThingsToDo = () => {
  const generateLink = useCallback((link: string) => {
    return {
      href: link,
      target: '_blank',
      rel: 'noopener noreferrer',
    };
  }, []);
  return (
    <Container>
      <Inner>
        <Section>
          <Paragraph>
            Here is a list of places and things we recommend while you're in LA.
            Some of these are our favorite places to visit, we hope you enjoy
            your time here!
          </Paragraph>
        </Section>

        <GoldTextClip>
          <Seperator />
        </GoldTextClip>

        <Section>
          <H1>
            <Aerotis>hotels</Aerotis>
          </H1>
          <Paragraph>
            We don't have any hotel room blocks, but these are hotels near our
            reception venue.
          </Paragraph>

          <Links
            {...generateLink(
              'https://www.hyatt.com/en-US/hotel/california/hyatt-place-pasadena/laczp'
            )}
          >
            Hyatt Place Pasadena
          </Links>
          <Paragraph>399 E Green St, Pasadena, CA 91101</Paragraph>

          <Links
            {...generateLink(
              'https://www.marriott.com/en-us/hotels/laxsp-sheraton-pasadena-hotel/overview/'
            )}
          >
            Sheraton Hotel Pasadena
          </Links>
          <Paragraph>303 Cordova St, Pasadena, CA 91101</Paragraph>

          <Links
            {...generateLink(
              'https://www.hilton.com/en/hotels/pasphhf-hilton-pasadena/'
            )}
          >
            Hilton Pasadena
          </Links>
          <Paragraph>168 S Los Robles Ave, Pasadena, CA 91101</Paragraph>
        </Section>

        <GoldTextClip>
          <Seperator />
        </GoldTextClip>

        <Section>
          <H1>
            <Aerotis>dining and restaurants</Aerotis>
          </H1>
          <Links {...generateLink('https://www.alcovecafe.com/cafe')}>
            Alcove Cafe
          </Links>
          <Aside>Where Chris asked Dorothy to be his girlfriend</Aside>
          <Paragraph>1929 Hillhurst Ave, Los Angeles, CA 90027</Paragraph>

          <Links {...generateLink('https://www.simpangasia.com/')}>
            Simpang Asia
          </Links>
          <Aside>We live a block away</Aside>
          <Paragraph>10433 National Blvd #2, Los Angeles, CA 90034</Paragraph>

          <Links {...generateLink('http://haejangchon.com/')}>
            Hae Jang Chon Korean BBQ
          </Links>
          <Paragraph>3821 W 6th St, Los Angeles, CA 90020</Paragraph>

          <Links
            {...generateLink(
              'https://www.yelp.com/biz/t-kebob-t-%E4%B8%B2-monterey-park-3'
            )}
          >
            T - KEBOB
          </Links>
          <Aside>It's bomb, just go here!</Aside>
          <Paragraph>168 E Garvey Ave Ste B, Monterey Park, CA 91755</Paragraph>
        </Section>

        <GoldTextClip>
          <Seperator />
        </GoldTextClip>

        <Section>
          <H1>
            <Aerotis>dessert</Aerotis>
          </H1>
          <Links {...generateLink('http://bobaguys.com')}>
            Boba Guys - Culver City
          </Links>
          <Aside>
            Our favorite boba spot but there are other locations around LA!
          </Aside>
          <Paragraph>
            8820 Washington Blvd #107, Culver City, CA 90232
          </Paragraph>

          <Links {...generateLink('http://jenis.com')}>
            Jeni's Splendid Ice Cream
          </Links>
          <Aside>Multiple locations around LA as well</Aside>
          <Paragraph>1954 Hillhurst Ave, Los Angeles, CA 90027</Paragraph>

          <Links {...generateLink('https://kith.com/pages/la-treats-menu')}>
            KITH Treats
          </Links>
          <Aside>
            Dorothy's favorite clothing brand that also sells ice cream
          </Aside>
          <Paragraph>8500 Sunset Blvd, West Hollywood, CA 90069</Paragraph>
        </Section>

        <GoldTextClip>
          <Seperator />
        </GoldTextClip>

        <Section>
          <H1>
            <Aerotis>fun things to do</Aerotis>
          </H1>
          <Links
            {...generateLink('https://www.instagram.com/the.aestheticyn/')}
          >
            The Aestheticyn
          </Links>
          <Paragraph>
            Dorothy's sister, Cynthia, is offering all wedding guests 15% off
            her beauty services to get you wedding ready! DM her on Instagram to
            book facials, lash lifts, brow laminations and more. You're welcome
            to book multiple appointments until August 18th! Make sure to
            mention our wedding upon booking :)
          </Paragraph>
          <Links
            {...generateLink(
              'https://www.bowlero.com/location/bowlero-arcadia'
            )}
          >
            Bowlero - Arcadia
          </Links>
          <Paragraph>400 S Baldwin Ave, Arcadia, CA 91007</Paragraph>
          <Links {...generateLink('https://topgolf.com/us/el-segundo/')}>
            Topgolf - El Segundo
          </Links>
          <Aside>Plan ahead because they have a long wait!</Aside>
          <Paragraph>
            400 S Pacific Coast Highway, El Segundo, CA 90245
          </Paragraph>
          <Links {...generateLink('https://www.60out.com/')}>
            Escape rooms - 60Out
          </Links>
          <Paragraph>
            Our most recommended escape room host! They have locations all over
            LA so you have a multitude of choices.
          </Paragraph>
          <Links {...generateLink('https://www.oldpasadena.org/')}>
            Shopping in Old Town Pasadena
          </Links>
          <Paragraph>
            There are plenty of stores along Colorado Blvd. in Pasadena for
            shopping.
          </Paragraph>
        </Section>
      </Inner>
    </Container>
  );
};

export default ThingsToDo;
