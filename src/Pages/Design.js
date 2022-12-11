import { useTranslation } from 'react-i18next'
import noContent from '../assets/img/no-content.gif'

export default function Design() {
  const { t } = useTranslation()
  return (
    <>
      <h3 style={{ color: '#fff' }}>{t(`pages.design`)}</h3>
      <div style={{ paddingTop: '20px' }}>
        <img src={noContent} title="Nothing to see here..." alt="man looking for something" />
      </div>
    </>
  )
}