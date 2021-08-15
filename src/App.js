import { useState } from "react";
import "./styles.css";

const selfHelpBook = {
  "A Mind For Numbers": "Barbara Oakley",
  "The Code of Extraordinary Mind": "Vishen Lakhiani",
  "Inner Engineering": "Sadhguru"
};

const novel = {
  "The Adventures of Tom Sawyer": "Mark Twain",
  "David Copperfield": "Charles Dickens",
  "The Strange Case of Dr Jekyll and Mr Hyde": "Robert Louis Stevenson"
};

const habitsBook = {
  "Atomic Habits": "James Clear"
};

export default function App() {
  const [books, setBooks] = useState({});

  function selfHelpHandler() {
    setBooks(selfHelpBook);
  }

  function novelsHandler() {
    setBooks(novel);
  }

  function habitsHandler() {
    setBooks(habitsBook);
  }

  return (
    <div className="App">
      <h1>BookList</h1>
      <section className="container">
        <h2>I love to read books alot. These are my recommendations</h2>

        <hr />

        <p>Categories</p>
        <button onClick={selfHelpHandler} className="btn selfHelp">
          Self Help
        </button>
        <button onClick={novelsHandler} className="btn novelsType">
          Story Type
        </button>
        <button onClick={habitsHandler} className="btn habits">
          Habits
        </button>

        {Object.entries(books).map((item) => {
          return (
            <p key={item}>
              {item[0]} ~ {item[1]}
            </p>
          );
        })}
      </section>
    </div>
  );
}
