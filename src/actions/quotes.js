// TODO: Create action creators as defined in tests
export { addQuote, removeQuote, upvoteQuote, downvoteQuote};

const addQuote = (quote) => {
  return {type: "ADD_QUOTE", quote: quote}
}

const removeQuote = (id) => {
  return {type: "REMOVE_QUOTE", quoteId: id}
}

const upvoteQuote = (id) => {
  console.log("ID", id);
  return {type: "UPVOTE_QUOTE", quoteId: id}
}

const downvoteQuote = (id) => {
  return {type: "DOWNVOTE_QUOTE", quoteId: id}
}
