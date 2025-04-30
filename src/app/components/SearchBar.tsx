import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <form className="w-1/2">
      <div className="flex gap-4 p-2 border-1 rounded-full w-full" >
        <label htmlFor="search">
          <Search />
        </label>
        <input
          placeholder="Looking for a book? Try title, author, genre or city"
          type="text"
          id="search"
          className="w-full outline-none"
        />
      </div>
    </form>
  );
}
