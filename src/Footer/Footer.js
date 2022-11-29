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
        <div style={{marginBottom: '50px'}}>
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
    </footer>
  )
}