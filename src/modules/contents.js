import axios from "axios";
import produce from "immer";

/* 액션 타입 만들기 */
const GET_SECTOR_LOADING = "GET_SECTOR_LOADING";
const GET_SECTOR_SUCCESS = "GET_SECTOR_SUCCESS";
const GET_SECTOR_ERROR = "GET_SECTOR_ERROR";

/* 액션 생성함수 만들기 */
export const loadSector = () => async dispatch => {
  dispatch({ type: GET_SECTOR_LOADING });
  try {
    const res = await axios.get("/info/contents", {
      headers: {
        "TEST-AUTH": "wantedpreonboarding",
      },
    });
    dispatch({ type: GET_SECTOR_SUCCESS, data: res.data });
  } catch (e) {
    dispatch({ type: GET_SECTOR_ERROR, error: e });
  }
};

/* 초기 상태 선언 */
const initialState = {
  loading: false,
  data: null,
  error: null,
};

/* 리듀서 선언 */
export default function sector(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case GET_SECTOR_LOADING:
        draft.loading = true;
        break;
      case GET_SECTOR_SUCCESS:
        draft.loading = false;
        draft.data = action.data;
        break;
      case GET_SECTOR_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
      default:
        return state;
    }
  });
}
