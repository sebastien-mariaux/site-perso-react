import Footer from "./Footer/Footer";
import { Outlet } from 'react-router-dom';
import Menu from "./Menu/Menu";

const styles = {
    container: {
      margin: 'auto',
      minHeight: 'calc(100vh - 30px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    mainContainer: {
      maxWidth: '1000px',
      margin: 'auto'
    }
  }

export default function Layout() {

  return (
    <div style={styles.mainContainer}>
      <Menu />
      <div style={styles.container}>
        <div><Outlet /></div>
        <Footer />
      </div>
    </div>
  )
}