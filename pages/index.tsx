import Head from 'next/head';
import { Header } from '../src/components/Header';

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
