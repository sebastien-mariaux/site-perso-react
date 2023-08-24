import { useTranslation } from "react-i18next"
import { projectsEn, projectsEs, projectsFr } from "../data/projects.js"

export default function Projects() {
  const { t, i18n } = useTranslation()

  // const projects = i18n.language === 'fr' ? projectsFr : projectsEn
  let projects = []
  switch (i18n.language) {
    case 'fr':
      projects = projectsFr
      break
    case 'en':
      projects = projectsEn
      break
    case 'es':
      projects = projectsEs
      break
    default:
      projects = projectsEn
  }

  return (
    <>
      <h3>{t('projects.title')}</h3>
      <p style={{fontFamily: "'Courier New', Courier, monospace", marginBottom: '2em'}}>{t('projects.intro')}</p>
      <div className="normal-content">
        {projects.map(p => {
          return (
            <div className="exp-item" >
              <div>
                <div style={{ fontWeight: 'bold' }}>{p.title} - {p.description}</div>
                <div style={{ color: '#61dafb' }}>{p.technos}</div>
                <a style={{ color: '#fff', fontSize: '25px', marginRight: '0.5em' }} href={p.repo}><i className="fab fa-github"></i></a>
                <a style={{ color: '#fff', fontSize: '25px' }} href={p.url}><i className="fas fa-external-link-alt"></i>  </a>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}