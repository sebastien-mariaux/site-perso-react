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


  const initialMenu = [
    { label: t('sider.menu.experiences'), active: true, key: 'experiences' },
    { label: t('sider.menu.education'), active: false, key: 'education' },
    { label: t('sider.menu.design'), active: false, key: 'design' },
    { label: t('sider.menu.skills'), active: false, key: 'programming' }
  ]

  const [menus, setMenus] = useState(initialMenu)

  const setItemActive = (item) => {
    const newMenus = menus.map(e => {
      e.active = e.key === item.key
      return e
    })
    setMenus(newMenus)
  }

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
        <span className='menu-items'onClick={closeSider}>
          <i class="fas fa-times"></i>
        </span>
      </div>
      <SiderContent menus={menus} />
    </div>
  )
}