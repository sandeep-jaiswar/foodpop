import {
  HIDE_MODAL,
  HIDE_POPOVER,
  HIDE_SLIDER,
  HIDE_TOAST,
  SHOW_MODAL,
  SHOW_POPOVER,
  SHOW_SLIDER,
  SHOW_TOAST,
} from "../types";

const initialState = {
  toasts: null,
  slider: [],
  popover: null,
  modal: null,
};

export const configReducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        toasts: {
          current: payload,
          timestamp: Date.now(),
        },
      };
    case HIDE_TOAST:
      return {
        ...state,
        toasts: null,
      };
    case SHOW_SLIDER:
      return {
        ...state,
        slider: [...state.slider, {
          id: payload,
          timestamp: Date.now(),
        }],
      };
    case HIDE_SLIDER:
      return {
        ...state,
        slider: state.slider.filter((ele)=>ele.id!==payload),
      };
    case SHOW_MODAL:
      return {
        ...state,
        modal: {
          current: payload,
          timestamp: Date.now(),
        },
      };
    case HIDE_MODAL:
      return {
        ...state,
        modal: null,
      };
    case SHOW_POPOVER:
      return {
        ...state,
        popover: {
          current: payload,
          timestamp: Date.now(),
        },
      };
    case HIDE_POPOVER:
      return {
        ...state,
        popover: null,
      };
    default:
      return {...state};
  }
};
