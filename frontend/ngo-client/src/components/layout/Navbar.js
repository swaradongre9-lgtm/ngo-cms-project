import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('access_token');

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
            <div className="container">
                <Link className="navbar-brand fw-bold fs-2" to="/">
                    ❤️ NGO CMS
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link fw-semibold" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link fw-semibold" to="/media">Media</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-semibold" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-semibold" to="/projects">Projects</Link>
                        </li>
                        {isLoggedIn ? (
                            <li className="nav-item">
                                <button className="nav-link btn btn-link text-white fw-semibold" onClick={handleLogout}>
                                    Logout
                                </button>
                            </li>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link fw-semibold" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link btn btn-success text-white px-3 fw-semibold" to="/register">
                                        Register
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;