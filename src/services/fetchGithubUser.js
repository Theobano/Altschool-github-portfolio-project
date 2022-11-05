import { githubBaseUrl } from "./CONSTANTS";

function fetchGithubUser() {
  const url = new URL("/users/theobano", githubBaseUrl);

  const promise = fetch(url).then((res) => res.json());
  return (promise);
}

export default fetchGithubUser;