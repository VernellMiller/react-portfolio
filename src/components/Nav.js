import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="nav">

            <Link to="/">
                <div>Vernell Miller</div>
            </Link>

            <Link to="/resume">
                <div>Resume</div>
            </Link>

        </div>
    );
};

export default Nav;