import { useLanguage } from '../i18n/LanguageContext'
import { experiences } from '../data/experiences'
import SkillBadge from '../components/SkillBadge'
import './Experience.css'

export default function Experience() {
  const { t } = useLanguage()

  return (
    <div className="experience">
      <h1 className="section-title">{t('exp_title')}</h1>
      <p className="section-subtitle">{t('exp_subtitle')}</p>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <div key={i} className={`timeline-item ${exp.current ? 'current' : ''}`}>
            <div className="timeline-dot">
              {exp.current && <span className="timeline-pulse" />}
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="timeline-role">{exp.role}</h3>
                <span className="timeline-period">{exp.period}</span>
              </div>
              <p className="timeline-company">
                {exp.company} <span className="timeline-location">| {exp.location}</span>
              </p>
              <ul className="timeline-description">
                {exp.description.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
              <div className="timeline-techs">
                {exp.technologies.map((tech, j) => (
                  <SkillBadge key={j} label={tech} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
