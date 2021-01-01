import { useReplicant } from "use-nodecg";

type Book = {
  isbn: string;
  catchcopy: string;
  title: string;
  image?: string;
  comment: string;
};

export default Book;
export const bookReplicant = "book";

export const useBook: () => [
  Book | undefined,
  (newValue: Book | undefined) => void
] = () => useReplicant<Book | undefined>(bookReplicant, undefined);
