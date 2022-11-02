import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useMediaQuery } from "react-responsive"
import SiderContent from "./SiderContent"


const styles = {
  menuItem: {
    textAlign: 'center',
    color: '#fff',
    paddingBottom: '1em',
    fontFamily: "cinzel-bold"
  }
}
export default function Sider({ setDisplaySider }) {

  const { t } = useTranslation()

  const closeSider = () => {
    setDisplaySider(false)
  }


  const getMenu = (activeItem) => {
    return (
      [
        { label: t('sider.menu.experiences'), active: false, key: 'experiences' },
        { label: t('sider.menu.education'), active: false, key: 'education' },
        { label: t('sider.menu.design'), active: false, key: 'design' },
        { label: t('sider.menu.skills'), active: false, key: 'skills' },
        { label: t('sider.menu.projects'), active: false, key: 'projects' }
      ].map(e => {
        e.active = e.key === activeItem.key
        return e
      })
    )
  }

  const [activeItem, setActiveItem] = useState({key: 'experiences'})

  const setItemActive = (item) => {
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
              onClick={() => setItemActive(m)}
            >
              {m.label}
            </span>
          )
        })}
        <span className='menu-items' onClick={closeSider}>
          <i class="fas fa-times"></i>
        </span>
      </div>
      <SiderContent menus={menus} />
    </div>
  )
}