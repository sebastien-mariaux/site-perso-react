import cvFr from '../assets/docs/cv_fr.pdf'

export default function Socials() {
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
        <a href={cvFr}
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