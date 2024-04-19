// src/mocks/handlers.js
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://fakestoreapi.com/products", () => {
    return HttpResponse.json([
      {
        id: 1,
        name: "Test product",
      },
    ]);
  }),
  http.get("https://fakestoreapi.com/products/1", () => {
    return HttpResponse.json({
      id: "1",
      name: "Test product",
      rating: {
        count: 5,
        rate: 4.5,
      },
    });
  }),
];
