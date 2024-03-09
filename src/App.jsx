  
import './App.css'
import { BackToQuestions } from './components/BackToQuestions/BackToQuestions'
import { FabBtn } from './components/FAB/FabBtn'
import { Feedback } from './components/Feedback/Feedback'
import { Navbar } from './components/Navbar/Navbar'
import { ReportIssues } from './components/ReportIssues/ReportIssues'
import { Suggestion } from './components/Suggestions/Suggestion'
import { LandingPage } from './pages/LandingPage'
function App() {
 
  return (
    <>
        {/* <Navbar/>
        <BackToQuestions/>
        <LandingPage/> */}
         <FabBtn/>
         {/* <ReportIssues/> */}
         <Suggestion/>
    </>
  )
}

export default App
