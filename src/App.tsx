import Particles from 'react-tsparticles';
import NavBar from './components/NavBar/NavBar';
import particleOptions from './particleOptions';
import AboutSection from './sections/AboutSection';
import IntroSection from './sections/IntroSection';
import ServicesSection from './sections/ServicesSection';
import PortfolioSection from './sections/PortfolioSection';
import ContactSection from './sections/ContactSection';

const App = () => (
  <>
    <NavBar />
    <IntroSection />
    <AboutSection />
    <ServicesSection />
    <PortfolioSection />
    <ContactSection />
    <Particles id="tsparticles" options={particleOptions} />
  </>
);

export default App;
