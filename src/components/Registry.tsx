import tw, { styled } from 'twin.macro';
import { H1 as Heading, Paragraph, Aerotis, Almara } from './Typography';
import chrisPaypalQrCode from '../assets/registry/chris-paypal-qr-code.png';
import chrisVenmoQrCode from '../assets/registry/chris-venmo-qr-code.png';
import dorohyVenmoQrCode from '../assets/registry/dorothy-venmo-qr-code.png';
import Image from 'next/image';
import GoldTextClip from './GoldTextClip';

const Container = tw.div`flex justify-center pb-16`;
const Inner = tw.div`mt-36 text-center max-w-2xl px-6`;
const Section = styled.div<{ isRow?: boolean }>`
  ${tw`flex gap-x-12 gap-y-6 mb-4 justify-center items-center`}
  ${({ isRow = false }) => (isRow ? tw`sm:flex-col flex-row` : tw`flex-col`)}
`;
const Seperator = tw.div`w-full h-0.5`;
const H1 = tw(Heading)`mb-2`;

const GoldenRule = () => (
  <GoldTextClip clipText={false} fullWidth>
    <Seperator />
  </GoldTextClip>
);

const Registry = () => {
  return (
    <Container>
      <Inner>
        <Section>
          <Paragraph>
            We won<Almara>&apos;</Almara>t have a formal registry but will be
            accepting donations through any of the options below.
          </Paragraph>
        </Section>

        <GoldenRule />

        <Section>
          <H1>
            <Aerotis>Venmo</Aerotis>
          </H1>
          <Section isRow>
            <Image src={chrisVenmoQrCode} height="425px" width="325px" />
            <Image src={dorohyVenmoQrCode} height="425px" width="325px" />
          </Section>
        </Section>

        <GoldenRule />

        <Section>
          <H1>
            <Aerotis>Paypal</Aerotis>
          </H1>
          <Section isRow>
            <Image src={chrisPaypalQrCode} width="375px" height="375px" />
          </Section>
        </Section>

        <GoldenRule />

        <Section>
          <H1>
            <Aerotis>Zelle</Aerotis>
          </H1>
          <Paragraph>
            You can send money to our Zelle account set up with
            duckiexduarte@gmail.com.
          </Paragraph>
        </Section>

        <Section>
          <H1>
            <Aerotis>Check</Aerotis>
          </H1>
          <Paragraph>
            You can write us a check and make it out to &quot;Christopher
            Cano&quot; or &quot;Dorothy Le&quot;.
          </Paragraph>
        </Section>
      </Inner>
    </Container>
  );
};

export default Registry;
