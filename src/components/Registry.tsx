import tw from 'twin.macro';
import GoldTextClip from './GoldTextClip';
import { H1, Paragraph, Aerotis } from './Typography';

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
            We won&apos; have a formal registry but will be accepting any
            donations through through any of the below options.
          </Paragraph>
        </Section>

        <GoldTextClip clipText={false}>
          <Seperator />
        </GoldTextClip>

        <Section>
          <H1>
            <Aerotis>Chris&apos;s Venmo</Aerotis>
          </H1>
          <Paragraph>[INSERT Chris&apos;s Venmo QR Code]</Paragraph>
        </Section>

        <Section>
          <H1>
            <Aerotis>Dorothy&apos;s Venmo</Aerotis>
          </H1>
          <Paragraph>[INSERT Dorothy&apos;s Venmo QR Code]</Paragraph>
        </Section>

        <Section>
          <H1>
            <Aerotis>Chris&apos;s Paypal</Aerotis>
          </H1>
          <Paragraph>[INSERT Chris&apos;s Paypal QR Code]</Paragraph>
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
