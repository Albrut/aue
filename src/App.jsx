
import {LoginSignUp} from './components/LoginSignUp/LoginSignUp'
import { LangLevel } from './components/langLevel/LangLevel'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element = {<LoginSignUp/>}/>
        <Route path='/lang-level' element = {<LangLevel/>}/>

      </Routes>
    </Router>
    
  )
}

export default App
