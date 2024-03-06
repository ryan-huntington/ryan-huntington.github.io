import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './Navbar.css'
import React from "react";
import {FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa"

function Navbar (props){
    
    return(
        <nav className="navbar">
            <div className="pages">
                {props.items.map( (item, i)  => (
                    <CustomLink 
                    to={item.to} 
                    key={item.text}
                    i={i}
                    item={item}
                    title={item.text}
                    onClick={() => props.changeActiveNavItem(i)}
                    >
                        {item.text}
                    </CustomLink>
                ))}
                <div className="nav-item-highlighter" />
            </div>
            
            <ul className="social-container">
                <li>
                    <a href="https://www.instagram.com/ryan.huntington/"
                        className="insta social"
                        target="_blank"
                        rel="noreferrer"
                        title="Follow me on Instagram"
                        >
                            <FaInstagram />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/ryan-huntington"
                        className="github social"
                        target="_blank"
                        rel="noreferrer"
                        title="Follow me on GitHub"
                        >
                            <FaGithub />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/ryan-huntington/"
                        className="linkedin social"
                        target="_blank"
                        rel="noreferrer"
                        title="Follow me on LinkedIn"
                        >
                            <FaLinkedin />
                    </a>
                </li>
            </ul>
        </nav>
    )

}
export default Navbar;

function CustomLink({to, children, item, i, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <Link 
            to={to}
            {...props} 
            className={`nav-item item-${i} ${isActive ? "active" : ""} `}
        >
            <span className="icon">
                {item.icon}
            </span>
            <span className="nav-item-text">
                { children }
            </span>
        </Link>
    )
}