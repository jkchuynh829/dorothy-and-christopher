import tw from 'twin.macro';
import { Paragraph } from './Typography';

const Container = tw.div`flex justify-center`;
const Inner = tw.div`mt-52 text-center max-w-2xl px-6`;
const Question = tw(Paragraph)`font-bold text-2xl`;

const Faqs = () => {
  return (
    <Container>
      <Inner>
        <Question>What time should I arrive?</Question>
        <Paragraph>
          Our ceremony begins at 5 pm. Please arrive 15 minutes or so before the
          official start time so you can get settled before the proceedings.
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
          need a break from dancing!
        </Paragraph>

        <Question>What happens after the ceremony?</Question>
        <Paragraph>
          After the ceremony, the wedding party and family will be taking
          pictures. Guests can head straight to NOOR for cocktail hour where we
          will be serving champagne, light drinks, and hors d'oeuvres. Reception
          with a sit-down dinner and dessert will follow at 8 pm!
        </Paragraph>

        <Question>Will there be an open bar?</Question>
        <Paragraph>Absolutely — Don’t forget to tip the bartenders!</Paragraph>

        <Question>
          When will the reception end and is there an after party?
        </Question>
        <Paragraph>
          Our wedding reception ends at midnight - feel free to stick around the
          area as Pasadena has a ton of bars to hang out at and are within
          walking distance!
        </Paragraph>

        <Paragraph>
          How can I let you know of my dietary restrictions?
        </Paragraph>
        <Paragraph>
          We definitely want to make sure you enjoy your time and meal on our
          wedding day. Please select your meal preference based on your dietary
          needs when you RSVP online.
        </Paragraph>

        <Paragraph>Will transportation be provided?</Paragraph>
        <Paragraph>
          We are not providing any formal transportation for the events, but
          there will be ample parking (see next question). Carpooling and/or
          rideshare would also be a great option for close groups!
        </Paragraph>

        <Paragraph>What is the parking situation?</Paragraph>
        <Paragraph>
          Parking is free at the ceremony. There will be signs guiding you as
          you enter the venue.
        </Paragraph>

        <Paragraph>
          There will be validated parking at NOOR, the reception venue. Parking
          will be $10.50 with validation for 24 hours, so you can leave your car
          overnight if necessary.{' '}
        </Paragraph>

        <Paragraph>Are kids welcome?</Paragraph>
        <Paragraph>
          While we love your little ones, our wedding will be a 12+ event. We
          appreciate you making arrangements ahead of time and leaving the kids
          at home so you can celebrate with us and have a much-deserved night
          off!
        </Paragraph>

        <Paragraph>Can I bring a plus one?</Paragraph>
        <Paragraph>
          We have a strict guest list to stay on budget. Our wedding is strictly
          RSVP only. We will only be able to accommodate those listed on your
          invitation.
        </Paragraph>

        <Paragraph>When is the RSVP deadline?</Paragraph>
        <Paragraph>
          We’d love to know if you can make it by July 30, 2022. Please RSVP
          online here - if you do not submit your RSVP, we will assume you can’t
          make it!
        </Paragraph>

        <Paragraph>
          Do you have a hotel block for guests? Where do you recommend I stay?
        </Paragraph>
        <Paragraph>
          We do not have a hotel block but here are suggested accommodations
          nearby!
        </Paragraph>

        <Paragraph>Are the venues wheelchair accessible?</Paragraph>
        <Paragraph>Yes! [provide accessibility details]</Paragraph>

        <Paragraph>Where is your gift registry?</Paragraph>
        <Paragraph>
          We do not have a registry open and prefer cash gifts! You can send us
          a cash gift via Venmo, Zelle or PayPal or write a check out to either
          of us and drop it in our gift box at the reception.
        </Paragraph>

        <Paragraph>Can I take home a centerpiece as a souvenir?</Paragraph>
        <Paragraph>
          Please do not take centerpieces home as they are rentals! If a
          centerpiece is unaccounted for at the end of the night, we will have
          to pay a fee.
        </Paragraph>

        <Paragraph>
          I’m visiting from out of town. What can I do while I’m in LA?
        </Paragraph>
        <Paragraph>
          Here are some of our favorite things to do in LA!{' '}
        </Paragraph>

        <Paragraph>
          I still have questions, what is the best way to contact you?
        </Paragraph>
        <Paragraph>
          Feel free to reach out to us at hello@dorothyandchristopher.com :)
        </Paragraph>

        <Paragraph>COVID-19 QUESTIONS</Paragraph>

        <Paragraph>How many guests will be attending?</Paragraph>
        <Paragraph>
          We understand your concern that our wedding is happening during the
          COVID-19 pandemic. To be fully transparent, we are expecting about 200
          guests.{' '}
        </Paragraph>

        <Paragraph>
          Are there any vaccine or test requirements to attend your wedding?
        </Paragraph>
        <Paragraph>
          All guests will be required to be vaccinated. We also encourage
          everyone to receive a negative COVID-19 PCR test result at least 48
          hours before the wedding.{' '}
        </Paragraph>

        <Paragraph>Do I need to wear a mask?</Paragraph>
        <Paragraph>
          We know that not everyone may want to wear a mask at our wedding, but
          we completely respect those who do. We won’t be providing masks to
          guests though, so if you do want to wear one, please bring your own.
        </Paragraph>

        <Paragraph>
          What safety measures will be taken on your wedding day?
        </Paragraph>
        <Paragraph>Hand sanitizer? Ask NOOR</Paragraph>

        <Paragraph>
          How will changes be communicated before the wedding day?
        </Paragraph>
        <Paragraph>
          Please check back here on our website for all updates!
        </Paragraph>

        <Paragraph>
          Will you have any live streaming options if I can’t make it?
        </Paragraph>
        <Paragraph>
          Unfortunately, we won’t have a live stream but feel free to follow
          along on our social media accounts.
        </Paragraph>
      </Inner>
    </Container>
  );
};

export default Faqs;
