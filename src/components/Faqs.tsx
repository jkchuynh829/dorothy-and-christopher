import { useCallback } from 'react';
import tw from 'twin.macro';
import { Paragraph } from './Typography';
import { useRouter } from 'next/router';

const Container = tw.div`flex justify-center`;
const Inner = tw.div`mt-36 text-left max-w-4xl px-6`;
const Question = tw(Paragraph)`font-bold text-2xl`;
const Heading = tw(Question)`mt-12 text-4xl`;
const Links = tw.a`font-urbanist text-lg mb-0 font-bold underline cursor-pointer`;
const Answer = tw(Paragraph)`mb-6`;

const Faqs = () => {
  const router = useRouter();

  const generateLink = useCallback((link: string) => {
    return {
      href: link,
      target: '_blank',
      rel: 'noopener noreferrer',
    };
  }, []);

  const switchPath = (path: string) => {
    return (e: MouseEvent) => {
      e.preventDefault();
      router.push(path);
    };
  };

  return (
    <Container>
      <Inner>
        <Question>What time should I arrive?</Question>
        <Answer>
          Please arrive at 5 pm so you can get settled before the ceremony
          proceedings. If you&apos;re not able to attend the ceremony, feel free
          to join us for cocktail hour at 7 pm.
        </Answer>

        <Question>Is there a dress code?</Question>
        <Answer>
          The dress code for our wedding is cocktail attire. Men, no jeans,
          please!
        </Answer>

        <Question>What will the weather be like?</Question>
        <Answer>
          Since this is a summer wedding in Southern California, expect high
          temperatures even through the night! Please dress accordingly and
          appropriately.
        </Answer>

        <Question>
          Will the ceremony and reception be indoor or outdoor?
        </Question>
        <Answer>
          The ceremony will be outdoor, and the reception will be indoor. The
          reception will also have an outdoor balcony for fresh air when you
          need a break from dancing.
        </Answer>

        <Question>What happens after the ceremony?</Question>
        <Answer>
          After the ceremony, the wedding party and immediate family will be
          taking pictures. Guests can head straight to NOOR for cocktail hour
          where we will be serving champagne, light drinks, and hors
          d&apos;oeuvres. Reception with a sit-down dinner and dessert will
          follow at 8 pm.
        </Answer>

        <Question>Will there be an open bar?</Question>
        <Answer>Absolutely — Don&apos;t forget to tip the bartenders!</Answer>

        <Question>
          When will the reception end and is there an after party?
        </Question>
        <Answer>
          Our wedding reception ends at midnight - feel free to stick around the
          area as Pasadena has a ton of bars to hang out at and are within
          walking distance.
        </Answer>

        <Question>How can I let you know of my dietary restrictions?</Question>
        <Answer>
          We definitely want to make sure you enjoy your time and meal on our
          wedding day. Please select your meal preference and let us know your
          dietary needs when you RSVP online.
        </Answer>

        <Question>Will transportation be provided?</Question>
        <Answer>
          We are not providing any formal transportation for the events, but
          there will be ample parking (see next question). Carpooling and/or
          rideshare would also be a great option for close groups.
        </Answer>

        <Question>What is the parking situation?</Question>
        <Answer>
          Parking is free at Santa Anita Park, the ceremony venue. Please enter
          through
          <Links
            {...generateLink(
              'https://www.google.com/maps/place/Gate+5/@34.1385486,-118.0423273,16z/data=!4m13!1m7!3m6!1s0x80c2dbbf6a43dbb1:0xe306286712a4aa0e!2s285+Huntington+Dr,+Arcadia,+CA+91007!3b1!8m2!3d34.1386371!4d-118.0452673!3m4!1s0x80c2dbc01f1499b7:0x7448cd039a43eb5!8m2!3d34.1386377!4d-118.0406626'
            )}
          >
            {' '}
            Gate 5
          </Links>{' '}
          on Huntington Drive. There will be signs and/or personnel guiding you
          as you enter the venue.
        </Answer>

        <Answer>
          There will be validated parking at NOOR, the reception venue. Please
          park at the Marengo Parking Structure and make sure to get validated
          before heading out. You can also leave your car overnight if necessary
          and pick it up the next morning.
        </Answer>

        <Answer>
          From the NOOR parking structure, walk across the bridge into the main
          terrace and the NOOR Sofia Ballroom will be on your left across from
          El Cholo restaurant.
        </Answer>

        <Question>Are kids welcome?</Question>
        <Answer>
          While we love your little ones, our wedding will only be open to
          guests aged 12 and up. We appreciate you making arrangements ahead of
          time and leaving the kids at home so you can celebrate with us and
          have a much-deserved night off!
        </Answer>

        <Question>Can I bring a plus one?</Question>
        <Answer>
          We have a strict guest list to stay on budget. Our wedding is RSVP
          only. We will only be able to accommodate those listed on your
          invitation.
        </Answer>

        <Question>When is the RSVP deadline?</Question>
        <Answer>
          We&apos;d love to know if you can make it by July 30, 2022. Please{' '}
          <Links onClick={(e: any) => switchPath('/#rsvp')(e)}>
            {' '}
            RSVP online here
          </Links>{' '}
          - if you do not submit your RSVP, we will assume you can&apos;t make
          it.
        </Answer>

        <Question>
          Do you have a hotel block for guests? Where do you recommend I stay?
        </Question>
        <Answer>
          We do not have a hotel block but here are suggested{' '}
          <Links onClick={(e: any) => switchPath('/things-to-do')(e)}>
            accomodations
          </Links>{' '}
          nearby.
        </Answer>

        <Question>Are the venues wheelchair accessible?</Question>
        <Answer>
          Yes! Wheelchairs can easily be pushed onto the lawn from the parking
          area at Santa Anita Park. There are also handicapped parking spots in
          the NOOR parking structure. The entrance to the Sofia ballroom also
          has a wheelchair-accessible ramp.
        </Answer>

        <Question>Where is your gift registry?</Question>
        <Answer>
          We do not have a registry open and prefer cash gifts! You can send us
          a cash gift via Venmo, Zelle or PayPal or write a check out to either
          of us and drop it in our gift box at the reception.
        </Answer>

        <Question>Can I take home a centerpiece as a souvenir?</Question>
        <Answer>
          Please do not take centerpieces home as they are rentals. If a
          centerpiece is unaccounted for at the end of the night, we will have
          to pay a fee.
        </Answer>

        <Question>
          I&apos;m visiting from out of town. What can I do while I&apos;m in
          LA?
        </Question>
        <Answer>
          Check out some of our{' '}
          <Links onClick={(e: any) => switchPath('/things-to-do')(e)}>
            favorite things to do
          </Links>{' '}
          in LA.
        </Answer>

        <Question>
          I still have questions, what is the best way to contact you?
        </Question>
        <Answer>
          Feel free to reach out to us at hello@dorothyandchristopher.com :)
        </Answer>

        <Heading>COVID-19 QUESTIONS</Heading>

        <Question>How many guests will be attending?</Question>
        <Answer>
          We understand your concern that our wedding is happening during the
          COVID-19 pandemic. To be fully transparent, we are expecting about 200
          guests.
        </Answer>

        <Question>
          Are there any vaccine or test requirements to attend your wedding?
        </Question>
        <Answer>
          All guests will be required to be vaccinated. We also encourage
          everyone to receive a negative COVID-19 PCR test result at least 48
          hours before the wedding.
        </Answer>

        <Question>Do I need to wear a mask?</Question>
        <Answer>
          We know that not everyone may want to wear a mask at our wedding, but
          we completely respect those who do. We won&apos;t be providing masks
          to guests though, so if you do want to wear one, please bring your
          own.
        </Answer>

        <Question>
          What safety measures will be taken on your wedding day?
        </Question>
        <Answer>
          Although there are no specific guidelines, we recommmend that you stay
          vigilant and perform safety measures to your own comfort. Hand
          sanitizer stations will be available at NOOR but please remember to
          always wash your hands!
        </Answer>

        <Question>
          How will changes be communicated before the wedding day?
        </Question>
        <Answer>Please check back here on our website for all updates.</Answer>

        <Question>
          Will you have any live streaming options if I can&apos;t make it?
        </Question>
        <Answer>
          Unfortunately, we won&apos;t have a live stream but feel free to
          follow along on our social media accounts.
        </Answer>
      </Inner>
    </Container>
  );
};

export default Faqs;
