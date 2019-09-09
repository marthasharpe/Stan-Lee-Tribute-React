import React from 'react';

const quoteBubble = {
    maxWidth: 500,
    fontSize: "1.2rem",
    background: "white",
    borderRadius: "50%",
    padding: "3rem 4rem 1.5rem 4rem",
    margin: "1.5rem", 
    textAlign: "center"
  }


function Quotes(props) {
    return(
        <div className="quote-bubble" style={quoteBubble}>
            <p className="quote-text" id="text">
                {props.visibleQuote}
            </p>
            <p className="author" id="author">- Stan Lee</p>
        </div>
    );
}

export default Quotes;