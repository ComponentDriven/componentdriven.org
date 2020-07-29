import Head from 'next/head';
import { Header } from '../src/sections/Header';
import { Why } from '../src/sections/Why';

export default function Home() {
  return (
    <>
      <Head>
        <title>Component Driven</title>
      </Head>
      <Header />
      <Why />
    </>
  );
}
