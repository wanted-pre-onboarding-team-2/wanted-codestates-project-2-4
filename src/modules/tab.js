const SET_TAB = "SET_TAB";

export const setTab = tabId => ({ type: SET_TAB, tabId });

const initialState = 1;

export default function tab(state = initialState, action) {
  switch (action.type) {
    case SET_TAB:
      return (state = action.tabId);
    default:
      return state;
  }
}
