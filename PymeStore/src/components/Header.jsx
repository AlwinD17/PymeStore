import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../styles/Header.css'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.scrollY;
            if (scrollTop > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={isScrolled ? 'scrolled-header' : 'default-header'}>
                <div className='title'>
                    <Link className='title-link' to="/">
                        <h1>PymeStore</h1>
                    </Link>
                </div>
                {!isScrolled ? (
                    <nav className="nav-container">
                        <NavLink className="link" to="/">
                            Home
                        </NavLink>
                        <NavLink className="link" to="/gestor">
                            Mi Tienda
                        </NavLink>
                        <NavLink className="link" to="/about_us">
                            Sobre Nosotros
                        </NavLink>
                        <NavLink className="link" to="/contacto">
                            Contacto
                        </NavLink>
                    </nav>
                ) : null}
            </div>
        </>
    );
}

export default Header;