import { MouseEvent, useCallback } from 'react';
import tw from 'twin.macro';
import { Paragraph } from './Typography';
import { useRouter } from 'next/router';

const Container = tw.div`flex justify-center`;
const Inner = tw.div`mt-52 text-left max-w-2xl px-6`;
const Question = tw(Paragraph)`font-bold text-2xl`;
const Links = tw.a`font-urbanist text-lg mb-0 font-bold underline cursor-pointer`;

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
      e.preventDefault()
      router.push(path)
    }
  }

  return (
    <Container>
      <Inner>
        <Question>What time should I arrive?</Question>
        <Paragraph>
          Please arrive at 5 pm so you can get settled before the ceremony proceedings.
          If you're not able to attend the ceremony, feel free to join us for cocktail hour at 7 pm.
        </Paragraph>

        <Question>Is there a dress code?</Question>
        <Paragraph>
          The dress code for our wedding is cocktail attire. Men, no jeans,
          please!
        </Paragraph>

        <Question>What will the weather be like?</Question>
        <Paragraph>
          Since this is a summer wedding in Southern California, expect high
          temperatures even through the night! Please dress accordingly and
          appropriately.
        </Paragraph>

        <Question>
          Will the ceremony and reception be indoor or outdoor?
        </Question>
        <Paragraph>
          The ceremony will be outdoor, and the reception will be indoor. The
          reception will also have an outdoor balcony for fresh air when you
          need a break from dancing.
        </Paragraph>

        <Question>What happens after the ceremony?</Question>
        <Paragraph>
          After the ceremony, the wedding party and immediate family will be taking
          pictures. Guests can head straight to NOOR for cocktail hour where we
          will be serving champagne, light drinks, and hors d'oeuvres. Reception
          with a sit-down dinner and dessert will follow at 8 pm.
        </Paragraph>

        <Question>Will there be an open bar?</Question>
        <Paragraph>Absolutely — Don't forget to tip the bartenders!</Paragraph>

        <Question>
          When will the reception end and is there an after party?
        </Question>
        <Paragraph>
          Our wedding reception ends at midnight - feel free to stick around the
          area as Pasadena has a ton of bars to hang out at and are within
          walking distance.
        </Paragraph>

        <Question>
          How can I let you know of my dietary restrictions?
        </Question>
        <Paragraph>
          We definitely want to make sure you enjoy your time and meal on our
          wedding day. Please select your meal preference and let us know your dietary
          needs when you RSVP online.
        </Paragraph>

        <Question>Will transportation be provided?</Question>
        <Paragraph>
          We are not providing any formal transportation for the events, but
          there will be ample parking (see next question). Carpooling and/or
          rideshare would also be a great option for close groups.
        </Paragraph>

        <Question>What is the parking situation?</Question>
        <Paragraph>
          Parking is free at Santa Anita Park, the ceremony venue. Please enter through
          <Links {...generateLink('https://www.google.com/maps/place/Gate+5/@34.1385486,-118.0423273,16z/data=!4m13!1m7!3m6!1s0x80c2dbbf6a43dbb1:0xe306286712a4aa0e!2s285+Huntington+Dr,+Arcadia,+CA+91007!3b1!8m2!3d34.1386371!4d-118.0452673!3m4!1s0x80c2dbc01f1499b7:0x7448cd039a43eb5!8m2!3d34.1386377!4d-118.0406626')}> Gate 5 </Links>
          on Huntington Drive. There will be signs and/or personnel guiding you as you enter the venue.
        </Paragraph>

        <Paragraph>
          There will be validated parking at NOOR, the reception venue. Please park at the
          Marengo Parking Structure and make sure to get validated before heading out.
          You can also leave your car overnight if necessary and pick it up the next morning.
        </Paragraph>

        <Paragraph>From the NOOR parking structure, walk across the bridge
          into the main terrace and the NOOR Sofia Ballroom will be on your left
          across from El Cholo restaurant.
        </Paragraph>

        <Question>Are kids welcome?</Question>
        <Paragraph>
          While we love your little ones, our wedding will only be open to guests aged 12 and up.
          We appreciate you making arrangements ahead of time and leaving the kids
          at home so you can celebrate with us and have a much-deserved night
          off!
        </Paragraph>

        <Question>Can I bring a plus one?</Question>
        <Paragraph>
          We have a strict guest list to stay on budget. Our wedding is
          RSVP only. We will only be able to accommodate those listed on your
          invitation.
        </Paragraph>

        <Question>When is the RSVP deadline?</Question>
        <Paragraph>
          We'd love to know if you can make it by July 30, 2022. Please <Links onClick={switchPath('/#rsvp')}> RSVP online here </Links>
          - if you do not submit your RSVP, we will assume you can't
          make it.
        </Paragraph>

        <Question>
          Do you have a hotel block for guests? Where do you recommend I stay?
        </Question>
        <Paragraph>
          We do not have a hotel block but here are suggested
          <Links onClick={switchPath('/things-to-do')}> accomodations</Links> nearby.
        </Paragraph>

        <Question>Are the venues wheelchair accessible?</Question>
        <Paragraph>Yes! Wheelchairs can easily be pushed onto
          the lawn from the parking area at Santa Anita Park.
          There are also handicapped parking spots in the NOOR parking
          structure. The entrance to the Sofia ballroom also has
          a wheelchair-accessible ramp.
        </Paragraph>

        <Question>Where is your gift registry?</Question>
        <Paragraph>
          We do not have a registry open and prefer cash gifts! You can send us
          a cash gift via Venmo, Zelle or PayPal or write a check out to either
          of us and drop it in our gift box at the reception.
        </Paragraph>

        <Question>Can I take home a centerpiece as a souvenir?</Question>
        <Paragraph>
          Please do not take centerpieces home as they are rentals. If a
          centerpiece is unaccounted for at the end of the night, we will have
          to pay a fee.
        </Paragraph>

        <Question>
          I'm visiting from out of town. What can I do while I'm in LA?
        </Question>
        <Paragraph>
          Check out some of our<Links onClick={switchPath('/things-to-do')}> favorite things to do</Links> in LA.
        </Paragraph>

        <Question>
          I still have questions, what is the best way to contact you?
        </Question>
        <Paragraph>
          Feel free to reach out to us at hello@dorothyandchristopher.com :)
        </Paragraph>

        <Question>COVID-19 QUESTIONS</Question>

        <Question>How many guests will be attending?</Question>
        <Paragraph>
          We understand your concern that our wedding is happening during the
          COVID-19 pandemic. To be fully transparent, we are expecting about 200
          guests.
        </Paragraph>

        <Question>
          Are there any vaccine or test requirements to attend your wedding?
        </Question>
        <Paragraph>
          All guests will be required to be vaccinated. We also encourage
          everyone to receive a negative COVID-19 PCR test result at least 48
          hours before the wedding.
        </Paragraph>

        <Question>Do I need to wear a mask?</Question>
        <Paragraph>
          We know that not everyone may want to wear a mask at our wedding, but
          we completely respect those who do. We won't be providing masks to
          guests though, so if you do want to wear one, please bring your own.
        </Paragraph>

        <Question>
          What safety measures will be taken on your wedding day?
        </Question>
        <Paragraph>Although there are no specific guidelines, we recommmend that you
          stay vigilant and perform safety measures to your own comfort.
          Hand sanitizer stations will be available at NOOR but please remember to always
          wash your hands!
        </Paragraph>

        <Question>
          How will changes be communicated before the wedding day?
        </Question>
        <Paragraph>
          Please check back here on our website for all updates.
        </Paragraph>

        <Question>
          Will you have any live streaming options if I can't make it?
        </Question>
        <Paragraph>
          Unfortunately, we won't have a live stream but feel free to follow
          along on our social media accounts.
        </Paragraph>
      </Inner>
    </Container>
  );
};

export default Faqs;
