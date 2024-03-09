  
import './App.css'
import { BackToQuestions } from './components/BackToQuestions/BackToQuestions'
import { FabBtn } from './components/FAB/FabBtn'
import { Feedback } from './components/Feedback/Feedback'
import { Navbar } from './components/Navbar/Navbar'
import { ReportIssues } from './components/ReportIssues/ReportIssues'
import { LandingPage } from './pages/LandingPage'
function App() {
 
  return (
    <>
        {/* <Navbar/>
        <BackToQuestions/>
        <LandingPage/> */}
         <FabBtn/>
         {/* <ReportIssues/> */}
         <Feedback/>
    </>
  )
}

export default App
