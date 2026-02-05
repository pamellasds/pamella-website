import { useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import './Header.css'

export default function Header({ onToggleSidebar, sidebarOpen }) {
  const location = useLocation()
  const navigate = useNavigate()
  const { t, lang, toggleLang } = useLanguage()

  const mode = location.pathname.startsWith('/industria') ? 'industria' : 'pesquisa'

  const handleToggle = () => {
    if (mode === 'pesquisa') {
      navigate('/industria/experiencias')
    } else {
      navigate('/pesquisa/sobre')
    }
  }

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <button
            className={`header-hamburger ${sidebarOpen ? 'open' : ''}`}
            onClick={onToggleSidebar}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
          <span className="header-name" onClick={() => navigate('/pesquisa/sobre')}>
            Pamella Soares
          </span>
        </div>

        <div className="header-right">
          <div className="mode-toggle">
            <span
              className={`mode-label ${mode === 'pesquisa' ? 'active' : ''}`}
              onClick={() => navigate('/pesquisa/sobre')}
            >
              <svg className="mode-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              {t('header_research')}
            </span>
            <button
              className="toggle-switch"
              onClick={handleToggle}
              aria-label="Alternar modo"
            >
              <span className={`toggle-knob ${mode === 'industria' ? 'right' : ''}`} />
            </button>
            <span
              className={`mode-label ${mode === 'industria' ? 'active' : ''}`}
              onClick={() => navigate('/industria/experiencias')}
            >
              <svg className="mode-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              {t('header_industry')}
            </span>
          </div>

          <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle language">
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>
      </div>
    </header>
  )
}
