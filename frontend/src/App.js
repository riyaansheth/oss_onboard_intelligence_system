import { useState } from "react";
import axios from "axios";

function App() {
  const [repoUrl, setRepoUrl] = useState("");
  const [response, setResponse] = useState(null);

  const analyzeRepo = async () => {
    const res = await axios.post("http://localhost:5000/analyze", {
      repoUrl
    });
    setResponse(res.data);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>OSS Onboard Intelligence System</h1>

      <input
        type="text"
        placeholder="Enter GitHub repository URL"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
        style={{ width: "400px", padding: "10px" }}
      />

      <br /><br />

      <button onClick={analyzeRepo}>Analyze github repository</button>

      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
}

export default App;
