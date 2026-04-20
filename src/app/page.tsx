import Hero from '@/components/Hero';
import TrustLogos from '@/components/TrustLogos';
import HowItWorks from '@/components/HowItWorks';
import Stats from '@/components/Stats';
import MidPageCta from '@/components/MidPageCta';
import Testimonials from '@/components/Testimonials';
import ProductsServer from '@/components/ProductsServer';
import ValueProps from '@/components/ValueProps';
import Blog from '@/components/Blog';
import Philosophy from '@/components/Philosophy';
import FAQ from '@/components/FAQ';
import FinalCta from '@/components/FinalCta';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustLogos />
      <HowItWorks />
      <Stats />
      <MidPageCta />
      <Testimonials />
      <ProductsServer />
      <ValueProps />
      <Blog />
      <Philosophy />
      <FAQ />
      <FinalCta />
    </>
  );
}
