import { useTranslation } from 'react-i18next';
import './App.scss';
import MainPage from './MainPage/MainPage';

const styles = {
  container: {
    margin: 'auto',
    maxWidth: '990px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
  },
}

function App() {

  const { t, i18n } = useTranslation()

  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div style={styles.container}>
      <MainPage />
      <footer>
        <div>
          <p>
            <span
            className='button-like'
              onClick={() => changeLanguageHandler('en')}
            >
              English
            </span>
            <span> - </span>
            <span
            className='button-like'
              onClick={() => changeLanguageHandler('fr')}
            >
              French
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
