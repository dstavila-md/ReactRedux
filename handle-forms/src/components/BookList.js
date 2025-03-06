import BookShow from "./BookShow";

function Booklist({books}) {

  const renderedBooks = books.map((books)=>{
    return (
      <BookShow key={books.id} book={books} />
    );
  })

  return (
    <div className="book-list">
      {renderedBooks}
    </div>
  );
}

export default Booklist;
