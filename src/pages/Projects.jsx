import { useLanguage } from '../i18n/LanguageContext'
import { projects } from '../data/projects'
import SkillBadge from '../components/SkillBadge'
import './Projects.css'

export default function Projects() {
  const { t } = useLanguage()

  return (
    <div className="projects">
      <h1 className="section-title">{t('proj_title')}</h1>
      <p className="section-subtitle">{t('proj_subtitle')}</p>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <article key={i} className="project-card">
            <div className="project-header">
              <h3 className="project-name">{project.name}</h3>
              <span className="project-company">{project.company}</span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-techs">
              {project.technologies.map((tech, j) => (
                <SkillBadge key={j} label={tech} />
              ))}
            </div>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline project-link"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                {t('proj_visit')}
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
