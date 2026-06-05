import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import MarketingLandingPage from './pages/MarketingLandingPage.jsx'
import UploadScreen from './pages/UploadScreen.jsx'
import ProcessingState from './pages/ProcessingState.jsx'
import PartialResults from './pages/PartialResults.jsx'
import FullReveal from './pages/FullReveal.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/get-a-free-document-review" element={<MarketingLandingPage />} />
        <Route path="/upload" element={<UploadScreen />} />
        <Route path="/processing" element={<ProcessingState />} />
        <Route path="/partial-results" element={<PartialResults />} />
        <Route path="/full-reveal" element={<FullReveal />} />
      </Routes>
    </BrowserRouter>
  )
}
