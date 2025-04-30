
const genreTags = [
    { genre: "Fiction", tagColor: "bg-yellow-100", textColor: "text-yellow-800" },
    { genre: "Non-Fiction", tagColor: "bg-gray-100", textColor: "text-gray-800" },
    { genre: "Mystery", tagColor: "bg-purple-100", textColor: "text-purple-800" },
    { genre: "Romance", tagColor: "bg-pink-100", textColor: "text-pink-800" },
    { genre: "Fantasy", tagColor: "bg-indigo-100", textColor: "text-indigo-800" },
    { genre: "Science Fiction", tagColor: "bg-blue-100", textColor: "text-blue-800" },
    { genre: "Thriller", tagColor: "bg-red-100", textColor: "text-red-800" },
    { genre: "Biography", tagColor: "bg-emerald-100", textColor: "text-emerald-800" },
    { genre: "History", tagColor: "bg-orange-100", textColor: "text-orange-800" },
    { genre: "Self-Help", tagColor: "bg-teal-100", textColor: "text-teal-800" },
    { genre: "Philosophy", tagColor: "bg-lime-100", textColor: "text-lime-800" },
    { genre: "Horror", tagColor: "bg-gray-800", textColor: "text-gray-100" },
    { genre: "Comics", tagColor: "bg-rose-100", textColor: "text-rose-800" },
    { genre: "Poetry", tagColor: "bg-sky-100", textColor: "text-sky-800" },
    { genre: "Adventure", tagColor: "bg-amber-100", textColor: "text-amber-800" },
    { genre: "Drama", tagColor: "bg-fuchsia-100", textColor: "text-fuchsia-800" },
    { genre: "Children", tagColor: "bg-green-100", textColor: "text-green-800" },
    { genre: "Art", tagColor: "bg-cyan-100", textColor: "text-cyan-800" },
    { genre: "Religion", tagColor: "bg-stone-100", textColor: "text-stone-800" },
    { genre: "Education", tagColor: "bg-violet-100", textColor: "text-violet-800" },
  ];

  // const genreLookup = {
  //   0: "Fiction",
  //   1: "Non-Fiction",
  //   2: "Mystery",
  //   3: "Romance",
  //   4: "Fantasy",
  //   5: "Science Fiction",
  //   6: "Thriller",
  //   7: "Biography",
  //   8: "History",
  //   9: "Self-Help",
  //   10: "Philosophy",
  //   11: "Horror",
  //   12: "Comics",
  //   13: "Poetry",
  //   14: "Adventure",
  //   15: "Drama",
  //   16: "Children",
  //   17: "Art",
  //   18: "Religion",
  //   19: "Education",
  // };
  
  // const reverseGenreLookup = {
  //   "Fiction": 0,
  //   "Non-Fiction": 1,
  //   "Mystery": 2,
  //   "Romance": 3,
  //   "Fantasy": 4,
  //   "Science Fiction": 5,
  //   "Thriller": 6,
  //   "Biography": 7,
  //   "History": 8,
  //   "Self-Help": 9,
  //   "Philosophy": 10,
  //   "Horror": 11,
  //   "Comics": 12,
  //   "Poetry": 13,
  //   "Adventure": 14,
  //   "Drama": 15,
  //   "Children": 16,
  //   "Art": 17,
  //   "Religion": 18,
  //   "Education": 19,
  // };
  
export default function Tag({num}: {num: number}) {
  return (
    <div className={`px-2 py-1 ${genreTags[num].textColor} ${genreTags[num].tagColor} text-xs `} >{genreTags[num].genre}</div>
  )
}
