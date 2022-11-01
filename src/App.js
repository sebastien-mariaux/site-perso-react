import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.scss';
import Footer from './Footer/Footer';
import MainPage from './MainPage/MainPage';
import Sider from './Sider/Sider';

const styles = {
  container: {
    margin: 'auto',
    maxWidth: '1500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
  },
  panels: {

  }
}

function App() {

  const [displaySider, setDisplaySider] = useState(false)

  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  console.log('displaySider', displaySider)
  console.log('isTabletOrMobile', isTabletOrMobile)
  console.log(!displaySider || !isTabletOrMobile)
  const displayMainPage = !displaySider || !isTabletOrMobile
  console.log('displayMainPage', displayMainPage)


  return (
    <div style={styles.container}>
      <div className='panels'>
        {displayMainPage && <MainPage setDisplaySider={setDisplaySider} displaySider={displaySider} />}
        {displaySider && <Sider setDisplaySider={setDisplaySider} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
