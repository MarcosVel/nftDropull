export default function detail(state = [], action) {
  console.log(state);
  
  switch (action.type) {
    case 'GET_DETAILS':
      return [ action.asset ];
    default:
      return state;
  }
}