import Head from 'next/head';
import { useDispatch } from 'react-redux';
import tw from 'twin.macro';
import Home from '../src/components/Home';
import Maintenance from '../src/components/Maintenance';
import { useSelector } from '../src/store';
import { disableMaintenanceMode } from '../src/store/maintenanceMode';

// import { createClient } from '@supabase/supabase-js';
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';
// const supabase = createClient(supabaseUrl, supabaseKey);

const Container = tw.div`relative w-full h-full flex flex-1 bg-white`;

const Main = () => {
  const dispatch = useDispatch();
  const { maintenanceEnabled } = useSelector((state) => state.maintenanceMode);
  return (
    <Container>
      <Head>
        <title>Dorothy and Christopher&apos;s Wedding</title>
        <meta name="description" content="Made by Jimmy Huynh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {maintenanceEnabled ? (
        <Maintenance unlock={() => dispatch(disableMaintenanceMode())} />
      ) : (
        <Home />
      )}
    </Container>
  );
};

export default Main;
