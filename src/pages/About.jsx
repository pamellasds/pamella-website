import { useLanguage } from '../i18n/LanguageContext'
import { profile } from '../data/profile'
import './About.css'

export default function About() {
  const { t } = useLanguage()

  return (
    <div className="about">
      {/* Summary */}
      <section className="about-section">
        <h1 className="section-title">{t('about_title')}</h1>
        <p className="about-summary">{t('about_summary')}</p>
      </section>

      {/* Education */}
      <section className="about-section">
        <h2 className="about-heading">{t('about_education')}</h2>
        <div className="education-list">
          {profile.education.map((edu, i) => (
            <div key={i} className="education-item">
              <div className="education-dot" />
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                <p className="education-period">{edu.period}</p>
                {edu.note && <p className="education-note">{edu.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research Interests */}
      <section className="about-section">
        <h2 className="about-heading">{t('about_research_interests')}</h2>
        <div className="interests-grid">
          {profile.researchInterests.map((interest, i) => (
            <div key={i} className="interest-card">
              <span className="interest-icon">
                {['01', '02', '03', '04', '05', '06'][i]}
              </span>
              <span className="interest-label">{interest}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section className="about-section">
        <h2 className="about-heading">{t('about_languages')}</h2>
        <div className="languages-list">
          <div className="language-item">
            <span className="language-name">{t('lang_portuguese')}</span>
            <span className="language-level">{t('lang_native')}</span>
          </div>
          <div className="language-item">
            <span className="language-name">{t('lang_english')}</span>
            <span className="language-level">{t('lang_intermediate')}</span>
          </div>
        </div>
      </section>
    </div>
  )
}
