

const AuthReducer = (initialstate,action) => {
  switch (action.type) {
    case "[auth] login":
      return {
        ...action.payload,
        logged:true
      }

    case "[auth] logout":
      return {
        logged:false
      }
   
  
    default:
      return initialstate
  }
}

export default AuthReducer