import Head from 'next/head';
import { Header } from '../src/sections/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Component Driven</title>
      </Head>

      <Header />
    </div>
  );
}
