import React from 'react';
import ReactDOM from 'react-dom';
// import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './style/theme';
import './index.css';
import App from './App';

// <motion.div exit={{ opacity: 0 }}>... content</motion.div>;

ReactDOM.render(
  <React.StrictMode>
    {/* <AnimatePresence> */}
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    {/* </AnimatePresence> */}
  </React.StrictMode>,
  document.getElementById('root'),
);

export default theme;
