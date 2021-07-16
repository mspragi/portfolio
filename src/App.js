import React from 'react';
import '../src/App.css';
import { Preloader } from './components/prloader/preloader';



const App=()=>{
  return(
    <div className='App'>
      <header className='App-header'>
    <Preloader/>
    </header>
    </div>
  )
}

export default App;