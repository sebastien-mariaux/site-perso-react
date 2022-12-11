import Education from "./Education"
import Experiences from "./Experiences"
import NoContent from "./NoContent"
import Projects from "./Projects"
import Skills from "./Skills"

export default function SiderContent({ menus }) {

  const activeItem = menus.find(e => e.active)

  switch (activeItem.key) {
    case 'experiences':
      return (<Experiences />)
    case 'education':
      return (<Education />)
    case 'skills':
      return (<Skills />)
    case 'projects':
      return (<Projects />)
    case 'design':
      return (<NoContent item={activeItem} />)
    default:
      return (<NoContent />)
  }
}