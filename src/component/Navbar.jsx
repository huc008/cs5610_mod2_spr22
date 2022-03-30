import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            This is my Navbar
            <Link to={"/"}>Incrementer!</Link>
            <Link to={"/about"}>About!</Link>
        </div>
    )
}