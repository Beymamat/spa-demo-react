import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo left">
                        React App
                    </a>
                    <ul id="nav-mobile" className="right hide1-on-med-and-down">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/movies">Movies</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
