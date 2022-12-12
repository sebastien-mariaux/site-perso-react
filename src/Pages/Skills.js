import { useTranslation } from "react-i18next"
import { mainTech, stack } from "../data/skills"

export default function Skills() {
  const { t } = useTranslation()

  return (
    <>
      <h3>{t('skills.title')}</h3>

      <h4 style={{ fontFamily: "'Courier New', Courier, monospace" }}>{t('skills.mainLanguages')}</h4>
      <div className='normal-content' >
        {mainTech.map(tech => {
          return (
            <div style={{}} key={tech.key}>
              {tech.title}
            </div>
          )
        })}
      </div>

      <h4 style={{ fontFamily: "'Courier New', Courier, monospace" }}>{t('skills.generalStack')}</h4>
      <div className='normal-content' >
        {stack.map(tech => {
          return (
            <div style={{}} key={tech.key}>
              {tech.title}
            </div>
          )
        })}
      </div>

    </>
  )
}