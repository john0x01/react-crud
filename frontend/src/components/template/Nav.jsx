import './Nav.css'
import NavItem from './NavItem'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem nav="/" title="Home" icon="home"/>
            <NavItem nav="/users" title="Users" icon="users"/>
        </nav>
    </aside>