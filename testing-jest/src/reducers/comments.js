import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      const comments = action.payload.data.map((comment) => {
        return comment.name;
      });
      return [...state, ...comments];
    case SAVE_COMMENT:
      return [...state, action.payload];
      break;
    default:
      return state;
  }
}
