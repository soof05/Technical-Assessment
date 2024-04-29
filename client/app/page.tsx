import Image from "next/image";
import BookTable from "./components/dashboard/booksTable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
        <BookTable />
  
    </main>
  );
}
