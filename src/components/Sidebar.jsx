import { NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { assetUrl } from '../utils'
import { profile } from '../data/profile'
import SocialLinks from './SocialLinks'
import './Sidebar.css'

export default function Sidebar({ open, onClose }) {
  const location = useLocation()
  const { t } = useLanguage()
  const mode = location.pathname.startsWith('/industria') ? 'industria' : 'pesquisa'

  const researchLinks = [
    { to: '/pesquisa/sobre', label: t('nav_about') },
    { to: '/pesquisa/publicacoes', label: t('nav_publications') },
  ]

  const industryLinks = [
    { to: '/industria/experiencias', label: t('nav_experience') },
    { to: '/industria/projetos', label: t('nav_projects') },
    { to: '/industria/skills', label: t('nav_skills') },
  ]

  const links = mode === 'pesquisa' ? researchLinks : industryLinks

  return (
    <>
      {open && <div className="sidebar-overlay" onClick={onClose} />}
      {/* Add class "sidebar--neutral" to revert to white/neutral sidebar */}
      <aside className={`sidebar sidebar--yellow ${open ? 'open' : ''}`}>
        <div className="sidebar-profile">
          <div className="sidebar-photo-wrap">
            <img
              src={assetUrl('/pamella.jpeg')}
              alt={profile.name}
              className="sidebar-photo"
            />
          </div>
          <h2 className="sidebar-name">{profile.name}</h2>
          <p className="sidebar-title">{t('profile_title')}</p>
          <p className="sidebar-location">{t('profile_location')}</p>
        </div>

        <nav className="sidebar-nav">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              onClick={onClose}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <a
            href={assetUrl('/cv/CV-Pamella-Soares.pdf')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm sidebar-cv-btn"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {t('sidebar_download_cv')}
          </a>
          <SocialLinks />
        </div>
      </aside>
    </>
  )
}
