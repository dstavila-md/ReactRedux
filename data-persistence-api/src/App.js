import { useState } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', { title });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const editBookById = (id, title) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
