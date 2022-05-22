import React from 'react'
import './Nav.scss'
import ballIcon from '../../assets/icons/basketball-icon.svg';
import groupIcon from '../../assets/icons/group-icon.svg';
import partnerIcon from '../../assets/icons/partner-icon.svg';

const Nav = () => {
  return (
    <div className="navbar-container">
      <nav>
        <ul className="navbar-contents">
          <div className="nav-left">
            <h1>Shinka</h1>
            <li><img src={ballIcon}/><span>コートを探す</span></li>
            <li><img src={groupIcon}/><span>グループを探す</span></li>
            <li><img src={partnerIcon}/><span>パートナーになる</span></li>
          </div>
          <div className="nav-right">
            <li>登録</li>
            <li>ログイン</li>
          </div>
        </ul>      
      </nav>
    </div>
  )
}

export default Nav;