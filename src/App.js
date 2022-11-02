import { useState } from "react";
import Login from "./Login";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
    </div>
  );
}

export default App;
