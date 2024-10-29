import { useState } from "react";
import "./App.css";
import Contact from "./Contact/Contact";
// import ProductList from "./Products/ProductList";

function App() {
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState("");
  // const handleIncrease = () => {
  //   setCount((prev) => prev + 1);
  // };

  // const handleDecrease = () => {
  //   setCount((prev) => prev - 1);
  // };

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };
  const [details, setDetails] = useState({ count: 0, name: "" });
  const [newNote, setNewNote] = useState([]);
  const handleDecrease = () => {
    setDetails((prev) => ({ ...prev, count: prev.count - 1 }));
  };

  const handleIncrease = () => {
    setDetails((prev) => ({ ...prev, count: prev.count + 1 }));
  };
  const handleNameChange = (e) => {
    setDetails((prev) => ({ ...prev, name: e.target.value }));
  };
  const createNote = () => {
    if (details.name.trim() !== "") {
      setNewNote((prev) => [...prev, details.name]);
      setDetails((prev) => ({ ...prev, name: "" }));
    }
  };

  return (
    <>
      <div>
        <h3>{details.count}</h3>
        <button onClick={handleIncrease}>increase</button>
        <button onClick={handleDecrease}>decrease</button> <br></br>
        <input value={details.name} onChange={handleNameChange}></input>{" "}
        <button onClick={createNote}>submit</button>
        {/* <p>{details.name}</p> */}
        <ul>
          {newNote.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
        {/* <h3>{count}</h3>
        <button onClick={handleIncrease}>increase</button>
        <button onClick={handleDecrease}>decrease</button>
        <br></br>
        <input onChange={(e) => handleNameChange(e)}></input>
        <p>my name is {name}</p> */}
      </div>

      <Contact></Contact>
    </>
  );
}

export default App;
