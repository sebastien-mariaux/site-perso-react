import { useTranslation } from "react-i18next"
import { useMediaQuery } from "react-responsive"
import { experiencesEn, experiencesFr } from "../data/experiences"

export default function Experiences() {

  const { t, i18n } = useTranslation()

  const experiences = i18n.language === 'fr' ? experiencesFr : experiencesEn
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return [
    <>
      <h3>{t('experiences.title')}</h3>
      <div className="normal-content">
        {experiences.map(exp => {
          return (
            <div className="exp-item" >
              {!isTabletOrMobile && <img src={"/" + exp.img} alt='logo' height={'50px'} style={{marginRight: '12px'}} />}
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