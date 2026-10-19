import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import WelcomePopup from '../components/common/WelcomePopup'

export default function MainLayout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-violet focus:px-4 focus:py-2 focus:text-white">Skip to content</a>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main key={pathname} id="main" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <WelcomePopup />
    </>
  )
}
