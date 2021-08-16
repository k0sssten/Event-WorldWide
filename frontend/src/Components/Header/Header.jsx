import style from './Header.module.css';
import styleContainer from '../Container/container.module.css';
import logo from './img/eww.png'
import telegram from './img/telegram.png'

import { useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/userAC';
import { useEffect, useRef, useState } from 'react';

function Header() {
 
  const dispatch = useDispatch();
  const history = useHistory();
  const HomeButton = () => {
    history.push('/');
  };
  const user = useSelector((state) => state.user.user);

  const menuNav = useRef(null)

  const sandwitch_1 = useRef(null)
  const sandwitch_2 = useRef(null)
  const sandwitch_3 = useRef(null)


  const [menuNavBar, setmenuNavBar] = useState(false)

  const logoutSession = () => {
    dispatch(logout(''));
    localStorage.clear();
    HomeButton();
  };
  useEffect(()=> {
    if(user.id) {
      // localStorage.setItem('id', user.id)
      // localStorage.setItem('Name', user.Name)
      // localStorage.setItem('email', user.email)
      // localStorage.setItem('City', user.City)
      // localStorage.setItem('phone', user.Userphonenumber)
      // localStorage.setItem('photo', user.Userphoto)
      // localStorage.setItem('password', user.password)
    }
  },[user]);

  const location = useLocation();
  useEffect(() => {}, [location]);


  const showNavbar = () => {
    console.log(menuNav.current)
    if (menuNavBar === false) {
      menuNav.current.style.right = '0'
      sandwitch_1.current.style.transform = "rotate(45deg)"
      sandwitch_1.current.style.position = "relative"
      sandwitch_1.current.style.top = "7px"
      sandwitch_2.current.style.display = "none"
      sandwitch_3.current.style.transform = "rotate(-45deg)"
      setmenuNavBar(true)
    } else if (menuNavBar === true) {
      menuNav.current.style.right = '-320px'
      sandwitch_1.current.style.transform = "rotate(0deg)"
      sandwitch_1.current.style.position = "static"
      sandwitch_1.current.style.top = "0"
      sandwitch_2.current.style.display = "block"
      sandwitch_3.current.style.transform = "rotate(0deg)"
      setmenuNavBar(false)
    }
  }

  return (
    <>
      <header className={
        window.location.href === 'http://localhost:3000/signUp' ||
          window.location.href === 'http://localhost:3000/signIn' ||
          window.location.href === 'http://localhost:3000/personalArea' ||
          window.location.href === 'http://localhost:3000/search' ||
          window.location.href === 'http://localhost:3000/quicksearch' ||
          window.location.href === 'http://localhost:3000/events' ?
          style.headerRest : style.header
      }>
        <div className={`${styleContainer.container} ${style.containerHeader}`}>
          <nav className={style.navHeader}>
            <ul className={style.headerMenu}>
              <li className={style.headerMenuItem}>
                <Link className={style.headerMenuLink} to="/">
                  <div className={style.wrapperHeaderLogo}>
                    <img className={style.headerLogo} src={logo} alt="" />
                  </div>
                  <span className={style.logoText}>Event worldwide</span>
                </Link>

              </li>
              <li className={style.headerMenuItem}>
                {localStorage.Name ? (
                  <>
                    <Link onClick={() => logoutSession()} className={style.headerMenuLink}>
                      Logout
                    </Link>
                    <div onClick={() => showNavbar()} class={style.headerSandwich}>
                      <div ref={sandwitch_1} class={style.sandwichItem + ' ' + style.sandwith_1}></div>
                      <div ref={sandwitch_2} class={style.sandwichItem + ' ' + style.sandwith_2}></div>
                      <div ref={sandwitch_3} class={style.sandwichItem + ' ' + style.sandwith_3}></div>
                    </div>
                  </>
                ) : (
                  <>
                    <Link className={style.headerMenuLink} to="/signUp">
                      Sign Up
                    </Link>
                    <Link className={style.headerMenuLink} to="/signIn">
                      Sign In
                    </Link>
                  </>
                )}
              </li>
            </ul>
          </nav>
        </div>
        {localStorage.Name ? <div ref={menuNav} className={style.menuNav}>
          <div className={style.menuNavItem}>
            <Link className={style.headerMenuLink} to="/personalArea">
              Личный кабинет
            </Link>
          </div>
          <div className={style.menuNavItem}>
            <Link className={style.headerMenuLink} to="/search">
              Поиск событий
            </Link>
          </div>
          <div className={style.menuNavItem}>
            <Link className={style.headerMenuLink} to="/quicksearch">
              Быстрый поиск
            </Link>
          </div>
          <div className={style.menuNavItem}>
            <Link className={style.headerMenuLink} to="/events">
              Мои события
            </Link>
          </div>
          <div className={style.menuNavItem}>
            <a target="_blank" ClassName={style.headerMenuLink + ' ' + style.headerMenuLinkTelegram} href="https://t.me/event_worldwideBot">
              <span className={style.telegramBot}>Бот</span>
              <div className={style.telegramBlock}>
                <img className={style.telegramIcon} src={telegram} alt="telegram" />
              </div>
            </a>
          </div>
        </div> : console.log()}
      </header>
    </>
  );
}

export default Header;
