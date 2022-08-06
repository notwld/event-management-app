import React from 'react'
import axios from 'axios';

export default function Create() {
  const handleCreate = async (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const location = document.querySelector('#location').value;
    let date = document.querySelector('#date').value;
    // date = new Date(date).getDate();
    const data = await axios.post('http://localhost:3000/event/create', {
      title,
      description,
      location,
      date,   
    })
    .then(res => {
      //navigate to home page
      console.log(res.data);
      window.location.href = '/';
      localStorage.setItem('id', res.data.event._id);
    }
    ).catch(err => {
      console.log(err);
    });
  }

  return (
    <div className='container mt-5 d-flex flex-column align-items-center justify-content-center'>
    <h1 className='display-1 text-center text-light'>Create Event</h1>
    <form className='mt-3 d-flex flex-column align-items-start justify-content-center'>
        <div class="mb-3 flex-start">
            <input type="email" class="form-control" id='title' placeholder='Enter Title.'/>
        </div>
        <div class="mb-3 flex-start">
            <textarea type="text" class="form-control" id='description' placeholder='Enter Description' rows={5} cols={30}></textarea>
        </div>
        <div class="mb-3 flex-start">
            <input type="text" class="form-control" id='location' placeholder='Enter Location.'/>
        </div>
        <div class="mb-3 flex-start">
            <input type="date" id="date" class="form-control"/>
        </div>
        <button onClick={handleCreate} type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
  )
}

// title: { type: String, required: true },
//     description: { type: String, required: true },
//     date: { type: Date, required: true , default: Date.now },
//     location: { type: String, required: true, default: 'Karachi' },
//     createdBy: { type: ObjectId, ref: 'User' },