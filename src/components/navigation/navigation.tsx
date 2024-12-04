import { FunctionComponent, useEffect, useState } from "react";
import styles from "./navigation.module.css";
import burgerMenuIcon from "./burger-menu.svg";
import closeIcon from "./close.svg";


export const Navigation: FunctionComponent = () => {
    const [burgerMenu, setBurgerMenu] = useState<boolean>(false);
    const [burgerClick, setBurgerClick] = useState<boolean>(false);

    const handleBurgerClick = () => {
        setBurgerClick(!burgerClick);
    }

    useEffect(() => {
        const handleResize = () => {
            window.innerWidth < 550 ? setBurgerMenu(true) : setBurgerMenu(false);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
        <nav className={styles.nav}>
            <img src="./images/logo.svg" />

            {burgerMenu && <button onClick={handleBurgerClick} className={styles.burger__button}><img src={burgerClick ? closeIcon : burgerMenuIcon} alt="burgerMenu" /></button>}

            {(!burgerMenu || burgerClick) && <ul className={burgerMenu ? styles.nav__burgerMenu : styles.nav__breadcrumbs}>
                <li>
                    <a href="#about">Обо&nbsp;мне</a>
                </li>
                <li>
                    <a href="#skills">Навыки</a>
                </li>
                <li>
                    <a href="#portfolio">Портфолио</a>
                </li>
                <li>
                    <a href="#contacts">Контакты</a>
                </li>
            </ul>}
        </nav>
    )
}