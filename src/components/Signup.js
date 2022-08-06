import React from 'react'

export default function Signup() {
  return (
    <div className='container mt-5'>
    <h1 className='display-1 text-center text-light'>Signup</h1>
    <form className='mt-3 d-flex flex-column align-items-center justify-content-center'>
        <div class="mb-3 flex-start">
            <input type="text" class="form-control"placeholder='Enter Your Name.'/>
        </div>
        <div class="mb-3 flex-start">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email.'/>
        </div>
        <div class="mb-3 flex-start">
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Enter Password' />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}
