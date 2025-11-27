

import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"
import "./Navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    const closeMenu = () => setIsOpen(false)

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Our Approach", href: "#approach" },
        { name: "Focus", href: "#focus" },
        { name: "How We Work", href: "#how-we-work" },
        { name: "Corporate Involvement", href: "#corporate-involvement" },
        { name: "Collaborators", href: "#collaborators" },
        { name: "Needing Help", href: "#help" },
    ]

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div className="navbar-logo">
                    <img src="/womanara-logo.webp" onClick={closeMenu} />
                </div>

                {/* Hamburger Menu Icon */}
                <div className="navbar-toggle" onClick={toggleMenu}>
                    {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                </div>

                {/* Navigation Links */}
                <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
                    {navLinks.map((link) => (
                        <li key={link.name} className="navbar-item">
                            <a href={link.href} className="navbar-link" onClick={closeMenu}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
