import Head from 'next/head';
import Navbar from '../components/Navbar';
import ToggleMessage from '../components/ToggleMessage';

export default function TogglePage() {
  return (
    <>
      <Head>
        <title>Toggle Message | React App</title>
      </Head>
      <Navbar />
      <ToggleMessage />
    </>
  );
}
