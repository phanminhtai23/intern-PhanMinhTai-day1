import { api } from "encore.dev/api";
import { runMigrations, pool, query } from './db';

// import { SQLDatabase } from "encore.dev/storage/sqldb";

// const db = new SQLDatabase("url", { migrations: "./migrations" });

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
    const rows = await query<test>(
      "SELECT id, test FROM test"
    );

    for (const book of rows.rows) {
      books.push(book);
    }

    // const rows = await db.query<test>`
    //   SELECT id, test FROM test
    // `;

    // for await (const book of rows.rows) {
    //   books.push(book);
    // }

    return { books };
  }
);


interface Response {
  message: string;
}

// Chạy migration khi khởi động ứng dụng
async function start() {
  await runMigrations();
  console.log("Database migration đã được chạy thành công");
}

start()