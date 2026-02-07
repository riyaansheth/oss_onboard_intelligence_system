import { useState } from "react";
import axios from "axios";

function App() {
  const [repoUrl, setRepoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [repoData, setRepoData] = useState(null);

  const analyzeRepo = async () => {
    if (!repoUrl) {
      setError("Please enter a repository URL");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setRepoData(null);

      const response = await axios.post("http://localhost:5000/analyze", {
        repoUrl
      });

      setRepoData(response.data);
    } catch (err) {
      setError("Failed to analyze repository");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>OSS Onboard Intelligence System</h1>

      <input
        type="text"
        placeholder="Enter GitHub repository URL"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
        style={{
          width: "420px",
          padding: "10px",
          marginRight: "10px"
        }}
      />

      <button onClick={analyzeRepo}>Analyze</button>

      {loading && <p>Analyzing repository...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {repoData && (
        <div style={{ marginTop: "30px" }}>
          <h2>{repoData.name}</h2>
          <p>{repoData.description}</p>

          <ul>
            <li><strong>Primary Language:</strong> {repoData.language}</li>
            <li><strong>Stars:</strong> {repoData.stars}</li>
            <li><strong>Forks:</strong> {repoData.forks}</li>
            <li><strong>Open Issues:</strong> {repoData.openIssues}</li>
          </ul>

          <a
            href={repoData.url}
            target="_blank"
            rel="noreferrer"
          >
            View Repository on GitHub
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
