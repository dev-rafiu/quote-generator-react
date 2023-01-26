import { useState, useEffect } from "react";

import axios from "axios";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({});

  const generateRandomQuote = async (url) => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    try {
      const response = await axios.get(url);
      const data = await response.data;
      setQuotes(data);
      setQuote(data[randomNumber]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    generateRandomQuote("https://type.fit/api/quotes");
  }, []);

  return (
    <main>
      <div className="container">
        <h2>Random Quote Generator</h2>
        <button
          onClick={() => generateRandomQuote("https://type.fit/api/quotes")}
          className="generate-btn"
        >
          Generate New Quote
        </button>
        <p>
          <span>“</span> {quote?.text}
        </p>
        <i>{quote?.author}</i>
      </div>
    </main>
  );
}

export default App;
