import { gitUserContentBaseUrl } from "./CONSTANTS";

async function fetchReadme(repoName, defaultBranch) {
  const url = new URL(
    `/Theobano/${repoName}/${defaultBranch}/README.md`,
    gitUserContentBaseUrl
  );

  const response = await fetch(url).then((res) => {
    if (res.status === 404) {
      return "No readme file"
    } else {
      
      return res.text()
    }
  });
  return response;
}

export default fetchReadme;
