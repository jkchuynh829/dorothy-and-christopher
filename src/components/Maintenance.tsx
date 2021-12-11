import tw, { styled } from 'twin.macro';
import { useSpring, animated } from 'react-spring';
import { H1, Paragraph, Accent } from './Typography';
import MdiIcon from '@mdi/react';
import { mdiLock } from '@mdi/js';

const PASSWORD = 'pugsley';

const Container = tw.main`
  flex flex-col
  justify-center items-center
  h-screen w-full
  text-center
`;

const Heading = styled(animated(H1))`
  ${tw`mb-4`}
`;

const P = styled(animated(Paragraph))`
  ${tw`flex flex-row items-center`}
`;

const IconButton = tw.button`absolute bottom-4 right-4`;

const Icon = styled(MdiIcon)`
  ${tw`mx-1 opacity-10 hover:opacity-100 cursor-pointer`}
`;

interface MaintenanceProps {
  unlock: () => void;
}

const Maintenance = ({ unlock }: MaintenanceProps) => {
  /* Animation */
  const animatedHeading = useSpring({
    from: { y: -10, opacity: 0.05 },
    to: { y: 0, opacity: 1 },
    config: { duration: 750 },
  });
  const animmateParagraph = useSpring({
    from: { y: -10, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 350,
    config: { duration: 500 },
  });

  /* Handlers */
  const onUnlockClick = async () => {
    const password = await window.prompt(
      'You can only take a sneak peak if you are a special person. Enter the password!'
    );
    if (password === PASSWORD) unlock();
  };

  return (
    <Container>
      <Heading style={animatedHeading}>
        Dorothy <Accent>&</Accent> Christopher
      </Heading>
      <P style={animmateParagraph}>Coming soon!</P>
      <IconButton onClick={onUnlockClick}>
        <Icon path={mdiLock} size="32px" />
      </IconButton>
    </Container>
  );
};

export default Maintenance;
