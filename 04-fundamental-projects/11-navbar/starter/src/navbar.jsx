import { useRef, useState } from 'react'
import logo from './logo.svg'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }
  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  }
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="social-icons">
            {social.map( socialLink => (
<li key={socialLink.id}><a href={socialLink.href}>{socialLink.icon}</a></li>
            ))}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
