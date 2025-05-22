import './App.css'
import './components/ChangeBackground.css'
import './components/Images.css'

import Header from './components/Header'
import Images from './components/Images'
import Children from './components/Children'
import ChangeBackground from "./components/ChangeBackground"

function App() {
  
  return (
    
    <>
      <ChangeBackground/>
      <Header/>
      <Children>
        <Images/>
      </Children>
    
    </>
  )
}

export default App
