import simpleGit from "simple-git";

export const analyzeGitHistory = async (repoPath) => {
  const git = simpleGit(repoPath);

  const log = await git.log({ maxCount: 200 });

  const fileStats = {};

  for (const commit of log.all) {
    const diff = await git.show([
      commit.hash,
      "--name-only",
      "--pretty=format:"
    ]);

    const files = diff
      .split("\n")
      .map(f => f.trim())
      .filter(Boolean);

    for (const file of files) {
      if (!fileStats[file]) {
        fileStats[file] = {
          changes: 0,
          commits: new Set()
        };
      }

      fileStats[file].changes += 1;
      fileStats[file].commits.add(commit.hash);
    }
  }

  const ranked = Object.entries(fileStats)
    .map(([file, data]) => ({
      file,
      changeCount: data.changes,
      commitCount: data.commits.size
    }))
    .sort((a, b) => b.changeCount - a.changeCount);

  return ranked;
};
