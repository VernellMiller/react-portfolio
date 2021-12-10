import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="nav">
            <nav class="navbar navbar-light bg-light">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link to="/" class="text-decoration-none">
                            <span class="navbar-brand mb-0 h1">VERNELL</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio" class="text-decoration-none">
                            <div>Portfolio</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/resume" class="text-decoration-none">
                            <div>Resume</div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;