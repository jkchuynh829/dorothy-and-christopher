/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback } from 'react';
import tw from 'twin.macro';
import GoldTextClip from './GoldTextClip';
import { H1, H2, Paragraph, Aerotis } from './Typography';

const Container = tw.div`flex justify-center`;
const Inner = tw.div`mt-36 text-center max-w-2xl px-6 w-full`;
const RowContainer = tw.div`flex flex-col w-full gap-6 w-full sm:flex-row`;
const Row = tw.div`flex-grow w-full`;
const FlexGroup = tw.div`w-full flex flex-row justify-around sm:flex-col`;
const Links = tw.a`font-urbanist text-lg mb-0 font-bold underline cursor-pointer`;
const Section = tw.div`mb-12`;
const SectionHeading = tw(H2)`mb-0`;
const Aside = tw(Paragraph)`mb-0 italic`;
const Seperator = tw.div`w-full h-1`;
const Person = tw(Paragraph)`mb-0`;

const WeddingParty = () => {
  return (
    <Container>
      <Inner>
        <Section>
          <H1>
            <Aerotis>the wedding party</Aerotis>
          </H1>
        </Section>
        <FlexGroup>
          <Section>
            <SectionHeading>
              <Aerotis>maid of honor</Aerotis>
            </SectionHeading>
            <Person>Felicia Le</Person>
          </Section>
          <Section>
            <SectionHeading>
              <Aerotis>best man</Aerotis>
            </SectionHeading>
            <Person>Zach Cuarto</Person>
          </Section>
        </FlexGroup>
        <FlexGroup>
          <Section>
            <SectionHeading>
              <Aerotis>bridesmaids</Aerotis>
            </SectionHeading>
            <Person>Cynthia Le</Person>
            <Person>Tiffany Le</Person>
            <Person>Chelsea Cano</Person>
          </Section>
          <Section>
            <SectionHeading>
              <Aerotis>groomsmen</Aerotis>
            </SectionHeading>
            <Person>Jimmy Huynh</Person>
            <Person>Jimmy Tran</Person>
            <Person>Kevin Bendo</Person>
            <Person>Nick Cuarto</Person>
            <Person>Ranny Lowe</Person>
            <Person>Robert Macaisa</Person>
            <Person>Robert Siegel</Person>
            <Person>Theodore Roque</Person>
          </Section>
        </FlexGroup>
        <FlexGroup>
          <Section>
            <SectionHeading>
              <Aerotis>parents of the bride</Aerotis>
            </SectionHeading>
            <Person>Frank Le</Person>
            <Person>Tina Dao</Person>
          </Section>
          <Section>
            <SectionHeading>
              <Aerotis>parents of the groom</Aerotis>
            </SectionHeading>
            <Person>Nilo Cano</Person>
            <Person>Edita Cano</Person>
          </Section>
        </FlexGroup>
        <FlexGroup>
          <Section>
            <SectionHeading>
              <Aerotis>flower boys</Aerotis>
            </SectionHeading>
            <Person>Spanky</Person>
            <Person>Hunter</Person>
          </Section>
          <Section>
            <SectionHeading>
              <Aerotis>ring bearers</Aerotis>
            </SectionHeading>
            <Person>Chucky</Person>
            <Person>Corky</Person>
          </Section>
        </FlexGroup>
      </Inner>
    </Container>
  );
};

export default WeddingParty;
