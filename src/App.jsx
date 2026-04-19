import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Gallery from './components/Gallery/Gallery';
import QuoteForm from './components/QuoteForm/QuoteForm';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Gallery />
        <QuoteForm />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
