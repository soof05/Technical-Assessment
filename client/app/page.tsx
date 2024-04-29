import Image from "next/image";
import { BookTable } from "./components/dashboard";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 gap-14">
        <BookTable />
    </main>
  );
}