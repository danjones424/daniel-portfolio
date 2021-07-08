import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-purple-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" 
                    exact
                    activeClassName="text-white" 
                    className="inline-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-pink-500 text-4xl font-bold cursive tracking-widest"
                    >
                        Daniel
                    </NavLink>
                    <NavLink to="/post" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 hover:text-pink-500"
                    activeClassName="text-blue-200 bg-blue-500"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-pink-500"
                    activeClassName="text-blue-200 bg-blue-500"
                    >
                        Projects
                    </NavLink>
                    <NavLink to="/about"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-pink-500"
                    activeClassName="text-blue-200 bg-blue-500"
                    >
                        About Me                    
                    </NavLink>

                </nav>
            </div>
            <div className="allign-content-center">
                <SocialIcon url="https://twitter.com/Daniel_Jones424" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                <SocialIcon url="https://www.instagram.com/daniel._.jones/twi" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                <SocialIcon url="https://github.com/danjones424" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
            </div>
        </header>
    )

}