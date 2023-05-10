'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

function SearchBar () {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    const encodedSearchQuery = encodeURI(query)
    router.push(`/search/${encodedSearchQuery}`)
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
