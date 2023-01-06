import { useTranslation } from 'react-i18next'

export default function Socials() {

  const { i18n } = useTranslation()

  const cv_path = i18n.language === 'fr' ? "/cv_mariaux_fr.pdf" :  "/cv_mariaux_en.pdf"

  return (
    <>
      <p className="social-icons">
        <a href="https://github.com/sebastien-mariaux"
          className="github"
          target="_blank"
          rel="noreferrer"
          title="GitHub">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/sebastienmariaux/"
          className="linkedin"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn">
          <i className="fab fa-linkedin fa-2x "></i>
        </a>
        <a href={cv_path}
          className="cv"
          target="_blank"
          rel="noreferrer"
          title="CV">
          <i className="fas fa-file-export fa-2x"></i>
        </a>

      </p>
    </>
  )
}