import { Header } from '../src/sections/Header';
import { Why } from '../src/sections/Why';
import { How } from '../src/sections/How';
import { Benefits } from '../src/sections/Benefits';
import { Divider } from '../src/components/Divider';
import { Tools } from '../src/sections/Tools/Tools';
import { Footer } from '../src/sections/Footer';
import SEO from '../src/components/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="Component Driven User Interfaces"
        description="How modularity is transforming design and frontend development"
        url="https://componentdriven.org/"
        image="https://componentdriven.org/og-component-driven.jpg"
      />
      <Header />
      <Why />
      <How />
      <Benefits />
      <Divider />
      <Tools />
      <Footer />
    </>
  );
}
