import { useTranslation } from "react-i18next"
import { experiencesEn, experiencesFr, experiencesEs } from "../data/experiences"

export default function Experiences() {
  const { t, i18n } = useTranslation()

  let experiences = []
  switch (i18n.language) {
    case 'fr':
      experiences = experiencesFr
      break
    case 'en':
      experiences = experiencesEn
      break
    case 'es':
      experiences = experiencesEs
      break
    default:
      experiences = experiencesEn
  }

  return [
    <>
      <h3>{t('experiences.title')}</h3>
      <div className="normal-content">
        {experiences.map((exp, index) => {
          return (
            <div className="exp-item" key={index}>
              <div>
                <div style={{ fontWeight: 'bold' }}>{exp.title}</div>
                <div style={{ color: '#61dafb' }}>{exp.institution}</div>
                <div style={{ fontStyle: 'italic' }}>{exp.dates}</div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  ]
}