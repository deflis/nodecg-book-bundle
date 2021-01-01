import React, { ChangeEvent, useCallback, useEffect, useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  FormControl,
  TextField,
} from "@material-ui/core";

import Book from "../../replicants/book";

type BookEditProps = {
  item?: Book;
  index?: number;
  onUpdate: (item: Book, index: number) => void;
  onClose: () => void;
};

export const BookEdit: React.FC<BookEditProps> = ({
  item,
  index,
  onUpdate,
  onClose,
}) => {
  const [title, setTitle] = useState(item?.title ?? "");
  const [image, setImage] = useState(item?.image ?? "");
  const [comment, setComment] = useState(item?.comment ?? "");
  const [catchcopy, setCatchcopy] = useState(item?.catchcopy ?? "");

  useEffect(() => {
    setTitle(item?.title ?? "");
    setImage(item?.image ?? "");
    setComment(item?.comment ?? "");
    setCatchcopy(item?.catchcopy ?? "");
  }, [item]);

  const handleChangeTitle = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
      setTitle(e.target.value),
    []
  );

  const handleChangeImage = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
      setImage(e.target.value),
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

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);
  const handleOk = useCallback(() => {
    if (item && index !== undefined) {
      onUpdate({ ...item, title, image, comment, catchcopy }, index);
    }
    onClose();
  }, [item, index, title, image, comment, catchcopy, onUpdate, onClose]);

  return item && index !== undefined ? (
    <form noValidate autoComplete="off" onSubmit={handleOk}>
      <Dialog open onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            <FormControl fullWidth>
              <TextField
                label="タイトル"
                variant="outlined"
                value={title}
                onChange={handleChangeTitle}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                label="画像URL"
                variant="outlined"
                value={image}
                onChange={handleChangeImage}
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
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button onClick={handleOk} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  ) : null;
};
