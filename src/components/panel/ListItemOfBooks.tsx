import React, { useCallback } from "react";

import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Radio,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import Book from "../../replicants/book";

type ListItemOfBooksProps = {
  index: number;
  item: Book;
  selected: boolean;
  onDelete: (item: Book, index: number) => void;
  onSelect: (item: Book, iindex: number) => void;
  onEdit: (item: Book, iindex: number) => void;
};

export const ListItemOfBooks: React.FC<ListItemOfBooksProps> = ({
  index: key,
  item,
  selected,
  onDelete,
  onSelect,
  onEdit,
}) => {
  const handleDelete = useCallback(() => onDelete(item, key), [item, key]);
  const handleSelect = useCallback(() => onSelect(item, key), [item, key]);
  const handleEdit = useCallback(() => onEdit(item, key), [item, key]);
  return (
    <ListItem>
      <ListItemIcon>
        <Radio checked={selected} color="secondary" onClick={handleSelect} />
      </ListItemIcon>
      <ListItemAvatar>
        <Avatar src={item.image} />
      </ListItemAvatar>
      <ListItemText primary={item.catchcopy} secondary={item.title} />
      <ListItemSecondaryAction>
        <IconButton onClick={handleEdit}>
          <EditIcon />
        </IconButton>
        <IconButton edge="end" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
