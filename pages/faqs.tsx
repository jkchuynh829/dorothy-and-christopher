import Head from 'next/head';
import { useDispatch } from 'react-redux';
import tw from 'twin.macro';
import Maintenance from '../src/components/Maintenance';
import { useSelector } from '../src/store';
import { disableMaintenanceMode } from '../src/store/maintenanceMode';

const Container = tw.div`relative w-full h-full`;

const Main = () => {
  const dispatch = useDispatch();
  const { maintenanceEnabled } = useSelector((state) => state.maintenanceMode);
  return (
    <Container>
      <Head>
        <title>Dorothy and Christopher&apos;s Wedding - FAQs</title>
        <meta name="description" content="Made by Jimmy Huynh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {maintenanceEnabled ? (
        <Maintenance unlock={() => dispatch(disableMaintenanceMode())} />
      ) : (
        <>SUP FOO!</>
      )}
    </Container>
  );
};

export default Main;
