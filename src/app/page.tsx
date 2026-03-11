import Nav from '@/components/Nav';
import Stars from '@/components/Stars';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import Intro from '@/components/Intro';
import Roadmap from '@/components/Roadmap';
import Qadr from '@/components/Qadr';
import Hadiths from '@/components/Hadiths';
import History from '@/components/History';
import Signs from '@/components/Signs';
import Ibadah from '@/components/Ibadah';
import Duas from '@/components/Duas';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Stars />
      <main>
        <Hero />
        <Divider />
        <Intro />
        <Divider />
        <Roadmap />
        <Divider />
        <Qadr />
        <Divider />
        <Hadiths />
        <Divider />
        <History />
        <Divider />
        <Signs />
        <Divider />
        <Ibadah />
        <Divider />
        <Duas />
        <Footer />
      </main>
    </>
  );
}
