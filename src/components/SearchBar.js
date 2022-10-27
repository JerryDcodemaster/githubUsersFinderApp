import React, { useState } from 'react'
import Card from './Card'

const SearchBar = () => {
  const [text, setText] = useState("")
  const [users, setUsers] = useState([])

  const onSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.github.com/users?q=${text}`)
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => console.error(err))
  }
    

  return (
    <div className="container-fluid">
      <form onSubmit={onSubmit} className='p-4 mb-5'>
        <input 
            className="form-control"
            type="text"
            placeholder="Search Users..."
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
        />
        <br />
        <div className="d-grid">
          <button className="btn btn-dark set">Search</button>
        </div>
    </form>
        {users.map(({ avatar_url, login, id, followers_url, url }) => 
          <Card 
            key={id} 
            img={avatar_url} 
            name={login} 
            id={id}
            followers={followers_url}
            link={url}
          />
        )}
    </div>
  )
}

export default SearchBar