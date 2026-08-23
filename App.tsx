import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

function App() {
  return (
    <div className="bg-charcoal-950">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Reviews />
        <Visit />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

export default App;
