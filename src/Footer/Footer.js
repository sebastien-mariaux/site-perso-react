import { useTranslation } from "react-i18next"
import Socials from "../MainPage/Socials"

export default function Footer() {
  const { i18n } = useTranslation()

  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <footer>
        <Socials />
        <div >
          <span
            className='button-like'
            onClick={() => changeLanguageHandler('en')}
          >
            English
          </span>
          <span> - </span>
          <span
            className='button-like'
            onClick={() => changeLanguageHandler('fr')}
          >
            Français
          </span>
        </div>
        <div style={{marginBottom: '50px', marginTop: '10px'}}>
          <a href='mentions-legales'>{i18n.t('footer.legal-infos')}</a>
        </div>
    </footer>
  )
}