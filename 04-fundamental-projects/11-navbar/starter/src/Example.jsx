
import { useState, useRef } from "react"
import { links, social } from "./data"
import { FaBars } from "react-icons/fa"
import logo from './logo.svg'
const Example = () => {

  const [showLinks, setShowLinks] = useState(false)

  const linksRef = useRef(null)
  const toggleLinks = () => {
    console.log(linksRef.current.getBoundingClientRect())
    setShowLinks(!showLinks)
  }

  const linkstyles = {
    height: showLinks ? `${linksRef.current.getBoundingClientRect().height}px` : '0px'
  }

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}><FaBars /></button>
        </div>

        <ul className="links" ref={linksRef} style={linkstyles}>
          {links.map(link => {
            const { id, url, text } = link
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            )
          })}
        </ul>
      </div>
      {/*social Links*/}
      <ul className="social-icons">
        {social.map((socialIcon) => {
          const { id, url, icon } = socialIcon
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </nav >
  )
}
export default Example