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

  let content = <h3>{book.title}</h3>;
  if(edit){
    content = <BookEdit onEdit={onEdit} book={book}/>;
  }

  return (
    <div className="book-show">
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
