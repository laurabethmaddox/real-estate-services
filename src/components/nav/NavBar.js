import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/realtors">Realtors</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/clients">Clients</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/desires">Desires</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="#"
                    onClick={
                        () => {
                            localStorage.removeItem("realestate_client")
                        }
                    }>
                    Logout
                </Link>
            </li>
        </ul>
    )
}