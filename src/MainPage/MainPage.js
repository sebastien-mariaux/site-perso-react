import { useState } from "react"
import { useTranslation } from "react-i18next"
import profile from '../assets/img/profile.jpg'
import profileHover from '../assets/img/profileHover.jpg'
import Description from "./Description"
import Languages from "./Languages"
import Socials from "./Socials"

const styles = {
  header: {
    marginTop: '50px',
    fontFamily: 'cinzel',
    height: '100%',
    backgroundColor: 'rgb(71, 120, 153)',
    color: '#fff',
    textAlign: 'center',
  },
  profileImgContainer: {
    margin: '20px 0',
    display: 'flex',
    justifyContent: 'space-around',
    height: '150px'
  },
  profileImg: {
    height: '100%',
    width: '150px',
    borderRadius: '50%',
    backgroundRepeat: "noRepeat",
    backgroundSize: "150px",
  },
  colors: {
    python: {
      color: '#FFD43B'
    },
    ruby: {
      color: '#A91401'
    },
    react: {
      color: 'rgb(97, 218, 251)'
    }
  }
}

export default function MainPage() {
  const [profileImg, setProfileImg] = useState(profile)
  const { t } = useTranslation()


  return (
    <div style={styles.header}>
      <h2>Sébastien MARIAUX</h2>
      <div style={styles.profileImgContainer}>
        <img
          src={profileImg}
          alt='profile'
          style={styles.profileImg}
          onMouseOver={() => setProfileImg(profileHover)}
          onMouseOut={() => setProfileImg(profile)}
        />
      </div>
      <h1>{t('mainPage.role')}</h1>
      <Languages />

      <Description />
      <Socials />
    </div>
  )
}