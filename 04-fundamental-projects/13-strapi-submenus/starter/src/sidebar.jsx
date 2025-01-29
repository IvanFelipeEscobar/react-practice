import { useGlobalContext } from './context'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import {links, socials} from './data'
const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} = useGlobalContext()
  return (
   <aside className='sidebar'>
    <div className="sidebar-header">
        <img src={logo} alt="coding addict" className='logo' />
        <button className='close-btn' onClick={closeSidebar}>
            <FaTimes/>
        </button>
    </div>
    <ul className="links">
        {}
    </ul>
   </aside>
  )
}
export default Sidebar