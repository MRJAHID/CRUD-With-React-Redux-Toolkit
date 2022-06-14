import React from 'react'
import { useSelector } from 'react-redux'

export default function BooksView() {
    const books = useSelector(state => state.booksReducer.books)
    console.log(books)
    
  return (
    <div>
        <h2>List Of Books</h2>
    </div>
  )
}
