import React from 'react'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import axios from 'axios';

export default function Login() {
    const handleLogin = async (e) => {
        e.preventDefault();
        const credentials = document.querySelectorAll('.credentials');
        const email = credentials[0].value;
        const password = credentials[1].value;
        const data = await axios.post('http://localhost:3000/user/login', {
            email,
            password
        })
        .then(res => {
            //navigate to home page
            console.log(res.data);
            localStorage.setItem('id', res.data.user._id);
            window.location.href = '/';
       
        })
        .catch(err => {
            console.log(err);
        }
        );


    }
    return (
        <div className='container mt-5'>
            <h1 className='display-1 text-center text-light'>Login</h1>
            <form className='mt-3 d-flex flex-column align-items-center justify-content-center'>
                <div class="mb-3 flex-start">
                    <input type="email" class="form-control credentials" id="exampleInputEmail1"aria-describedby="emailHelp" placeholder='Enter Email.'/>
                </div>
                <div class="mb-3 flex-start">
                    <input type="password" class="form-control credentials" id="exampleInputPassword1" placeholder='Enter Password' />
                </div>
                <button onClick={handleLogin} type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
