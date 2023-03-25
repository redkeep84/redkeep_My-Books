import Axios from "axios";
// import { deleteBook } from "../redux/modules/books";
import { BookReqtype, BookType } from "../types";

const BOOK_API_URL = "https://api.marktube.tv/v1/book";

export default class BookService {
  public static async getBooks(token: string): Promise<BookType[]> {
    const response = await Axios.get(BOOK_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }

  public static async addBook(
    token: string,
    book: BookReqtype
  ): Promise<BookType> {
    const response = await Axios.post(BOOK_API_URL, book, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }

  public static async deleteBook(token: string, bookId: number) {
    await Axios.delete(`${BOOK_API_URL}/${bookId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
