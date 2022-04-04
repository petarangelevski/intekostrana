import React, {useEffect, useRef, useState} from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { formGroupClasses } from '@mui/material';
import ListIcon from '@mui/icons-material/List';

function NavLinks() {
    const ref = useRef();
    const refSecond = useRef();
    const [show, setShow] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    useEffect(() => {
        const checkIfClickedOutside = e => {
          // If the menu is open and the clicked target is not within the menu,
          // then close the menu
          if (show && ref.current && !ref.current.contains(e.target)) {
            setShow(false)
          }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [show])
      useEffect(() => {
        const checkIfClickedOutside = e => {
          // If the menu is open and the clicked target is not within the menu,
          // then close the menu
          if (showSecond && refSecond.current && !refSecond.current.contains(e.target)) {
            setShowSecond(false)
          }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [showSecond])
  return (
      <>

    {/* <li className='split__button_s' /> */}
    <li className="nav__item nav__button ">
        <a className="nav__link" href="/"><strong>Дома</strong></a>
    </li>
    <li className='nav__button_s' />
    <li className='nav__button_ss' />
    <li className="nav__item nav__button ">
        <a className="nav__link" href="/api/zanas"><strong>За нас</strong></a>
    </li>
    <li className='nav__button_s' />
    <li className='nav__button_ss' />
    <div className="dropdown" ref={ref}>
        <li className="nav__button">
            <a href='/api/sportska-oprema' className='nav__link'><strong>Опрема</strong></a>
            <ArrowDropDownIcon style={{color: 'black'}} onClick={() => {{setShow((s) => !s)} {setShowSecond(false)}}} />
        </li>
        <div className="dropdown-content" style={{ display: show ? "flex" : "none" }}>
            <a className='dropdown__link' href="/api/sportska-oprema/patiki">Патики</a>
            <hr className='dropdown__line' style={{height: '1px'}} />
            <a className='dropdown__link' href="#">Тениски рекети</a>
            <hr className='dropdown__line' style={{height: '1px'}} />
            <a className='dropdown__link' href="#">Додатоци</a>
            <hr className='dropdown__line' style={{height: '1px'}} />
        </div>
    </div>
    <li className='nav__button_s' />
    <li className='nav__button_ss' />
    <div className="dropdown" ref={refSecond}>
        <li className="nav__button">
            <a href='/api/sportski-objekti' className='nav__link'><strong>Спортски Објекти</strong></a>
            <ArrowDropDownIcon style={{color: 'black'}} onClick={() => {{setShowSecond((s) => !s)} {setShow(false)}}}/>
        </li>
        <div className="dropdown-content1" style={{ display: showSecond ? "flex" : "none" }}>
            <a className='dropdown__link' href="/api/sportski-objekti/akrilni-podlogi">Акрилни подлоги</a>
            <hr className='dropdown__line' style={{height: '1px'}} />
            <a className='dropdown__link' href="/api/sportski-objekti/baloni">Балони за спортски терени</a>
            <hr className='dropdown__line' style={{height: '1px'}} />
            <a className='dropdown__link' href="/api/sportski-objekti/teniski-tereni">Тениски терени</a>
            <hr className='dropdown__line' style={{height: '1px'}} />
            <a className='dropdown__link' href="/api/sportski-objekti/tartan">Терени - Тартан Подлога <br/> Spartan BS</a>
            <hr className='dropdown__line' style={{height: '1px'}} />
            <a className='dropdown__link' href="/api/sportski-objekti/detski-igralista">Детски игралишта</a>
            <hr className='dropdown__line' style={{height: '1px'}} />
            <a className='dropdown__link' href="/api/sportski-objekti/samoliv">Антибактериска самоливна подлога</a>
            <hr className='dropdown__line' style={{height: '1px'}} />
            <a className='dropdown__link' href="/api/sportski-objekti/trim-pateki">Трим патеки</a>
            <hr className='dropdown__line' style={{height: '1px'}} />
        </div>
    </div>
    <li className='nav__button_s' />
    <li className='nav__button_ss' />
    <li className="nav__item nav__button ">
        <a className="nav__link" href="/api/kontakt"><strong>Контакт</strong></a>
    </li>
    <li className='nav__button_s' />
    <li className='nav__button_ss' />
    <li className="nav__item nav__button ">
        <a className="nav__link" href="/api/sistemi"><strong>Системи</strong></a>
    </li>
    {/* <li className='split__button_s' /> */}

</>
  )
}

export default NavLinks