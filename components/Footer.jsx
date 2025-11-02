import React from "react";
import logo from "../assets/logo.png"

export default function Footer() {
    return (
        <footer>
            <div className = "footer-column">
                <h3>Технічна підтримка</h3>
                <ul>
                    <li>
                        <label>Пошта:</label>
                        <a href="mailto:support.web@kyivcity.gov.ua">support.web@kyivcity.gov.ua</a>
                    </li>
                    <li>
                        <label>Телефон:</label>
                        <a href = "tel:(044) 366-80-13">(044) 366-80-13</a>
                    </li>
                </ul>
            </div>

            <img src = {logo} alt = "logo" />

            <div className = "footer-column">
                <h3>Контакти</h3>
                <ul>
                    <li>
                        <label>Адреса:</label>
                        <p>01010, м. Київ, вул. М. Омеляновича-Павленка, 15</p>
                    </li>
                    <li>
                        <label>Телефон:</label>
                        <a href = "tel:+38 (44) 254-40-55">+38 (44) 254-40-55</a>
                    </li>
                    <li>
                        <label>Пошта:</label>
                        <a href="mailto:rda.pecherska@kyivcity.gov.ua">rda.pecherska@kyivcity.gov.ua</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}