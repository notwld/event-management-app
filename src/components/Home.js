import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const [event, setEvent] = useState([]);
  const handleCreate = (e) => {
    e.preventDefault();
    navigate('/create')
  }
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3000/event/')
      .then(res => {
        setEvent(res.data);
      }
      ).catch(err => {
        console.log(err);
      }
      );
    }
    fetchData();
  }, []);


  return (
    <div className='container'>
      <h1 className='display-1 text-center text-light'>Events</h1>
      <div class="container mt-5">
      <div class="row">
      {event.length!==0?event.map(event => {
          return (
            <div className='col'>
              <div class="card" style={{maxHeight:250,maxWidth:250}}>
              <div class="card-header text-dark text-start">
                {event._id}
              </div>
              <div class="card-body text-dark text-start">
                <h5 class="card-title text-dark text-start">{event.title}</h5>
                <p class="card-text text-dark text-start">{event.description}</p>
                <p class="card-text text-dark text-start">{event.location}</p>
                <p class="card-text text-dark text-start">{event.date}</p>
              </div>
            </div>
            <br/>
            </div>
          )
        }
        ):<div className='container'>
          <h2 className='text-center text-light'>No Events</h2><br/>
          <a className='btn btn-sm btn-primary' onClick={handleCreate}>Create Event</a>
        </div>
        }
    
  </div>
</div>
      </div>
  )
}
