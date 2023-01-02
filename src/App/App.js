import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import MainPage from '../MainPage/MainPage';
import Education from '../Pages/Education';
import Experiences from '../Pages/Experiences';
import Projects from '../Pages/Projects';
import Skills from '../Pages/Skills';
import Layout from '../Layout';
import PageLayout from '../Pages/PageLayout';
import Design from '../Pages/Design';
import { useEffect, useState } from 'react';
import eventBus from './eventBus';
import { setImages } from './appHelper';
import LegalInfo from './LegalInfo';

function App() {
  const [profileImg, setProfileImg] = useState()
  const [currentImg, setCurrentImg] = useState()

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


  useEffect(() => {
    setImages({ key: window.location.pathname.replace('/', '') }, setProfileImg, setCurrentImg)
    eventBus.on("changePage", (data) => setImages(data, setProfileImg, setCurrentImg))
  }, [window.location.pathname])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<MainPage />} />
          <Route path="" element={<PageLayout
            profileImg={profileImg}
            currentImg={currentImg}
            setCurrentImg={setCurrentImg}
          />} >
            <Route path="/experiences/" element={<Experiences />} />
            <Route path="/education/" element={<Education />} />
            <Route path="/design/" element={<Design />} />
            <Route path="/skills/" element={<Skills />} />
            <Route path="/projects/" element={<Projects />} />
          </Route>
          <Route path="/mentions-legales/" element={<LegalInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
