import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import './index.css';

import FirstContext from './contexts/FirstContext'
import { SecondContextTheProvider } from './contexts/SecondContext';
import { ThirdContextTheProvider } from './contexts/ThirdContext';
import { FourthContextTheProvider } from './contexts/FourtContext';
import { FifthContextTheProvider } from './contexts/FifthContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <FifthContextTheProvider>
      <FourthContextTheProvider>
        <ThirdContextTheProvider>
          <SecondContextTheProvider>
            <FirstContext.Provider value="hola">
                <App />
            </FirstContext.Provider>
          </SecondContextTheProvider>
        </ThirdContextTheProvider>
      </FourthContextTheProvider>
    </FifthContextTheProvider>
  </BrowserRouter>
);

reportWebVitals();
