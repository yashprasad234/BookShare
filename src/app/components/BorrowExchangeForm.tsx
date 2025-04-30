"use client";
import { useState, useEffect } from "react";

export default function BorrowExchangeForm() {
  const [isReadyToExchange, setReadyToExchange] = useState(false);
  const [myBooks, setMyBooks] = useState<Book[]>([]);

  const handleChange = () => {
    setReadyToExchange(!isReadyToExchange);
  };

  useEffect(() => {});

  return (
    <div className="border-1 px-8 py-12 rounded-2xl">
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 w-full">
          <label>
            How many days would you like to borrow/exchange the book for
          </label>
          <input required type="number" className="outline px-4 py-2" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="exchange">
            Do you want to exchange this book for one of your own
          </label>
          <select
            name="exchange"
            id="exchange"
            className="outline-1 px-4 py-2"
            onChange={handleChange}
          >
            <option value="No" defaultChecked>
              No
            </option>
            <option value="Yes">Yes</option>
          </select>
        </div>
        {isReadyToExchange && (
          <div className="flex flex-col gap-2">
            <label htmlFor="exchange">
              Do you want to exchange this book for one of your own
            </label>
            <select
              name="exchange"
              id="exchange"
              className="outline-1 px-4 py-2"
              onChange={handleChange}
            >
              {myBooks.map((book, i) => (
                <option key={i} value={book.title}>
                  {book.title}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="flex flex-col gap-2 w-full">
          <label>
            Any message?
          </label>
          <input maxLength={100} type="text" className="outline px-4 py-2 overflow-y-auto overflow-x-hidden h-content" />
        </div>
        <button className="border outline bg-black text-white hover:bg-white hover:text-black px-4 py-2 mt-4 w-full">
          Signup
        </button>
      </form>
    </div>
  );
}
