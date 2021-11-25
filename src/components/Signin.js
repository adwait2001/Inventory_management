import React, { useState } from 'react';
import {useAuth} from './AuthContext'

const Signin = () => {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const {login}=useAuth();

    const LoggedIn = async () => {
        try {
            await login(email,password);
            document.location.href = "/";
        } catch (error) {
            alert("Enter Valid Credentials");
        }
    };
    return (
        <div>
                <h3>Log In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input className="form-control" placeholder="Username..." onChange={(event) => {
                        setemail(event.target.value)
                    }} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input className="form-control" type="password" placeholder="Password..." onChange={(event) => {
                        setpassword(event.target.value)
                    }} />
                </div>
                <button onClick={LoggedIn} className=" btn btn-primary">Submit</button>
        </div>
    );
}

export default Signin;

