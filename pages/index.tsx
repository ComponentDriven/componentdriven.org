import Head from 'next/head';
import { Header } from '../src/sections/Header';
import { Why } from '../src/sections/Why';
import { How } from '../src/sections/How';

export default function Home() {
  return (
    <>
      <Head>
        <title>Component Driven</title>
      </Head>
      <Header />
      <Why />
      <How />
    </>
  );
}
