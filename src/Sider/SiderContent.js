import Education from "./Education"
import Experiences from "./Experiences"
import NoContent from "./NoContent"
import Skills from "./Skills"

export default function SiderContent({ menus }) {

  const activeItem = menus.find(e => e.active)

  switch (activeItem.key) {
    case 'experiences':
      return (<Experiences />)
    case 'education':
      return (<Education />)
    case 'programming':
      return (<Skills />)
    case 'design':
      return (<NoContent item={activeItem} />)
    default:
      return (<NoContent />)
  }
}