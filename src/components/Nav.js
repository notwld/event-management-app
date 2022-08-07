import React,{useState} from 'react'
import { BrowserRouter as Router, Route, Routes,Link,useNavigate } from 'react-router-dom'
import App from '../App';
import Create from './Create';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import axios from 'axios';

export default function Nav() {
  let e = localStorage.getItem('id') 
  const [id, setId] = useState(e);
  // const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    const data = await axios.get('http://localhost:3000/user/logout')
    .then(res => {
        console.log(res.data);
        localStorage.removeItem('id');
        window.location.href = '/';
        setId(null);
    }
    );
}

  return (
    <Router>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Event Management System</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
             {id ? <Link to="/create" className="nav-link">Create</Link> : ""}
        </li>
        <li className="nav-item">
              {id ? <a onClick={handleLogout} className="nav-link" style={{background:'none'}}>Logout</a> :  <Link to="/login" className="nav-link active">Login</Link>}
        </li>
        <li className="nav-item">
              {id ? "" : <Link to="/signup" className="nav-link active">Signup</Link>}
        </li>
      </ul>
      <form className="d-flex">
        {/* <a class="navbar-brand" href="#">
            <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" />
        </a> */}
      </form>
    </div>
  </div>
</nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login id={id}/>}/>
          <Route path="/create" element={<Create id={id}/>}/>
          <Route path="/signup" element={<Signup id={id}/>}/>
          
        </Routes>
    </Router>
  )
}
