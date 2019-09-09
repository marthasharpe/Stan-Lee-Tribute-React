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
                id="new-quote"
                style={{cursor: "pointer"}}
                onClick={props.getQuote}
            >
            Next Quote
            </button>
            
            <button>

            </button>
        </div>
    )
}

export default Buttons;