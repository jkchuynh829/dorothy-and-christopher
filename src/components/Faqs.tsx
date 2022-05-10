import tw from 'twin.macro';
import { H2, Paragraph, Aerotis } from './Typography';

const Container = tw.div`flex justify-center`;
const Inner = tw.div`mt-36 text-center max-w-lg`;
const Links = tw.a`font-urbanist text-lg mb-0 font-bold underline cursor-pointer`;
const Section = tw.div`mb-8`;
const Aside = tw(Paragraph)`mb-0 italic`;

const Faqs = () => {
  return (
    <Container>
      <Inner>
        <Paragraph>
          Here is a list of places and things we recommend while you’re in LA.
          Some of these are our favorite places to visit, we hope you enjoy your
          time here!
        </Paragraph>

        <Section>
          <H2>
            <Aerotis>Hotels</Aerotis>
          </H2>
          <Paragraph>
            We don’t have any hotel room blocks, but these are hotels near our
            reception venue.
          </Paragraph>

          <Links>Hyatt Place Pasadena</Links>
          <Paragraph>399 E Green St, Pasadena, CA 91101</Paragraph>

          <Links>Sheraton Hotel Pasadena</Links>
          <Paragraph>303 Cordova St, Pasadena, CA 91101</Paragraph>

          <Links>Hilton Pasadena</Links>
          <Paragraph>168 S Los Robles Ave, Pasadena, CA 91101</Paragraph>
        </Section>

        <Section>
          <H2>
            <Aerotis>Dining and Restaurants</Aerotis>
          </H2>
          <Links>
            Alcove Cafe (where Chris asked Dorothy to be his girlfriend)
          </Links>
          <Paragraph>1929 Hillhurst Ave, Los Angeles, CA 90027</Paragraph>

          <Links>Simpang Asia (we live a block away)</Links>
          <Paragraph>10433 National Blvd #2, Los Angeles, CA 90034</Paragraph>

          <Links>Hae Jang Chon Korean BBQ</Links>
          <Paragraph>3821 W 6th St, Los Angeles, CA 90020</Paragraph>

          <Links>T - KEBOB (it’s bomb, just go here)</Links>
          <Paragraph>168 E Garvey Ave Ste B, Monterey Park, CA 91755</Paragraph>
        </Section>

        <Section>
          <H2>
            <Aerotis>Dessert</Aerotis>
          </H2>
          <Links>Boba Guys - Culver City</Links>
          <Aside>
            Our favorite boba spot but there are other locations around LA!
          </Aside>
          <Paragraph>
            8820 Washington Blvd #107, Culver City, CA 90232
          </Paragraph>

          <Links>Jeni’s Splendid Ice Cream</Links>
          <Aside>Multiple locations around LA as well</Aside>
          <Paragraph>1954 Hillhurst Ave, Los Angeles, CA 90027</Paragraph>

          <Links>KITH Treats</Links>
          <Aside>
            Dorothy’s favorite clothing brand that also sells ice cream
          </Aside>
          <Paragraph>8500 Sunset Blvd, West Hollywood, CA 90069</Paragraph>
        </Section>

        <Section>
          <H2>
            <Aerotis>Fun things to do</Aerotis>
          </H2>
          <Links>Bowlero - Arcadia</Links>
          <Paragraph>400 S Baldwin Ave, Arcadia, CA 91007</Paragraph>

          <Links>Topgolf - El Segundo</Links>
          <Aside>Plan ahead because they have a long wait!</Aside>

          <Paragraph>
            400 S Pacific Coast Highway, El Segundo, CA 90245
          </Paragraph>

          <Section></Section>
          <H2>
            <Aerotis>Escape rooms</Aerotis>
          </H2>
          <Paragraph>
            60Out is our most recommended escape room host! They have locations
            all over LA so you have a multitude of choices.
          </Paragraph>
        </Section>

        <Section>
          <H2>
            <Aerotis>Shopping in Old Town Pasadena</Aerotis>
          </H2>
          <Paragraph>
            There are plenty of stores along Colorado Blvd. in Pasadena for
            shopping.
          </Paragraph>
        </Section>
      </Inner>
    </Container>
  );
};

export default Faqs;
