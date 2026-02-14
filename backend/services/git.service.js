import simpleGit from "simple-git";
import fs from "fs-extra";
import path from "path";

const git = simpleGit();
const BASE_DIR = path.resolve("temp/repos");

export const cloneRepo = async (repoUrl, repoName) => {
  await fs.ensureDir(BASE_DIR);

  const repoPath = path.join(BASE_DIR, repoName);

  if (await fs.pathExists(repoPath)) {
    await fs.remove(repoPath);
  }

  await git.clone(repoUrl, repoPath);
  return repoPath;
};
