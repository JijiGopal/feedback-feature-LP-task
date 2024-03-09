
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { BackToQuestions } from './components/BackToQuestions/BackToQuestions'
import { ContactUs } from './components/ContactUs/ContactUs'
import { FabBtn } from './components/FAB/FabBtn'
import { Feedback } from './components/Feedback/Feedback'
import { Navbar } from './components/Navbar/Navbar'
import { ReportIssues } from './components/ReportIssues/ReportIssues'
import { Suggestion } from './components/Suggestions/Suggestion'
import { LandingPage } from './pages/LandingPage';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <BackToQuestions/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/issue' element={<ReportIssues/>}/>
          <Route path='/feedback' element={<Feedback/>}/>
          <Route path='/suggestion' element={<Suggestion/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
