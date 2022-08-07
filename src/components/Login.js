import React,{useState} from 'react'
import { BrowserRouter as Router, Route, Routes,Link ,useNavigate} from 'react-router-dom'
import axios from 'axios';
import Flash from './Flash';

export default function Login(props) {
    const [flash, setFlash] = useState(false);
    let e = localStorage.getItem('id') || props.id;
    const [id, setId] = useState(e);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        
        e.preventDefault();
        let credentials = document.querySelectorAll('.credentials');
        let email = credentials[0].value;
        let password = credentials[1].value;

        if( !email || !password ){
            setFlash(true);
        }
        
        const data = await axios.post('http://localhost:3000/user/login', {
            email,
            password
        })
        .then(res => {
           
            console.log(res.data);
            setId(localStorage.setItem('id', res.data.user._id));
            window.location.href = '/';
            setFlash(false);
            
        })
        .catch(err => {
            console.log(err);
            if (err.code === 'ERR_BAD_REQUEST') {
                setFlash(true);
            }
            setFlash(true);
        }
        );

        
        
    }
    return (
        <>
        {flash?<Flash type='danger' msg='Please check ur credential' />:null}
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
        </>
    )
}
