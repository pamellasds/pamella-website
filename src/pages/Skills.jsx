import { useLanguage } from '../i18n/LanguageContext'
import { profile } from '../data/profile'
import SkillBadge from '../components/SkillBadge'
import './Skills.css'

export default function Skills() {
  const { t } = useLanguage()

  const skillCategories = [
    { key: 'blockchain', label: t('skills_blockchain') },
    { key: 'webDev', label: t('skills_webdev') },
    { key: 'tools', label: t('skills_tools') },
    { key: 'research', label: t('skills_research') },
    { key: 'other', label: t('skills_other') },
  ]

  return (
    <div className="skills-page">
      <h1 className="section-title">{t('skills_title')}</h1>
      <p className="section-subtitle">{t('skills_subtitle')}</p>

      <div className="skills-categories">
        {skillCategories.map(cat => (
          <div key={cat.key} className="skills-category">
            <h2 className="skills-category-title">{cat.label}</h2>
            <div className="skills-category-badges">
              {profile.skills[cat.key].map((skill, i) => (
                <SkillBadge key={i} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
