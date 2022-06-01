import tw, { styled } from 'twin.macro';
import { useSpring, animated } from 'react-spring';
import { H1, Almara, Aerotis } from './Typography';
import { useState } from 'react';
import FormInput from './FormInput';

const PASSWORD = 'pugsley';

const Container = tw.main`
  flex flex-col flex-1
  justify-center items-center
  h-screen w-full
  text-center
`;

const Heading = styled(animated(H1))`
  ${tw`mb-4`}
`;

const Button = styled(animated(tw.button``))`
  ${tw`border border-solid border-dark-gray rounded-sm h-10 px-3 mb-6 font-urbanist text-lg hover:bg-dark-gray hover:text-white`}
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

  const [password, setPassword] = useState('');

  /* Handlers */
  const passwordHandler = (value: string) => {
    setPassword(value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (password === PASSWORD) unlock();
  };

  return (
    <Container>
      <Heading style={animatedHeading}>
        <Aerotis>
          dorothy <Almara>&</Almara> christopher
        </Aerotis>
      </Heading>
      <form onSubmit={onSubmit}>
        <FormInput
          style={{ ...animmateParagraph, width: '250px' }}
          label=""
          value={password}
          placeholder="Enter password..."
          onChange={passwordHandler}
          password
        />
        <Button style={{ ...animmateParagraph, width: '250px' }}>Log in</Button>
      </form>
    </Container>
  );
};

export default Maintenance;
