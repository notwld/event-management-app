import React from 'react'

export default function Flash(props) {
  return (
    <div>
        <div className={`alert alert-${props.type} alert-dismissible fade show text-start`} role="alert">
            <strong>Error!</strong> {props.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}
