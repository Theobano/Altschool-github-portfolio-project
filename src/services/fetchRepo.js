import { githubBaseUrl } from "./CONSTANTS";

async function fetchRepo(repoName) {
  const url = new URL(`/repos/theobano/${repoName}`, githubBaseUrl);

  const response = await fetch(url).then((res) => res.json());
  return response;
}

export default fetchRepo;
