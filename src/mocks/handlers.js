// src/mocks/handlers.js
import { http, HttpResponse } from "msw";

export const handlers = [
  // Could not get this handle to work
  // http.get(`https://fakestoreapi.com/products/1`, () => {
  //   return HttpResponse.json({
  //     id: 1,
  //     title: "Test product",
  //   });
  // }),
  http.get("https://fakestoreapi.com/products", () => {
    return HttpResponse.json([
      {
        id: 1,
        title: "Test product",
      },
    ]);
  }),
];
