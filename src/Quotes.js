import React from 'react';

const quoteBubble = {
    maxWidth: 500,
    fontSize: "1.2rem",
    background: "white",
    borderRadius: "50%",
    padding: "3rem 4rem",
    margin: "0.5rem 1.5rem", 
    textAlign: "center"
  }


function Quotes(props) {
    return(
        <div className="quote-bubble" style={quoteBubble}>
            <p className="quote-text" id="text">
                {props.visibleQuote}
            </p>
        </div>
    );
}

export default Quotes;