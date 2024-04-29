import { fetchBooks } from "@/lib/data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Book } from "@/lib/definitions";

export default async function BookTable() {
  const books : Book[] = await fetchBooks();

  if (!books) {
    return <div>Error fetching books. Please try again later.</div>;
  }

  return (
    <>
      <Table className="w-full overflow-auto">
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>publication year</TableHead>
            <TableHead>genre</TableHead>
            {/* Add more table headers as needed */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.title}>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.author || '—'}</TableCell>
              <TableCell>{book.publication_year || '—'}</TableCell>
              <TableCell>{book.genre || '—'}</TableCell>
              {/* Add more table cells for other book properties */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}