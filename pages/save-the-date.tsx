import React, { useEffect } from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import tw from 'twin.macro';
import Maintenance from '../src/components/Maintenance';
import { useSelector } from '../src/store';
import { disableMaintenanceMode } from '../src/store/maintenanceMode';

const Container = tw.div`relative w-full h-full`;

const Main = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { maintenanceEnabled } = useSelector((state) => state.maintenanceMode);

  useEffect(() => {
    if (maintenanceEnabled) return;
    router.replace('/#save-the-date');
  }, [maintenanceEnabled, router]);
  return (
    <Container>
      <Head>
        <title>Dorothy and Christopher&apos;s Wedding - Save the Date</title>
        <meta name="description" content="Made by Jimmy Huynh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Maintenance unlock={() => dispatch(disableMaintenanceMode())} />
    </Container>
  );
};

export default Main;
