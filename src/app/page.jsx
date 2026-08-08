import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getProjects } from '@/lib/data';

export default async function Home() {
  const projectsData = await getProjects();

  return (
    <main className="min-h-screen selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects projectsData={projectsData} />
      <Contact />
      <Footer />
    </main>
  );
}
