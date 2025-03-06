import { useState } from "react";

import BookEdit from "./BookEdit";

function BookShow({book, onEdit, onDelete}) {

  const [edit, showEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  }

  const handleEditClick = ()=>{
    showEdit(!edit);
  }

  const handleSubmit = (id, title)=>{
    onEdit(id, title);
    showEdit(false);
  }

  let content = <h3>{book.title}</h3>;
  if(edit){
    content = <BookEdit onSubmit={handleSubmit} book={book}/>;
  }

  return (
    <div className="book-show">
    <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`}></img>
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
