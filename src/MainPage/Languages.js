import { languages } from "../data/languages"

export default function Languages() {
  return (<div className="languages">
    {languages.map(lang => {
      return (
        <span style={{ color: lang.color }} key={lang.key}>
          {lang.name}
        </span>
      )
    })}
  </div>)
}