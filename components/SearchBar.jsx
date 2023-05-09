'use client'
import { useState } from 'react'

function SearchBar () {
  const [query, setQuery] = useState('')
  // const [token, setToken] = useState(null)

  // useEffect(() => {
  //   const getToken = async () => {
  //     return await fetch('/api/token')
  //       .then(res => res.json())
  //       .then(data => {
  //         setToken(data.access_token)
  //       })
  //   }
  //   getToken()
  // }, [])

  const getSearch = async () => {
    return await fetch(`/api/search?q=${query}`)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  // TODO: Implement search functionality
  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(query)
    getSearch()
  }

  const handleChange = e => {
    setQuery(e.target.value)
  }

  return (
    <form className='m-4' onSubmit={handleSubmit}>
      <input key='search-bar' value={query} onChange={handleChange} placeholder='Chocolate' className='border-2 p-2' />
      <button type='submit' onClick={handleSubmit}>Search</button>
    </form>
  )
}

export default SearchBar
