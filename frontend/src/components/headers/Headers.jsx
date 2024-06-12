import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi'; // Import BiMenu
import logo from '../../assets/images/logo.png';
import userImg from '../../assets/images/avatar-icon.png';

const navlinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find a Doctor'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
  },
  {
    path: '/medicine',
    display: 'Medicine '
  },

  {
    path: '/post',
    display: 'Post '
  },
  
];

const Headers = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null);
  
  
  const handleStickyHeader = ()=>{


      window.addEventListener('scroll',()=>{
        if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
          headerRef.current.classList.add('sticky_header')
        }
        else{
          headerRef.current.classList.remove('sticky_header')

        }
      })  
  }


  const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu')

  useEffect(()=>{
    handleStickyHeader()
    return ()=> window.removeEventListener('scroll',handleStickyHeader)
  })


  const [activeIndex, setActiveIndex] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const pathname = window.location.pathname;
    const index = navlinks.findIndex(link => link.path === pathname);
    setActiveIndex(index);
  }, []);

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="Logo" />
          </div>
          {/*=========================Menu===============================*/}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul ref={navRef} className="menu flex items-center gap-[2.7rem]">
              {navlinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    activeClassName="active"
                    isActive={() => activeIndex === index}
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/*=========================== NAV RIGHT=========================== */}
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to='/'>
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={userImg} className="w-full rounded-full" alt="" />
                </figure>
              </Link>
            </div>
            <Link to='/login'>
            <button className="bg-primaryColor py-2 px-6 text-white font-semibold h-12 flex items-center justify-center rounded-full hover:bg-primaryColorDark">
  Login
</button>

         
            </Link>
            

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer hover:text-primaryColor" />
            </span>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Headers;
