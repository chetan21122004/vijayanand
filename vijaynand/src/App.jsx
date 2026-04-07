import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import AdmissionPage from './pages/AdmissionPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import OnlineCounsellingPage from './pages/OnlineCounsellingPage'
import PacePage from './pages/PacePage'
import TherapyServicesPage from './pages/TherapyServicesPage'
import TujhPage from './pages/TujhPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/therapy-services" element={<TherapyServicesPage />} />
        <Route path="/pace" element={<PacePage />} />
        <Route path="/online-counselling" element={<OnlineCounsellingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/tujh" element={<TujhPage />} />
        <Route path="/admission" element={<AdmissionPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
