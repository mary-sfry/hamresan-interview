import React, {useContext} from 'react';
import { TiBusinessCard, TiImageOutline, TiClipboard, TiArrowSyncOutline, TiTickOutline, TiThumbsUp, TiThLargeOutline, TiBrush, TiAdjustBrightness, TiChevronRight, TiChevronLeft } from "react-icons/ti";
import profile from '../assets/images/profile.jpg';
import darkModeLogo from '../assets/images/darkmodelogo.jpg';
import lightModeLogo from '../assets/images/lightmodelogo.jpg';
import { ThemeContext } from '../App';

const NavMenu = ({ Expanded, toggleMenu}) => {
    const {theme} = useContext(ThemeContext);
    const {toggleTheme} = useContext(ThemeContext);
  return (
      <>
        <div className={`navmenu ${Expanded ? 'navmenu_expanded' : 'navmenu_collapsed'}`}>
            <div className='navmenu__box'>
                <div className='navmenu__inner-box'>
                    <div className='navmenu__toggle-btn' onClick={toggleMenu}> {Expanded ? <TiChevronLeft/> : <TiChevronRight /> }</div>
                    <img className='navmenu__logo' src={`${theme === 'Light' ? lightModeLogo : darkModeLogo}`} alt="" />
                </div>
                <div className='navmenu__inner-box'>
                    <p className='navmenu__title'>ANALYTICS</p>
                    <div className='navmenu__item'>
                        <a href="#" className='navmenu__link'>
                            <TiBusinessCard size='20' className='navmenu__icon' /><span>{Expanded && 'Dashboard'}</span>
                        </a>
                    </div>
                    <div className='navmenu__item'>
                        <a href="#" className='navmenu__link'>
                            <TiImageOutline size='20' className='navmenu__icon' /><span>{Expanded && 'Performance'}</span>
                        </a>
                    </div>
                </div>
                <div className='navmenu__inner-box'>
                    <p className='navmenu__title'>CONTENT</p>
                    <div className='navmenu__item'>
                    <a href="#" className='navmenu__link'>
                        <TiClipboard size='20' className='navmenu__icon' /><span>{Expanded && 'Guides'}</span>
                    </a>
                    </div>
                    <div className='navmenu__item'>
                    <a href="#" className='navmenu__link'>
                        <TiArrowSyncOutline size='20' className='navmenu__icon' /><span>{Expanded && 'Hotspots'}</span>
                    </a>
                    </div>
                    <div className='navmenu__item'>
                    <a href="#" className='navmenu__link'>
                        <TiTickOutline size='20' className='navmenu__icon' /><span>{Expanded && 'Checklists'}</span>
                    </a>
                    </div>
                    <div className='navmenu__item'>
                    <a href="#" className='navmenu__link'>
                        <TiThumbsUp size='20' className='navmenu__icon' /><span>{Expanded && 'NPS'}</span>
                    </a>
                    </div>
                </div>
                <div className='navmenu__inner-box'>
                    <p className='navmenu__title'>{Expanded ? 'CUSTOMIZATION' : 'CUSTOM..'}</p>
                    <div className='navmenu__item'>
                        <a href="#" className='navmenu__link'>
                            <TiThLargeOutline size='18' className='navmenu__icon' /><span>{Expanded && 'Segments'}</span>
                        </a>
                    </div>
                    <div className='navmenu__item'>
                        <a href="#" className='navmenu__link'>
                            <TiBrush size='20' className='navmenu__icon' /><span>{Expanded && 'Themes'}</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='navmenu__box'>
                <div className='navmenu__item' onClick={toggleTheme}>
                    <a className='navmenu__link'>
                        <TiAdjustBrightness size='20' className='navmenu__icon' /><span>{Expanded && `${theme} mode`}</span>
                    </a>
                </div>
                
                <div className='navmenu__profile'>
                    <img src={profile} alt="" />
                    {Expanded &&
                        <div>
                            <p>Omer E</p>
                            <p>Premium user</p>
                        </div>
                    }
                </div>
            </div>
        </div>
      </>
  )
}

export default NavMenu;