import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';
import IdCard from './IdCard';

const styles = {
  padding: '1em',
}

export default function PageLayout() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 650px)' })

  return (
    <div style={styles}>
      {isSmallScreen || <IdCard />}
      <Outlet />
    </div>
  )
}