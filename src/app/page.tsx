import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Footer />
    </main>
  );
}
