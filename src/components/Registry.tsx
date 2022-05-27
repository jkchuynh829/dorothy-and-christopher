import tw from 'twin.macro';
import GoldTextClip from './GoldTextClip';
import { H1, Paragraph, Aerotis, Almara } from './Typography';
import chrisPaypalQrCode from '../assets/registry/chris-paypal-qr-code.png';
import chrisVenmoQrCode from '../assets/registry/chris-venmo-qr-code.png';
import dorohyVenmoQrCode from '../assets/registry/dorothy-venmo-qr-code.png';
import Image from 'next/image';

const Container = tw.div`flex justify-center`;
const Inner = tw.div`mt-52 text-center max-w-2xl px-6`;
const Section = tw.div`mb-12`;
const Seperator = tw.div`w-full h-0.5`;

const Registry = () => {
  return (
    <Container>
      <Inner>
        <Section>
          <Paragraph>
            We won<Almara>&apos;</Almara>t have a formal registry but will be
            accepting any donations through through any of the below options.
          </Paragraph>
        </Section>

        <GoldTextClip clipText={false}>
          <Seperator />
        </GoldTextClip>

        <Section>
          <H1>
            <Aerotis>
              Chris<Almara>&apos;</Almara>s Venmo
            </Aerotis>
          </H1>
          <Paragraph>
            <Image src={chrisVenmoQrCode} />
          </Paragraph>
        </Section>

        <Section>
          <H1>
            <Aerotis>
              Dorothy<Almara>&apos;</Almara>s Venmo
            </Aerotis>
          </H1>
          <Paragraph>
            <Image src={dorohyVenmoQrCode} />
          </Paragraph>
        </Section>

        <Section>
          <H1>
            <Aerotis>
              Chris<Almara>&apos;</Almara>s Paypal
            </Aerotis>
          </H1>
          <Paragraph>
            <Image src={chrisPaypalQrCode} />
          </Paragraph>
        </Section>

        <Section>
          <H1>
            <Aerotis>Zelle</Aerotis>
          </H1>
          <Paragraph>
            You can send money through Zelle to our account with email
            duckiexduarte@gmail.com.
          </Paragraph>
        </Section>

        <Section>
          <H1>
            <Aerotis>Check</Aerotis>
          </H1>
          <Paragraph>
            You can write us a check and make it out to ___.
          </Paragraph>
        </Section>
      </Inner>
    </Container>
  );
};

export default Registry;
