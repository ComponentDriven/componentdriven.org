import Head from 'next/head';
import { Header } from '../src/sections/Header';
import { Why } from '../src/sections/Why';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Component Driven</title>
      </Head>

      <Header />
      <Why />
    </div>
  );
}
