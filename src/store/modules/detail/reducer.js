export default function detail(state = [], action) {
  switch (action.type) {
    case 'GET_DETAILS':
      return [ action.asset ];
    default:
      return state;
  }
}