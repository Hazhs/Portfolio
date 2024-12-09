
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import Home from '../Pages/Home'
import About from '../Pages/About'
import Project from '../Pages/Project'
import PageNotFound from '../Pages/PageNotFound'
import Header from './Header.jsx'

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}
