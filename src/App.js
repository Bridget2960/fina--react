import "./App.css";
import React from "react";

import Search from "./search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="mainCity">Weather Search</h1>

        <Search mainCity="New York" />
      </header>
    </div>
  );
}

export default App;
