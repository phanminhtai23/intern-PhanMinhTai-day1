import { api } from "encore.dev/api";
import { db } from "./db";
export const get = api(
  { expose: true, method: "GET", path: "/ping" },
  async(): Promise<Response> => {
    return { message: "hello from The Farm" };
  }
);


export type test = {
  id: string;
  test: string;
};

// GET /books - List all books
export const listTest = api(
  { expose: true, method: "GET", path: "/books" },
  async (): Promise<{ books: test[] }> => {
    const books: test[] = [];
    const rows = await db.query<test>`
      SELECT id, test
      FROM test
    `;

    for await (const book of rows) {
      books.push(book);
    }

    return { books };
  }
);


interface Response {
  message: string;
}
