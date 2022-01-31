import Particles from 'react-tsparticles';
import NavBar from './components/NavBar/NavBar';
import particleOptions from './particleOptions';
import AboutSection from './sections/AboutSection';
import IntroSection from './sections/IntroSection';
import ServicesSection from './sections/ServicesSection';

const App = () => (
  <>
    <NavBar />
    <IntroSection />
    <AboutSection />
    <ServicesSection />
    <Particles id="tsparticles" options={particleOptions} />
  </>
);

export default App;
