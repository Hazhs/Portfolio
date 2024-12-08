import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAddressCard, faHouseLaptop, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const Resizing = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', Resizing);
    return () => {
      window.removeEventListener('resize', Resizing);
    }
  }, [])

  const textNav1 = windowWidth < 1024 ? '' : 'Accueil';
  const textNav2 = windowWidth < 1024 ? '' : 'Profil';
	const textNav3 = windowWidth < 1024 ? '' : 'Travaux';
  const textNav4 = windowWidth < 1024 ? '' : 'Contact';

  const handleClick = (e) => {
    e.preventDefault();
    const mailToUrl = `mailto:${'alanseznec@outlook.com'}`;
    window.open(mailToUrl, '_blank')
  }

	return (
    <header>
      <nav>
        <NavLink to="/" className={({ isActive }) =>
            isActive ? 'nav-element active' : 'nav-element'}>
          <FontAwesomeIcon icon={faHouse} />
          {textNav1}
        </NavLink>
        <NavLink to="/about" className={({ isActive }) =>
            isActive ? 'nav-element active' : 'nav-element' }>
          <FontAwesomeIcon icon={faAddressCard} />
          {textNav2}
        </NavLink>
				<NavLink to="/project" className={({ isActive }) =>
            isActive ? 'nav-element active' : 'nav-element' }>
          <FontAwesomeIcon icon={faHouseLaptop} />
          {textNav3}
        </NavLink>
        <NavLink className={'nav-element contact'}
          to='#'
          onClick={handleClick}>
            <FontAwesomeIcon icon={faEnvelope} />
            {textNav4}
        </NavLink>
      </nav>
    </header>
  )
}