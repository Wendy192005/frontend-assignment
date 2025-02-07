import Head from 'next/head';
import Navbar from '../components/Navbar';
import Home from '../components/Home';

export default function Index() {
  return (
    <>
      <Head>
        <title>Home | React App</title>
      </Head>
      <Navbar />
      <Home />
    </>
  );
}
