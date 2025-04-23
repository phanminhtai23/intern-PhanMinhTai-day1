import { api } from "encore.dev/api";

export const get = api(
  { expose: true, method: "GET", path: "/ping" },
  async(): Promise<Response> => {
    return { message: "hello from The Farm" };
  }
);

interface Response {
  message: string;
}
