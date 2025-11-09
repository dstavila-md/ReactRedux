export default ({ dispatch }) =>
  (next) =>
  (action) => {
    // Check to see if the action has a promise on its payload
    if (!action.payload || !action.payload.then) {
      return next(action);
    }
  };
