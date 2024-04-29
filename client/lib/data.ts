import { unstable_noStore as noStore } from 'next/cache';
import { Book } from './definitions';

export async function fetchBooks() {
    noStore();
    try { 
        const response = await fetch('http://localhost:3006');
        const data : Book[] = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch card data.');
    }
}
