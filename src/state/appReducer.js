export const InitalState = {
  loading: false,
  data: [
    { group: 1, item: [1, 2, 3,4, 5, 6, 7, 8] },
    { group: 2, item: [9, 10] },
    { group: 3, item: [] },
    { group: 4, item: [] }
  ],
  error: false,
};

export const appReducer = (state = InitalState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
