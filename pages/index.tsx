import { useState } from 'react';
import Head from 'next/head';
import tw from 'twin.macro';
import Home from '../src/components/Home';
import Maintenance from '../src/components/Maintenance';

// import { createClient } from '@supabase/supabase-js';
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';
// const supabase = createClient(supabaseUrl, supabaseKey);

const Container = tw.div`relative w-full h-full`;

const Main = () => {
  const [maintenanceMode, setMaintenanceMode] = useState(true);
  const unlock = () => setMaintenanceMode(false);
  return (
    <Container>
      <Head>
        <title>Dorothy and Christopher&apos;s Wedding</title>
        <meta name="description" content="Made by Jimy Huynh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {maintenanceMode ? <Maintenance unlock={unlock} /> : <Home />}
    </Container>
  );
};

export default Main;
