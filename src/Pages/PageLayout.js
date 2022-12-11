import { Outlet } from 'react-router-dom';

const styles = {
  padding: '1em',
}

export default function PageLayout() {
  return (
    <div style={styles}>
      <div><Outlet /></div>
    </div>
  )
}