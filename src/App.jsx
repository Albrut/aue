
import {LoginSignUp} from './components/LoginSignUp/LoginSignUp'
import { LangLevel } from './components/langLevel/LangLevel'
import { Profile } from './components/Profile/Profile'
import { LessonComponent } from './components/Lessons/Lesson';
import { LevelComponent } from './components/Level/Level';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router



function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element = {<LoginSignUp/>}/>
        <Route path='/lang-level' element = {<LangLevel/>}/>
        <Route path='/profile' element = {<Profile/>}/>
        <Route path='/lesson' element = {<LessonComponent/>}/>
        <Route path='/level' element = {<LevelComponent/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
