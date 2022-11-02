import { useTranslation } from "react-i18next"
import { projectsEn, projectsFr } from "../data/projects.js"

export default function Projects() {
  const { t, i18n } = useTranslation()

  const projects = i18n.language === 'fr' ? projectsFr : projectsEn
  return (
    <>
      <h3>{t('projects.title')}</h3>
      <div className="normal-content">
        {projects.map(p => {
          return (
            <div className="exp-item" >
              <div>
                <div style={{ fontWeight: 'bold' }}>{p.title} - {p.description}</div>
                <div style={{ color: '#61dafb' }}>{p.technos}</div>
                <a style={{ color: '#fff', fontSize: '25px', marginRight: '0.5em' }} href={p.repo}><i className="fab fa-github"></i></a>
                <a style={{ color: '#fff', fontSize: '25px' }} href={p.url}><i class="fas fa-external-link-alt"></i>  </a>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}