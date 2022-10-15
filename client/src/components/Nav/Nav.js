import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Nav.scss'
import MenuIcon from '../MenuIcon/MenuIcon';
import SectionLine from '../SectionLine/SectionLine';
import userIcon from "../../assets/icons/profile-icon.png";
import homeIcon from "../../assets/icons/home-svgrepo-com.svg";
import { ReactComponent as Spaces} from "../../assets/icons/basketball-hoop.svg";
import sportIcon from "../../assets/icons/sport-faculty-svgrepo-com.svg";
import { ReactComponent as GroupIcon} from "../../assets/icons/group-svgrepo-com (1).svg";
import { ReactComponent as LogoIcon} from "../../assets/icons/holo_logo.svg";
import { ReactComponent as Home } from "../../assets/icons/home-svgrepo-com.svg";
import { ReactComponent as Exp} from "../../assets/icons/2305629_gallery_image_mountain_photo_pic_icon.svg";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
          <nav className="navbar-contents">
            <div className="nav-header">
              <LogoIcon />
              <h1>holo.</h1>
            </div>
            <ul className="navbar-links">
              <li>
                <NavLink to="/home" activeClassName="active">
                  <span>
                    <Home className="home-icon"/>
                    Home
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/spaces">
                  <span>
                    <Spaces className="spaces-icon"/>
                  </span>
                  Spaces
                </NavLink>
              </li>
              <li>
                <NavLink to="/experiences">
                  <span>
                    <Exp className="exp-icon"/>
                  </span>
                  Experiences
                </NavLink>
              </li>
              <li>
                <NavLink to="/groups">
                  <span>
                    <GroupIcon className="group-icon"/>
                  </span>
                  Groups
                </NavLink>
                
              </li>
            </ul>
            <div className="nav-user">
              <p>Guest</p>
              <img src={userIcon}/>
            </div>
          </nav>
      </div>
      <div className="border-bottom"></div>
    </div>
    
  )
}

export default Nav;