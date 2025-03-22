import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Projects from '@/components/Projects';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <Projects />
    </main>
  );
}
