import React, { useState } from 'react';
import './Layout.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import { FaBraille } from "react-icons/fa";
import { Menu, X } from 'lucide-react';
import Sidebar from '../Components/Sidebar';
import { useUser, SignIn } from '@clerk/clerk-react';

const Layout = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState<boolean>(false);
  const { user } = useUser();

  return user ? (
    <div className="dashboard-wrapper">
      <nav className="top-nav">
        <span className="logo" onClick={() => navigate('/')}>
          <FaBraille />
          <p>AiChamp</p>
        </span>

        {/* Render hamburger or close icon based on sidebar state */}
        {sidebar ? (
          <X onClick={() => setSidebar(false)} className="lucide-close" />
        ) : (
          <Menu onClick={() => setSidebar(true)} className="hamburger-menu" />
        )}
      </nav>

      <div className="layout-body">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <main className="main-content" onClick={() => sidebar && setSidebar(false)}>
          <Outlet />
        </main>
      </div>
    </div>
  ) : (
    <div className="signin-container">
      <SignIn />
    </div>
  );
};

export default Layout;
