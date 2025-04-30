import PropTypes from 'prop-types';
import Book from '../components/Book';

interface Book {
    id: number;
    title: string;
    author: string;
    genre: number[];
    city: string;
    coverImg: string;
    availableIn: number;
}

export default function BookGrid({books}: {books: Book[]}) {
    
  return (
    <div className='grid grid-cols-12' >
        {books.map(({id, title, author, genre, coverImg, availableIn}, i) => 
            <div key={i} className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3' >
                <Book id={id} title={title} author={author} genre={genre} coverImg={coverImg} availableIn={availableIn} />
            </div>
        )}
    </div>
  )
}

BookGrid.PropTypes = {
    books: PropTypes.array.isRequired,
}