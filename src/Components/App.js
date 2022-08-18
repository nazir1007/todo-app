import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
//import Footer from "./Footer";
//import Data from "./Data";

function App() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <h1>TODO APP</h1>
      <Form data={data} setData={setData} />
      <List data={data} setData={setData} />
    </div>
  );
}

export default App;
