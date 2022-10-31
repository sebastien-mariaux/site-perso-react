import { useTranslation } from "react-i18next"
import { getAge, getExperience } from "./MainPageHelper"

export default function Description() {
  const { t } = useTranslation()
  const age = getAge()
  const experience = getExperience()
  return (
    <div className='description'>
      <p>{t('mainPage.age', { age: age })}</p>
      <p> Aix-en-Provence, France </p>
      <p>{t('mainPage.codeSince')}</p>
      <p> {t('mainPage.experience', { experience: experience })}</p>
    </div>
  )
}