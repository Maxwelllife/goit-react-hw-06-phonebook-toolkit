import { createStore } from 'redux';

const initialStore = {};

// export default (store = initialStore, { type, payload }) => {
//   switch (type) {
//     case first:
//       return { ...store, ...payload };

//     default:
//       return store;
//   }
// };
const reducer = (store = initialStore) => {
  return store;
};
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
