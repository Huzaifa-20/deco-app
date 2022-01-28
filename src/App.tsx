import Particles from 'react-tsparticles';
import NavBar from './components/NavBar';
import particleOptions from './helper';
import AboutSection from './sections/AboutSection';
import IntroSection from './sections/IntroSection';

const App = () => (
  <>
    <NavBar />
    <IntroSection />
    <AboutSection />
    <Particles id="tsparticles" options={particleOptions} />
  </>
);

export default App;
