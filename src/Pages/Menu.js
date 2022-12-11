import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export default function Menu() {

  const { t } = useTranslation()
  const navigate = useNavigate()


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

  const [activeItem, setActiveItem] = useState({key: 'home'})

  const navTo = (item) => {
    navigate(item.key)
    setActiveItem(item)
  }

  const menus = getMenu(activeItem)

  return (
    <div className='sider'>
      <div className="menu">
        {menus.map(m => {
          return (
            <span
              className={`menu-items ${m.active ? 'active' : ''}`}
              key={m.key}
              onClick={() => navTo(m)}
            >
              {m.label}
            </span>
          )
        })}

      </div>
    </div>
  )
}