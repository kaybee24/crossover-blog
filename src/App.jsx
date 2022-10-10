import { useState } from 'react';
import Buttons from './components/Buttons';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import './App.css'

function App() {

  return (
    <div className="App">

      <h1>Crossover Blog</h1>
      <Post />
      <CreatePost />
      <Buttons />
    </div>
  )
}

export default App
