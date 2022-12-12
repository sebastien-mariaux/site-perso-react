import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';
import IdCard from './IdCard';

const styles = {
  padding: '1em',
}

export default function PageLayout({profileImg, currentImg, setCurrentImg}) {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 650px)' })
  return (
    <div style={styles}>
      {isSmallScreen || <IdCard profileImg={profileImg} currentImg={currentImg} setCurrentImg={setCurrentImg} />}
      <Outlet />
    </div>
  )
}