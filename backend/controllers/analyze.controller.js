import { fetchRepoDetails } from "../services/github.service.js";

export const analyzeRepo = async (req, res) => {
  try {
    const { repoUrl } = req.body;

    if (!repoUrl) {
      return res.status(400).json({ error: "Repository URL required" });
    }

    const parts = repoUrl.replace("https://github.com/", "").split("/");
    const owner = parts[0];
    const repo = parts[1];

    const repoData = await fetchRepoDetails(owner, repo);

    res.json({
      name: repoData.name,
      description: repoData.description,
      stars: repoData.stargazers_count,
      forks: repoData.forks_count,
      language: repoData.language,
      openIssues: repoData.open_issues_count,
      url: repoData.html_url
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to analyze repository" });
  }
};
