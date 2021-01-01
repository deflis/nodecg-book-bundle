import React from "react";

import { Card, CardContent, Typography } from "@material-ui/core";

import Book from "../../replicants/book";

type BookRenderProps = {
  item?: Book;
};

export const BookRender: React.FC<BookRenderProps> = ({ item }) => {
  return item ? (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {item.title}
        </Typography>
        <Typography variant="h5" component="h2">
          {item.catchcopy}
        </Typography>
      </CardContent>
    </Card>
  ) : null;
};
