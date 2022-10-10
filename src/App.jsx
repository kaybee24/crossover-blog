import { useState } from 'react';
import Buttons from './components/Buttons';
import Post from './components/Post';
import './App.css'

function App() {

  return (
    <div className="App">
      <button>Post</button>
      <button>Delete</button>

      
      <Post />
      <Buttons />

    </div>
  )
}

export default App
