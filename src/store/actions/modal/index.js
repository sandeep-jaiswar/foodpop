import { HIDE_MODAL, SHOW_MODAL } from "../../types";

export const showModal = (input) => {
  return {
    type: SHOW_MODAL,
    payload: input,
  };
};

export const hideModal = (input) => {
  return {
    type: HIDE_MODAL,
    payload: input,
  };
};
