import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function DigimonList() {
  const [digimons, setDigimons] = useState([])

  useEffect(() => {
    axios.get("https://digimon-api.herokuapp.com/api/digimon")
    .then(result => {
      console.log(result.data)
      setDigimons(result.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  console.log(digimons)
  return (
    <div>
      <h1>My Digimon</h1>
      {digimons.map((item, index) => {
        if (index < 20){
          return (
            <li key={index}>
              {index + 1}. {item.name}
              <img src={item.img}></img>
            </li>
          )
        }
      })}
    </div>
  )
}
