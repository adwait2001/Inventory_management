import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from './AuthContext'

const Header = () => {
    const { currentUser, logout } = useAuth();
    async function Loggedout() {
        try {
            await logout()
            document.location.href = "/";
        } catch {
            //
        }
    }

    const SignIn = () => {
        document.location.href = "/SignIn";
    }

    const Register = () => {
        document.location.href = "/signup";
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">Inventory Application</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Products</Link>
                        </li>

                        {
                            currentUser ?
                                <div className="d-flex">
                                    <li className="navbar-item">
                                        <Link to="/create" className="nav-link">Create Product</Link>
                                    </li>
                                    <li className="navbar-item mt-2 mx-2">
                                    <h5>Hello {currentUser.email}</h5>
                                    </li>
                                    <li className="navbar-item">
                                    <button onClick={Loggedout} className="btn btn-success mx-4">LOGOUT</button>
                                    </li>
                                </div> :
                                <li>
                                    <button onClick={SignIn} className="btn btn-primary mx-3">
                                        Signin
                                    </button>
                                    <button onClick={Register} className="btn btn-secondary">
                                        Register
                                    </button>
                                </li>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;
