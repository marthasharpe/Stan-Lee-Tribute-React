import React from 'react';
import Quotes from './Quotes';
import Buttons from './Buttons';
import quotesData from './quotesData';

const possibleQuotes = quotesData;

class QuoteBox extends React.Component {
    state = {
        visibleQuote: possibleQuotes[Math.floor(Math.random() * possibleQuotes.length)]
    }

    previousQuote = () => {
        let quoteIndex = possibleQuotes.indexOf(this.state.visibleQuote);
        let finalQuote = possibleQuotes[possibleQuotes.length - 1];
        this.setState({
            visibleQuote: quoteIndex === 0 ? finalQuote : possibleQuotes[quoteIndex - 1]
        });
    }
    nextQuote = () => {
        let quoteIndex = possibleQuotes.indexOf(this.state.visibleQuote);
        this.setState({
            visibleQuote: quoteIndex === possibleQuotes.length - 1 ? possibleQuotes[0] : possibleQuotes[quoteIndex + 1]
        })
    }
    render() {
        return(
            <div className="quote-box" id="quote-box">
                <Quotes visibleQuote={this.state.visibleQuote}/>
                <Buttons previousQuote={this.previousQuote} nextQuote={this.nextQuote}/>
            </div>
        )
    }
}

export default QuoteBox;