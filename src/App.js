import { useMediaQuery } from 'react-responsive';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import MainPage from './MainPage/MainPage';
import Education from './Pages/Education';
import Experiences from './Pages/Experiences';
import Projects from './Pages/Projects';
import NoContent from "./Pages/NoContent"
import Skills from './Pages/Skills';
import Layout from './Layout';
import PageLayout from './Pages/PageLayout';



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<MainPage />} />
          <Route path="" element={<PageLayout />} >
            <Route path="/experiences/" element={<Experiences />} />
            <Route path="/education/" element={<Education />} />
            <Route path="/design/" element={<NoContent />} />
            <Route path="/skills/" element={<Skills />} />
            <Route path="/projects/" element={<Projects />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
