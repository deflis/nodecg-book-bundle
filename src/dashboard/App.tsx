import React, { useCallback, useState } from "react";

import {
  createMuiTheme,
  IconButton,
  List,
  ThemeProvider,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

import { AddBookByIsbn } from "../components/panel/AddBookByIsbn";
import { BookRender } from "../components/panel/BookRender";
import { ListItemOfBooks } from "../components/panel/ListItemOfBooks";
import Book, { useBook } from "../replicants/book";
import { BookEdit } from "../components/panel/BookEdit";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useToggle } from "react-use";
import { useBooks } from "../replicants/books";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const SelectedItem = styled("div")({
  display: "flex",
  flex: "column",
  height: "120px",
  overflow: "auto",
  "& > * > *": {},
});

const ListOfBooks = styled("div")({
  maxHeight: "calc(100vh - 120px)",
  overflow: "auto",
});

export const App: React.FC = () => {
  const [book, setBook] = useBook();
  const [books, setBooks] = useBooks();
  const [editIndex, setEditIndex] = useState<number>();

  const handleAdd = useCallback(
    (item: Book) => {
      setBooks((books ?? []).concat([item]));
    },
    [books, setBooks]
  );

  const handleDelete = useCallback(() => {
    setBook(undefined);
  }, [setBook]);

  const handleDeleteBookItem = useCallback(
    (_, key: number) => setBooks(books.filter((_, i) => i !== key)),
    [books, setBooks]
  );
  const handleSelect = useCallback((item: Book) => setBook(item), [setBook]);
  const handleEdit = useCallback((_, key: number) => setEditIndex(key), [
    setEditIndex,
  ]);

  const handleEditorUpdate = useCallback(
    (item, key) => {
      const x = [...books];
      x.splice(key, 1, item);
      setBooks(x);
    },
    [books, setBooks]
  );
  const handleEditorClose = useCallback(() => setEditIndex(undefined), [
    setEditIndex,
  ]);

  const [openAdd, toggleOpenAdd] = useToggle(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <SelectedItem>
        <div>
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </div>
        <div>
          <BookRender item={book} />
        </div>
        <div>
          <IconButton onClick={toggleOpenAdd}>
            <AddBoxIcon />
          </IconButton>
        </div>
      </SelectedItem>
      <ListOfBooks>
        <List>
          {(books ?? []).map((item, i) => (
            <ListItemOfBooks
              key={i}
              index={i}
              item={item}
              selected={item.isbn === book?.isbn}
              onDelete={handleDeleteBookItem}
              onEdit={handleEdit}
              onSelect={handleSelect}
            />
          ))}
        </List>
      </ListOfBooks>
      <AddBookByIsbn open={openAdd} onAdd={handleAdd} onClose={toggleOpenAdd} />
      <BookEdit
        index={editIndex}
        item={editIndex !== undefined ? books[editIndex] : undefined}
        onUpdate={handleEditorUpdate}
        onClose={handleEditorClose}
      />
    </ThemeProvider>
  );
};
