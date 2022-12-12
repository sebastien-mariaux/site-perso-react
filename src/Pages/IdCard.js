import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import profile from '../assets/img/profile2.jpg'
import profileHover from '../assets/img/profileHover.jpg'
import Languages from '../MainPage/Languages'

const styles = {
  profileImgContainer: {
    margin: '20px 0',
    display: 'flex',
    justifyContent: 'space-around',
    height: '100px'
  },
  profileImg: {
    height: '100%',
    width: '100px',
    borderRadius: '50%',
    backgroundRepeat: "noRepeat",
    backgroundSize: "150px",
  },
  h1: {
    fontSize: '1rem',
    marginTop: 0,
  },
  h2: {
    fontFamily: 'cinzel-bold',
    marginTop: 0,
    fontSize: '1rem'
  }
}

export default function IdCard() {
  const { t } = useTranslation()

  const [profileImg, setProfileImg] = useState(profile)
  return (
    <div style={{ display: 'flex', marginBottom: '2em' }} className="id-card">
      <div style={styles.profileImgContainer}>
        <img
          src={profileImg}
          alt='profile'
          style={styles.profileImg}
          onMouseOver={() => setProfileImg(profileHover)}
          onMouseOut={() => setProfileImg(profile)}
        />
      </div>
      <div style={{ marginLeft: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 style={styles.h2}>Sébastien MARIAUX</h2>
        <h1 style={styles.h1}>{t('mainPage.role')}</h1>
        <Languages />
      </div>
    </div >
  )
}