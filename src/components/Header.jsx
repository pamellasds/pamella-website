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
          <button className="header-home" onClick={() => navigate('/pesquisa/sobre')} aria-label="Home">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </button>
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
            {lang === 'pt' ? '\u{1F1FA}\u{1F1F8} EN' : '\u{1F1E7}\u{1F1F7} PT'}
          </button>
        </div>
      </div>
    </header>
  )
}
