import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import MainPage from '../MainPage/MainPage';
import Education from '../Pages/Education';
import Experiences from '../Pages/Experiences';
import Projects from '../Pages/Projects';
import Skills from '../Pages/Skills';
import Layout from '../Layout';
import PageLayout from '../Pages/PageLayout';
import Design from '../Pages/Design';
import { useEffect } from 'react';
import eventBus from './eventBus';

function App() {

  useEffect(() => {
    document.addEventListener("click", (e) => {
      let clickedElt = e.target;
      const menuElt = document.querySelector('.mobile-menu-wrapper')
      let menuEltClicked = false
      do {
        if (menuElt === clickedElt) {
          menuEltClicked = true
          break
        }
        clickedElt = clickedElt.parentNode;
      } while (clickedElt)

      if (!menuEltClicked) {
        eventBus.dispatch('closeMenu')
      }
    })
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<MainPage />} />
          <Route path="" element={<PageLayout />} >
            <Route path="/experiences/" element={<Experiences />} />
            <Route path="/education/" element={<Education />} />
            <Route path="/design/" element={<Design />} />
            <Route path="/skills/" element={<Skills />} />
            <Route path="/projects/" element={<Projects />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;