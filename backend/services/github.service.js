import axios from "axios";

export const fetchRepoDetails = async (owner, repo) => {
  const url = `https://api.github.com/repos/${owner}/${repo}`;
  const response = await axios.get(url);
  return response.data;
};
