import React from 'react'
import { useLoaderData } from 'react-router-dom'

const UserDetails = () => {
    const {name} = useLoaderData();
    console.log(name)
  return (
    <div>{name ? name : <p>USer Not Found</p>}</div>
  )
}

export default UserDetails