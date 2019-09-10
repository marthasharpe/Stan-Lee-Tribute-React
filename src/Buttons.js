import React from 'react';

const buttonBox = {
    display: "flex",
    justifyContent: "center",
}

function Buttons(props) {
    return(
        <div className="button-container" style={buttonBox}>
            
            <button
                className="quote-button"
                id="last-quote"
                style={{cursor: "pointer"}}
                onClick={props.previousQuote}
            >
            Last Quote
            </button>
            
            <button
                className="quote-button"
                id="next-quote"
                style={{cursor: "pointer"}}
                onClick={props.nextQuote}
            >
            Next Quote
            </button>
        </div>
    )
}

export default Buttons;