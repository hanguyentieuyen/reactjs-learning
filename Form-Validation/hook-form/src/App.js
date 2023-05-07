import { useState, useRef } from "react";
import "./App.css";
import FormInput from "./components/FromInput";
function App() {
  // const [username, setUsername] = useState("");
  // const usernameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(usernameRef);
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {/* <FormInput refer={usernameRef} placeholder="Username" /> */}
        <FormInput name="username" placeholder="Username" />
        <FormInput name="email" placeholder="Email" />
        <FormInput name="fullname" placeholder="Full Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
