import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes'
class Quotes extends Component {

  renderQuotes = (quotes) => {
    return quotes.map(quote => {
      return (
        <QuoteCard
          id={quote.id}
          votes={quote.votes}
          content={quote.content}
          author={quote.author}
          removeQuote={this.props.removeQuote}
          upvoteQuote={this.props.upvoteQuote}
          downvoteQuote={this.props.downvoteQuote}
        />)
    })
  }

  render() {
    console.log("PROPZ", this.props)
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.renderQuotes(this.props.quotes)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {quotes: state.quotes}
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeQuote: (id) => dispatch(removeQuote(id)),
    upvoteQuote: (id) => dispatch(upvoteQuote(id)),
    downvoteQuote: (id) => dispatch(downvoteQuote(id))

  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
