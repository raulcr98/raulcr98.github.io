import React from 'react'

import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <h1><Link to="">raulcr98</Link></h1>
            <nav>
                <a href="mailto://rahulrcr98@gmail.com">Contact</a>
                <Link to="/blog">Blog</Link>
                <Link to="/projects">Projects</Link>
            </nav>
        </header>
    )
}
