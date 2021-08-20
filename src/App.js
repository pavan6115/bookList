import { useState } from "react";
import "./styles.css";

const selfHelpBook = {
  "A Mind For Numbers [8/10]": "Barbara Oakley",
  "The Code of Extraordinary Mind [8.5/10]": "Vishen Lakhiani",
  "Inner Engineering [currently reading]": "Sadhguru"
};

const novel = {
  "The Adventures of Tom Sawyer [9/10]": "Mark Twain",
  "David Copperfield [8/10]": "Charles Dickens",
  "The Strange Case of Dr Jekyll and Mr Hyde [9.5/10]": "Robert Louis Stevenson"
};

const habitsBook = {
  "Atomic Habits [10/10]": "James Clear",
  "The Power of Your Subconscious Mind [8/10]" : "Joseph Murphy",
  "Think Like a Monk [9/10]" : "Jay Shetty"
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
          Habits & Mental Health
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
