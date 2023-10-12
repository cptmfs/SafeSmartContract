import React from 'react'

function User(props) {
  return (
    <div>
    <div>Name : {props.name}</div>
    <div>Surname : {props.surname}</div>
    <div>Age : {props.age}</div>
    </div>
  )
}

export default User;