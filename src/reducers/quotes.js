export default (state = [], action) => {
  // console.log("ACTION", action);
  switch(action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      const allButRemoved = state.filter(quote => {
        return quote.id !== action.quoteId
      })
      return [...allButRemoved]
    case "UPVOTE_QUOTE":
      const newState = state.map(quote => {
        if(quote.id === action.quoteId){
          quote.votes = quote.votes + 1
          return quote
        } else {
          return quote
        }
      })
      return [...newState]
    case "DOWNVOTE_QUOTE":
      const updatedState = state.map(quote => {
        if(quote.id === action.quoteId){
          quote.votes > 0 ? quote.votes = quote.votes - 1 : null
          return quote
        } else {
          return quote
        }
      })
      return [...updatedState]
      default:
      return state;
    }



  }
