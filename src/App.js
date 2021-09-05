import React, { useState } from 'react';
import Home from './components/Home'
import Header from './components/Header'
import './App.css';

function App() {
  const [blurState, setBlurState] = useState(false)

  const setBlur = () => {
    setBlurState(!blurState)
  }
  
  return (
    <div className="App">
      <Header setBlur={setBlur} />
      <Home blurState={blurState} />
    </div>
  );
}

export default App;
