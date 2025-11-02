import React from "react";
import logo from "../assets/logo.png"

export default function Header() {
    return (
        <header>
            <img src = {logo} alt = "logo" />
            <h1>Печерська районна адміністрація</h1>

            <div className = "profile-buttons">
                <button>Зареєструватися</button>
                <button>Увійти</button>
            </div>
        </header>
    );
}