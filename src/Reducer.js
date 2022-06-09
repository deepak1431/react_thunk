
const isState = {
    name: "Tejas",
    wishes:['eat', 'code']
}


const Reducer = (state=isState,action) => {
    if(action.type==='CHANGE_NAME'){

   return {
       ...state,
       name:action.payload
   }
  }
  return state;
}

export default Reducer