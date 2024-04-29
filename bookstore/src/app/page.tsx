import BooksLists from "./BooksLists";
import { Book } from './book.interface';

async function getBooks(): Promise<Book[]> {

  return fetch('http://localhost:3000')
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json() as Promise<Book[]>
    })
}


export default async function Home() {
  const books = await getBooks();
  return (
    <main>
      <h2>BookSotre</h2>
      <>
        {books.map((book) => {
          <p>{book.genre}</p>
        })}
      </>
    </main>
  );
}
