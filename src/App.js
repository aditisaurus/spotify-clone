import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';

function App() {
  useEffect ( () => {
     const token = getTokenFromUrl();
  }, []);

  return (
    <div className="app">
     {/*Spotify Logo*/}
     {/*Login details*/}

     <Login />
    </div>
  );
}

export default App;
