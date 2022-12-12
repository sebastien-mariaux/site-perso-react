import { useTranslation } from "react-i18next"
import { educationEn, educationFr } from "../data/education"

export default function Education() {

  const { t, i18n } = useTranslation()

  const education = i18n.language === 'fr' ? educationFr : educationEn

  return [
    <>
      <h3 style={{ color: '#fff' }}>{t('education.title')}</h3>
      <div className="normal-content">
        {education.map((exp, index )=> {
          return (
            <div className="exp-item" key={index} >
              <div>
                <div>
                  <span style={{ fontStyle: 'italic', marginRight: '24px' }}>{exp.date}</span>
                  <span style={{ fontWeight: 'bold' }}>{exp.title}</span>
                </div>
                <div style={{ color: '#61dafb' }}>{exp.institution}</div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  ]
}