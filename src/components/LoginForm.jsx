import { useState } from "react";
import axios from "axios";

const projectID = "8c265fdb-cabf-43ca-a49c-69af8775b37e";

const Modal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (err) {
      setError("भाई सही details दे ना यार !.");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1 style={{ marginTop: "5rem", color: "" }}>{error}</h1>
      </div>

      {/* inform section */}
      <div className="inform">
        <p
          className="inform_p"
          style={{
            fontFamily: "cursive",
            background: "#383838",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Important info : Please Read
        </p>
        <ul>
          <li> chat will be saved for 14 days only </li>
          <li> Only limited people can login (10) </li>
          <li> username and pass will be given by me </li>
          <li>
            if you are from some company,going throughout my projects and want
            to check this project contact me.{" "}
          </li>
          <li>sorry for Non responsiveness .Work is going on .</li>
          <li>The reason to everything is that Freely Hosted .</li>
        </ul>
      </div>

      {/* inform section finish */}
    </div>
  );
};

export default Modal;
