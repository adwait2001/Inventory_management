import { createUserWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import {auth} from './firebase'

const Signup = () => {

    const [email, setemail] = useState();
    const [password, setpassword] = useState();

    const register = async () => {
        try {
            console.log("in")
            const user =await createUserWithEmailAndPassword(auth,email,password);
            document.location.href = "/";
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <div>
                <h3>Register User</h3>
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
                <button onClick={register} className=" btn btn-primary">Submit</button>
        </div>
    );
}

export default Signup;
