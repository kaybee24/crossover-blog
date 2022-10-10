import { useState } from 'react';
import Buttons from './components/Buttons';
import Post from './components/Post';
import './App.css'

function App() {

  return (
    <div className="App">

      <h1>Blog</h1>
      <Post />
      <Buttons />

    </div>
  )
}

export default App
