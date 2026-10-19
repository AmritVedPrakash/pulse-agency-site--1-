import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
const AboutUs = lazy(() => import('./pages/AboutUs.jsx'))
const Pricing = lazy(() => import('./pages/Pricing.jsx'))
const ContactUs = lazy(() => import('./pages/ContactUs.jsx'))
const Blog = lazy(() => import('./pages/Blog.jsx'))
const BlogPost = lazy(() => import('./pages/BlogPost.jsx'))
const SocialMediaManagement = lazy(() => import('./components/home/SocialMediaManagement.jsx'))
const PackagingDesign = lazy(() => import('./components/home/PackagingDesign.jsx'))

export default function App() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/social-media-management" element={<SocialMediaManagement />} />
          <Route path="/packaging-design" element={<PackagingDesign />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
