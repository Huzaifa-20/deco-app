import Particles from 'react-tsparticles';
import NavBar from './components/NavBar/NavBar';
import particleOptions from './particleOptions';
import AboutSection from './sections/AboutSection';
import IntroSection from './sections/IntroSection';
import ServicesSection from './sections/ServicesSection';
import PortfolioSection from './sections/PortfolioSection';
import ContactSection from './sections/ContactSection';
import './App.css';

const App = () => (
  <>
    <NavBar />
    <IntroSection />
    <Particles id="tsparticles" options={particleOptions} />
    <AboutSection />
    <ServicesSection />
    <PortfolioSection />
    <ContactSection />
  </>
);

export default App;
