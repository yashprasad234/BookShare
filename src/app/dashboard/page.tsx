import React from 'react'
import SearchBar from '../components/SearchBar'
import BookGrid from './BookGrid'

interface Book {
  id: number,  
  title: string;
    author: string;
    genre: number[];
    city: string;
    coverImg:"";
    availableIn: number;
}

const books: Book[] = [
    {
      id: 1,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      genre: [2, 6],
      city: "Mumbai",
      coverImg:"",
      availableIn: 7,
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      genre: [9, 1],
      city: "Delhi",
      coverImg:"",
      availableIn: 10,
    },
    {
      id: 3,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      genre: [4, 0],
      city: "Bangalore",
      coverImg:"",
      availableIn: 14,
    },
    {
      id: 4,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      genre: [8, 1],
      city: "Kolkata",
      coverImg:"",
      availableIn: 12,
    },
    {
      id: 5,
      title: "The Da Vinci Code",
      author: "Dan Brown",
      genre: [2, 6, 8],
      city: "Chennai",
      coverImg:"",
      availableIn: 5,
    },
    {
      id: 6,
      title: "Educated",
      author: "Tara Westover",
      genre: [7, 1],
      city: "Pune",
      coverImg:"",
      availableIn: 9,
    },
    {
      id: 7,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: [0, 15],
      city: "Hyderabad",
      coverImg:"",
      availableIn: 6,
    },
    {
      id: 8,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: [0, 14, 15],
      city: "Ahmedabad",
      coverImg:"",
      availableIn: 11,
    },
    {
      id: 9,
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      genre: [9, 10],
      city: "Jaipur",
      coverImg:"",
      availableIn: 8,
    },
    {
      id: 10,
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: [0, 10, 14],
      city: "Surat",
      coverImg:"",
      availableIn: 7,
    },
    {
      id: 11,
      title: "1984",
      author: "George Orwell",
      genre: [0, 5, 6],
      city: "Lucknow",
      coverImg:"",
      availableIn: 5,
    },
    {
      id: 12,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: [4, 14, 0],
      city: "Indore",
      coverImg:"",
      availableIn: 15,
    },
    {
      id: 13,
      title: "Becoming",
      author: "Michelle Obama",
      genre: [7],
      city: "Bhopal",
      coverImg:"",
      availableIn: 13,
    },
    {
      id: 14,
      title: "Dune",
      author: "Frank Herbert",
      genre: [5, 4],
      city: "Nagpur",
      coverImg:"",
      availableIn: 10,
    },
    {
      id: 15,
      title: "Dracula",
      author: "Bram Stoker",
      genre: [11, 2],
      city: "Patna",
      coverImg:"",
      availableIn: 6,
    },
    {
      id: 16,
      title: "Diary of a Wimpy Kid",
      author: "Jeff Kinney",
      genre: [16, 12],
      city: "Amritsar",
      coverImg:"",
      availableIn: 4,
    },
    {
      id: 17,
      title: "Bhagavad Gita",
      author: "Vyasa",
      genre: [18, 10],
      city: "Varanasi",
      coverImg:"",
      availableIn: 20,
    },
    {
      id: 18,
      title: "The Art of War",
      author: "Sun Tzu",
      genre: [10, 8],
      city: "Chandigarh",
      coverImg:"",
      availableIn: 5,
    },
    {
      id: 19,
      title: "Steve Jobs",
      author: "Walter Isaacson",
      genre: [7, 1],
      city: "Thane",
      coverImg:"",
      availableIn: 10,
    },
    {
      id: 20,
      title: "Ikigai",
      author: "Héctor García",
      genre: [9, 10],
      city: "Noida",
      coverImg:"",
      availableIn: 8,
    },
  ];

export default function Dashboard() {
  return (
    <div className='flex flex-col items-center gap-4 py-4' >
        {/* Search bar here */}
        <SearchBar />
        {/* Books here in a grid 4 in xl 3 in lg 2 in medium 1 in small */}
        <BookGrid books={books} />
    </div>
  )
}
