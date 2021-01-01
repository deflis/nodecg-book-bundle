import { useReplicant } from "use-nodecg";
import Book from "./book";

type Books = Book[];

export default Books;
export const booksReplicant = "books";
export const useBooks: () => [Book[], (newValue: Book[]) => void] = () =>
  useReplicant<Book[]>(booksReplicant, []);
