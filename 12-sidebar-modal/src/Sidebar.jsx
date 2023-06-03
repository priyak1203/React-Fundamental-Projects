import { FaTimes } from 'react-icons/fa';
import logo from './logo.svg';
import { links, social } from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      {/* logo */}
      <div className="sidebar-header">
        <img src={logo} alt="coding addict logo" className="logo" />
        <button onClick={closeSidebar} className="close-btn">
          <FaTimes />
        </button>
      </div>

      {/* nav links */}
      <ul className="links">
        {links.map((link) => {
          const { id, icon, text, url } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>

      {/* social links */}
      <ul className="social-links">
        {social.map((socialLink) => {
          const { id, icon, url } = socialLink;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
