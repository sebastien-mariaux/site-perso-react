export default function MainMenu({ menus, navTo }) {
  return (
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
      <span className="menu-items"><a href="https://journaldedev.fr">Blog</a></span>
    </div>
  )
}