import React, {useState} from "react";

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleSubMenu = (e) => {
        e.preventDefault();
        setShowMenu(!showMenu);
    }
    return (
        <nav>
            <ul>
                <li>
                    <a href = "#">Головна</a>
                </li>
                <li>
                    <a href = "#" onClick = {toggleSubMenu}>Напрям діяльності</a>
                    {showMenu && (
                    <ul className = "subMenu" id = "activeSubmenu">
                        <li>
                            <a href = "activity.html">Напрям діяльності</a>
                        </li>
                        <li>
                            <a href = "#">Освіта</a>
                        </li>
                        <li>
                            <a href = "#">Культура</a>
                        </li>
                        <li>
                            <a href = "#">Екологія</a>
                        </li>
                        <li>
                            <a href = "#">Медицина</a>
                        </li>
                    </ul>
                    )}
                </li>
                <li>
                    <a href = "#">Зворотній зв'язок</a>
                </li>
            </ul>
        </nav>
    )
}