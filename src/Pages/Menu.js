import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router";
import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";

export default function Menu() {

  const { t } = useTranslation()
  const navigate = useNavigate()
  const isSmallScreen = useMediaQuery({ query: '(max-width: 650px)' })


  const getMenu = (activeItem) => {
    return (
      [
        { label: t('pages.menu.home'), active: false, key: '/' },
        { label: t('pages.menu.experiences'), active: false, key: 'experiences' },
        { label: t('pages.menu.education'), active: false, key: 'education' },
        { label: t('pages.menu.design'), active: false, key: 'design' },
        { label: t('pages.menu.skills'), active: false, key: 'skills' },
        { label: t('pages.menu.projects'), active: false, key: 'projects' }
      ].map(e => {
        e.active = e.key === activeItem.key
        return e
      })
    )
  }

  const [activeItem, setActiveItem] = useState({ key: 'home' })

  const navTo = (item, afterNav=()=>{}) => {
    navigate(item.key)
    setActiveItem(item)
    afterNav()
  }

  const menus = getMenu(activeItem)
  return (
    <>
      {!isSmallScreen && <MainMenu menus={menus} navTo={navTo} />}
      {isSmallScreen && <MobileMenu menus={menus} navTo={navTo} />}
    </>
  )

}