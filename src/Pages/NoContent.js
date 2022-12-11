import { useTranslation } from 'react-i18next'
import noContent from '../assets/img/no-content.gif'

export default function NoContent({ item }) {
  const { t } = useTranslation()
  return (
    <>
      {item?.key && <h3 style={{color: '#fff'}}>{t(`noContent.${item.key}`)}</h3>}
      <div style={{ textAlign: 'center', paddingTop: '20px' }}>
        <img src={noContent} title="Nothing to see here..." alt="man looking for something" />
      </div>
    </>
  )
}