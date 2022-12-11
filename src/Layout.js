import Footer from "./Footer/Footer";
import { Outlet } from 'react-router-dom';
import Menu from "./Pages/Menu";
import { useMediaQuery } from "react-responsive";

const styles = {
    container: {
      margin: 'auto',
      minHeight: 'calc(100vh - 30px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }
  }

export default function Layout() {

  const isSmallScreen = useMediaQuery({ query: '(max-width: 650px)' })

  return (
    <>
      {!isSmallScreen && <Menu />}
      <div style={styles.container}>
        <div><Outlet /></div>
        <Footer />
      </div>
    </>
  )
}