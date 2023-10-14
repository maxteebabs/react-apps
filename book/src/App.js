import './App.css';
import BookSearch from './components/Book/Books';
import bookData from  "./books.json";

function App() {
  const books = bookData;

  return (
    <>
      <BookSearch books={books} />
    </>
  );
}

export default App;
