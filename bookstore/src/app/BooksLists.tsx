import React from 'react'
import { Book } from './book.interface';


async function getBooks() : Promise<Book[]> {

    return fetch('http://localhost:3000')
    .then(res => {
        if (!res.ok) {
            throw new Error(res.statusText)
        }
        return res.json() as Promise<Book[]>
    })
}

const BooksLists = async () => {

    const books = await getBooks();
    // console.log('hello', books)
  return (
    <>
        {books.map((book) => {
            <div key={book.publication_year}>
                <h3>{book.title}</h3>
            </div>
        })}
    </>
  )
}

export default BooksLists
