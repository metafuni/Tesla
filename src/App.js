import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home'
import ModelS from './ModelS'
import Header from './components/Header'
import AnimatedRoute from 'react-animated-routes'

import './App.css';

function App() {

  const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/models', name: 'ModelS', Component: ModelS },
  ]
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
