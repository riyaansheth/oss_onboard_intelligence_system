import { fetchRepoDetails } from "../services/github.service.js";
import { cloneRepo } from "../services/git.service.js";
import { analyzeStructure } from "../analyzers/structure.analyzer.js";
import { detectBeginnerZones } from "../analyzers/complexity.analyzer.js";
import path from "path";

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
    const repoPath = await cloneRepo(repoUrl, repo);

    const structure = analyzeStructure(repoPath);
    const beginnerZones = detectBeginnerZones(structure);

    res.json({
      name: repoData.name,
      description: repoData.description,
      language: repoData.language,
      stars: repoData.stargazers_count,
      forks: repoData.forks_count,
      openIssues: repoData.open_issues_count,
      url: repoData.html_url,
      structure,
      beginnerZones
    });
  } catch (err) {
    res.status(500).json({ error: "Repository analysis failed" });
  }
};
