import React from "react";

function Login(props) {
  const { setPassword, password, email, setEmail } = props;

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "gray",
         display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1rem",
          padding: "5rem",
          backgroundColor: "lightskyblue",
        }}
      >
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="email"
        />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Login;
