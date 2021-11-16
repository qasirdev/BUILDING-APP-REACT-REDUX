import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/authors/";

export function getAuthors() {
  return fetch(baseUrl, {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then(handleResponse)
    .catch(handleError);
}
