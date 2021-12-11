import Head from 'next/head';
import { useDispatch } from 'react-redux';
import tw from 'twin.macro';
import Maintenance from '../src/components/Maintenance';
import { useSelector } from '../src/store';
import { disableMaintenanceMode } from '../src/store/maintenanceMode';

const Container = tw.div`relative w-full h-full`;

const SaveTheDate = () => {
  const dispatch = useDispatch();
  const { enabled } = useSelector((state) => state.maintenanceMode);
  return (
    <Container>
      <Head>
        <title>Dorothy and Christopher&apos;s Wedding - Save the Date</title>
        <meta name="description" content="Made by Jimy Huynh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {enabled ? (
        <Maintenance unlock={() => dispatch(disableMaintenanceMode())} />
      ) : (
        <>Save the Date</>
      )}
    </Container>
  );
};

export default SaveTheDate;
