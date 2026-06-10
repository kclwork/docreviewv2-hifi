import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import MarketingLandingPage from './pages/MarketingLandingPage.jsx'
import UploadScreen from './pages/UploadScreen.jsx'
import ProcessingState from './pages/ProcessingState.jsx'
import FullReview from './pages/FullReview.jsx'
import MobileHomepage from './pages/mobile/MobileHomepage.jsx'
import MobileMktLandingPage from './pages/mobile/MobileMktLandingPage.jsx'
import MobileUpload from './pages/mobile/MobileUpload.jsx'
import MobileProcessing from './pages/mobile/MobileProcessing.jsx'
import MobileV2FullReview from './pages/mobile/MobileV2FullReview.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Desktop */}
        <Route path="/" element={<Homepage />} />
        <Route path="/get-a-free-document-review" element={<MarketingLandingPage />} />
        <Route path="/upload" element={<UploadScreen />} />
        <Route path="/processing" element={<ProcessingState />} />
        <Route path="/full-review" element={<FullReview />} />

        {/* Mobile V2 — homepage/landing/upload/processing reuse the same components as V1 */}
        <Route path="/mobile-v2" element={<MobileHomepage />} />
        <Route path="/mobile-v2/get-a-free-document-review" element={<MobileMktLandingPage />} />
        <Route path="/mobile-v2/upload" element={<MobileUpload />} />
        <Route path="/mobile-v2/processing" element={<MobileProcessing />} />
        <Route path="/mobile-v2/full-review" element={<MobileV2FullReview />} />
      </Routes>
    </BrowserRouter>
  )
}
