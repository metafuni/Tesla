import React, { useState } from 'react';
import { Switch } from 'react-router-dom';

import Home from './components/Home'
import ModelS from './ModelS'
import Header from './components/Header'
import AnimatedRoute from 'react-animated-routes'

function App() {
  const [blurState, setBlurState] = useState(false)

  const setBlur = () => {
    setBlurState(!blurState)
  }

  return (
    <div className="App">
      <Header setBlur={setBlur} />
      <Switch>
        <AnimatedRoute exact path="/" timeout={300} classNames="fade">
          <Home blurState={blurState} />
        </AnimatedRoute>
        <AnimatedRoute exact path="/models" timeout={300} classNames="fade">
          <ModelS blurState={blurState} />
        </AnimatedRoute>
      </Switch>
    </div>
  );
}

export default App;
