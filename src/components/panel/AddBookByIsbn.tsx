import React, { ChangeEvent, useCallback, useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  TextField,
} from "@material-ui/core";

import { openbd } from "../../openbd/openbd";
import Book from "../../replicants/book";
import { convertToISBN10 } from "../../utils/isbn";

type AddBookByIsbnProps = {
  open: boolean;
  onAdd: (item: Book) => void;
  onClose: () => void;
};

export const AddBookByIsbn: React.FC<AddBookByIsbnProps> = ({
  open,
  onAdd,
  onClose,
}) => {
  const [isbn, setIsbn] = useState("");
  const [catchcopy, setCatchcopy] = useState("");
  const [comment, setComment] = useState("");

  const handleChangeIsbn = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
      setIsbn(e.target.value),
    []
  );

  const handleChangeComment = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
      setComment(e.target.value),
    []
  );

  const handleChangeCatchcopy = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
      setCatchcopy(e.target.value),
    []
  );
  const handleOk = useCallback(async () => {
    try {
      const data = await openbd(isbn);
      data
        .map<Book>((x) => ({
          isbn: convertToISBN10(x.summary?.isbn ?? isbn),
          catchcopy: catchcopy,
          title: x.summary?.title ?? "",
          image: x.summary?.cover,
          comment: comment,
        }))
        .forEach(onAdd);
      setIsbn("");
      setCatchcopy("");
      setComment("");
    } catch (e) {
      console.error(e);
      alert("ISBNが間違っているようです");
    }
  }, [isbn, catchcopy, comment, onAdd, onClose]);

  return (
    <form noValidate autoComplete="off" onSubmit={handleOk}>
      <Dialog open={open} onClose={onClose}>
        <DialogContent>
          <FormControl fullWidth>
            <TextField
              label="ISBN"
              variant="outlined"
              value={isbn}
              onChange={handleChangeIsbn}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="キャッチコピー"
              variant="outlined"
              value={catchcopy}
              onChange={handleChangeCatchcopy}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="コメント"
              variant="outlined"
              value={comment}
              multiline
              rows={5}
              onChange={handleChangeComment}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>キャンセル</Button>
          <Button onClick={handleOk} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};
