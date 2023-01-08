import { useEffect, useState } from "react"
import eventBus from "../App/eventBus"

const styles = {
  menuContainer: {
    position: 'absolute',
    top: '30px',
    backgroundColor: '#fff',
    color: '#000',
    marginLeft: '10px',
    padding: '0.5em',
    borderRadius: '2px'
  }
}

export default function MobileMenu({ menus, navTo }) {
  const [display, setDisplay] = useState(false)

  const toggleDisplay = () => {
    if (display) {
      setDisplay(false)
    } else {
      setDisplay(true)
    }
  }

  useEffect(() => {
    eventBus.on("closeMenu", () => { setDisplay(false) })
  })

  return (
    <div className="mobile-menu-wrapper">
      <div
        className="open-menu"
        style={{ paddingLeft: '0.5em', paddingTop: '0.5em' }}
      >
        <i className="fas fa-bars" onClick={toggleDisplay}></i>
      </div>
      {display && <div style={styles.menuContainer}>
        <div className="mobile-menu">
          {menus.map(m => {
            return (
              <span
                className={`menu-items ${m.active ? 'active' : ''}`}
                key={m.key}
                onClick={() => navTo(m, setDisplay(false))}
              >
                {m.label}
              </span>
            )
          })}
          <span className="menu-items"><a href="https://journaldedev.fr">Blog</a></span>
        </div>
      </div>}
    </div>
  )
}