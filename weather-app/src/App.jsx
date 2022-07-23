import { useState } from 'react'
import './App.css'
import CardComponent from './components/cardComponent'
import MenuComponent from './components/menuComponent'
import ParticlesComponent from './components/particles'
import SoundComponent from './components/sounds'

function App() {
  const [state, setState] = useState('snow');
  const [pause, setPause] = useState(false);

  return (
    <div className="App">
      <div className="Wrapper">
        <ParticlesComponent
            state={state}
        />
        <CardComponent 
            time={state}
            pause={pause}
            setPause={setPause}
        />
        <SoundComponent
           state={state}
        />
        <MenuComponent 
            time={state}
            changeTime={setState}
        />
      </div>
    </div>
  )
}

export default App
