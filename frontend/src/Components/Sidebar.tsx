import { useUser, useClerk } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import {
  Hash,
  House,
  SquarePen,
  Image,
  LogOut,
  // Eraser,
  // Scissors,
  // FileText,
  // Users,
} from 'lucide-react';

import './Sidebar.scss';

type SidebarProps = {
  sidebar: boolean;
  setSidebar: (value: boolean) => void;
};

const navItems = [
  { to: '/ai', label: 'Dashboard', Icon: House },
  { to: '/ai/write-article', label: 'Write Article', Icon: SquarePen },
  { to: '/ai/blog-tittles', label: 'Blog Titles', Icon: Hash },
  { to: '/ai/generate-images', label: 'Generate Images', Icon: Image },
  // Future routes:
  // { to: '/ai/remove-background', label: 'Remove Background', Icon: Eraser },
  // { to: '/ai/remove-object', label: 'Remove Object', Icon: Scissors },
  // { to: '/ai/review-resume', label: 'Review Resume', Icon: FileText },
  // { to: '/ai/community', label: 'Community', Icon: Users },
];

export default function Sidebar({ sidebar, setSidebar }: SidebarProps) {
  const { user } = useUser();
  const { signOut } = useClerk();

  if (!user) return null;

  const handleNavClick = () => {
    if (window.innerWidth <= 768) {
      setSidebar(false);
    }
  };

  const handleSignOut = () => {
    signOut();
    if (window.innerWidth <= 768) {
      setSidebar(false);
    }
  };

  return (
    <div className={`sidebar ${sidebar ? 'open' : ''}`}>
      <div className="sidebar-content">
        <div className="user-info">
          <img src={user.imageUrl} alt={user.fullName || 'User profile'} />
          <h4>{user.fullName}</h4>
        </div>
        <ul className="nav-links">
          {navItems.map(({ to, label, Icon }) => (
            <li key={to} onClick={handleNavClick}>
              <Link to={to} className="nav-link">
                <Icon size={18} className="nav-icon" />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="signout">
          <button onClick={handleSignOut} aria-label="Sign out">
            <LogOut size={18} className="nav-icon" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}
