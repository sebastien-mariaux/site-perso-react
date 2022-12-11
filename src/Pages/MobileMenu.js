import { useState } from "react"

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
    console.log('ok')
    if (display) {
      setDisplay(false)
    } else {
      setDisplay(true)
    }
  }
  console.log(display)
  return (
    <>
      <div
        style={{ paddingLeft: '0.5em', paddingTop: '0.5em' }}
      >
        <i class="fas fa-bars" onClick={toggleDisplay}></i>
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
        </div>
      </div>}
    </>
  )
}