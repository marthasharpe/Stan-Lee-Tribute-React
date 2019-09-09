import React from 'react';
import QuoteBox from './QuoteBox';
import './stanandspidey.png';
import './App.css';

function Header() {
  return (
    <div className="header">

      <div className="tribute-info">  
        <p>Stan Lee was the creator of iconic heroes and owner of a multi-billion dollar company. He married a model and they were together for nearly 70 years. He lived to be 95 and was still doing what he loved up till the end. What was his secret? Three simple things:
          </p>
        <ol>
          <li>Meet deadlines and pay the bills,</li>
          <li>Like what you do and do what you like,</li>
          <li>Be open to getting lucky!</li>
        </ol>
      </div>

      <figure id="img-div">
          <img className="image" src="./stanandspidey.png" alt="Stan Lee and Spidey" title="Stan Lee gives a thumbs-up while Spidey snaps a pic in the background." style={{maxWidth: 486}}/>
        <figcaption id="img-caption">Stan Lee as the image of success.</figcaption>
      </figure>
      
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
        
      <p> Read about Stan Lee's life in this short
        <a href="https://www.biography.com/news/stan-lee-obituary" target="_blank" rel="noopener noreferrer" id="tribute-link">
          Biography.</a>
      </p>

      <p> And there's even more information on
        <a href="https://en.wikipedia.org/wiki/Stan_Lee" target="_blank" rel="noopener noreferrer" id="wiki-link">
         Wikipedia.</a>
      </p>

      <p>This page was created by
        <a href="https://github.com/marthasharpe" target="_blank" rel="noopener noreferrer" id="profile">
         Martha Sharpe</a>
      </p>
      
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <h1 className="title">Stan Lee's Secrets to Success</h1>
      <Header />
      <QuoteBox />
      <Footer />
    </div>
  );
}

export default App;
