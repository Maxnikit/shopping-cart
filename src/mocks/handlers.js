// src/mocks/handlers.js
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://fakestoreapi.com/products", () => {
    return HttpResponse.json([
      {
        id: 1,
        name: "Bag",
      },
    ]);
  }),
];
