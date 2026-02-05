import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import About from './pages/About'
import Publications from './pages/Publications'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="app">
      <Header
        onToggleSidebar={() => setSidebarOpen(prev => !prev)}
        sidebarOpen={sidebarOpen}
      />
      <div className="layout">
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <main className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/pesquisa/sobre" replace />} />
            <Route path="/pesquisa/sobre" element={<About />} />
            <Route path="/pesquisa/publicacoes" element={<Publications />} />
            <Route path="/industria/experiencias" element={<Experience />} />
            <Route path="/industria/projetos" element={<Projects />} />
            <Route path="/industria/skills" element={<Skills />} />
            <Route path="*" element={<Navigate to="/pesquisa/sobre" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
