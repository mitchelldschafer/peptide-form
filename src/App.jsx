import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustLogos from './components/TrustLogos';
import HowItWorks from './components/HowItWorks';
import Stats from './components/Stats';
import MidPageCta from './components/MidPageCta';
import Testimonials from './components/Testimonials';
import Products from './components/Products';
import ValueProps from './components/ValueProps';
import Blog from './components/Blog';
import Philosophy from './components/Philosophy';
import FAQ from './components/FAQ';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustLogos />
        <HowItWorks />
        <Stats />
        <MidPageCta />
        <Testimonials />
        <Products />
        <ValueProps />
        <Blog />
        <Philosophy />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

export default App;
