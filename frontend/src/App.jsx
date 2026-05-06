import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import CartPage from './pages/CartPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import MenuPage from './pages/MenuPage.jsx'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Layout>
  )
}

export default App
