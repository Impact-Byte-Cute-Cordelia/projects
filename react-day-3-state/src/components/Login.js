import React, { useState } from 'react'

export default function Login() {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  })

  const handleChange = (event) => {
    setLogin({
      [event.target.name]: event.target.value
    })

    console.log(login)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(login)

    setLogin({
      username: "",
      password: ""
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={login.username} onChange={handleChange} />
        <input type="text" name="password" value={login.password} onChange={handleChange} />
        <button>Login</button>
      </form>
    </div>
  )
}
