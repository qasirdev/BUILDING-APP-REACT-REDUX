import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";

function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHOR_SUCCESS, authors };
}
export function loadAuthors() {
  //thunk for authors
  return function (dispatch) {
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch((error) => {
        throw error;
      });
  };
}
