import profile from '../assets/img/profile.jpg'
import profile2 from '../assets/img/profile2.jpg'
import profile3 from '../assets/img/profile3.jpg'
import profile4 from '../assets/img/profile4.png'
import profile5 from '../assets/img/profile5.jpg'
import profileCV from '../assets/img/profile-cv.JPG'


export const setImages = (data, setProfileImg, setCurrentImg) => {
  switch (data.key) {
    case 'skills':
      setProfileImg(profile)
      setCurrentImg(profile)
      break;
    case 'education':
      setProfileImg(profile4)
      setCurrentImg(profile4)
      break;
    case 'projects':
      setProfileImg(profile3)
      setCurrentImg(profile3)
      break;
    case 'experiences':
      setProfileImg(profileCV)
      setCurrentImg(profileCV)
      break;
    case 'design':
      setProfileImg(profile5)
      setCurrentImg(profile5)
      break;
    default:
      setProfileImg(profile2)
      setCurrentImg(profile2)
      break;
  }
}