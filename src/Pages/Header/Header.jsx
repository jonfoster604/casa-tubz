import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';
import './Header.scss';

function Header() {
  const [showMenu, setShowMenu] = useState(0);
  const toggle = () => setShowMenu(!showMenu);

  // ***** Function changes hamburger icon with open and close of menu ******
  const Hamburger = () => {
    if (showMenu) {
      return (
        <IconContext.Provider value={{ className: 'react-icons' }}>
          <VscChromeClose onClick={toggle} />
        </IconContext.Provider>
      );
    }

    return (
      <IconContext.Provider value={{ className: 'react-icons' }}>
        <GiHamburgerMenu onClick={toggle} />
      </IconContext.Provider>
    );
  };

  return (
    <header id="navWrapper" className="navBar">
      <div className="navBar-block" id="block1">
        <Hamburger />
      </div>
      <div className="navBar-block block2"></div>
      <div className="navBar-block block3"></div>
      <nav id="flyoutMenu" className={showMenu ? 'show' : 'hide'} onClick={toggle} >
        <ul>
          <li id="home" className="menuLink">
            Home
          </li>
          <li id="option1" className="menuLink">
            Option 1
          </li>
          <li id="option2" className="menuLink">
            Option 2
          </li>
          <li id="option3" className="menuLink">
            Option 3
          </li>
        </ul>
       
      </nav>
    </header>
  );
}

export default Header;
