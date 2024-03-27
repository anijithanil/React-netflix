import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { useContext } from 'react';
import { Context } from './context/AuthContext';
import { LikedMovieProvider } from './context/LikedMovieContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <LikedMovieProvider>
       <App />
       </LikedMovieProvider>
    </Context>
 
  </React.StrictMode>
);

