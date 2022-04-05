import React, { Suspense } from 'react';
import Particles from 'react-tsparticles';
import NavBar from './components/NavBar/NavBar';
import particleOptions from './particleOptions';
import IntroSection from './sections/IntroSection';
import './App.css';

const AboutSection = React.lazy(() => import('./sections/AboutSection'));
const ServicesSection = React.lazy(() => import('./sections/ServicesSection'));
const PortfolioSection = React.lazy(
  () => import('./sections/PortfolioSection'),
);
const ContactSection = React.lazy(() => import('./sections/ContactSection'));

const App = () => (
  <>
    <NavBar />
    <IntroSection />
    <Suspense fallback={<div>...Loading...</div>}>
      <AboutSection />
    </Suspense>
    <Suspense fallback={<div>...Loading...</div>}>
      <ServicesSection />
    </Suspense>
    <Suspense fallback={<div>...Loading...</div>}>
      <PortfolioSection />
    </Suspense>
    <Suspense fallback={<div>...Loading...</div>}>
      <ContactSection />
    </Suspense>

    <Particles id="tsparticles" options={particleOptions} />
  </>
);

export default App;
