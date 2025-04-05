import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const users = {
  admin: { username: "admin", password: "admin123", role: "admin" },
  user: { username: "user", password: "user123", role: "user" },
};

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (users[username] && users[username].password === password) {
      setUser(users[username]);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
