// dom
const githubFinderDom = document.querySelector(".github-finder-input");
const githubFinderFormDom = document.querySelector(".github-finder");
const githubContainerDom = document.querySelector(".github-container");

//github url
const githubURL = "https://api.github.com/users/";
const secretKey = "498b9b31e17bf90334c731bac91372ccaefa8372";
const clientID = "6627aca0f55bf8987a73";
const headers = {
  Authorization: "Basic " + btoa(clientID + ":" + secretKey),
};

githubFinderFormDom.addEventListener("submit", (e) => {
  e.preventDefault();
  clearPreviousGithubProfile();
  searchProfile();
  githubFinderDom.value = "";
});

const clearPreviousGithubProfile = () => {
  const githubProfileDom = document.querySelector(".github-profile");
  if (githubProfileDom) {
    githubProfileDom.remove();
  }
};

const searchProfile = () => {
  const queryGithubURL = githubURL + githubFinderDom.value;

  fetch(queryGithubURL, {
    method: "GET",
    headers: headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
    }
      return response.json()
    })
    .then((data) => getUserData(data))
    .catch(() => createError());
};

const createError = () => {
  const githubProfileDom = document.createElement("div");
  githubProfileDom.classList.add("github-profile");

  githubProfileDom.innerHTML = `
    <p>No profile with this username</p>
  `;
  githubContainerDom.appendChild(githubProfileDom)
};

let userData;
let userGithubRepos;
let profileDescriptionRepos;

const createUserProfile = (userData) => {
  const githubProfileDom = document.createElement("div");
  githubProfileDom.classList.add("github-profile");

  const cardHtml = `
  <div class="profile-pic">
    <img
      src="${userData.avatar_url}"
      alt="github profile picture"
    />
  </div>
  <div class="profile-description">
    <h3 class="profile-description-name">${userData.login}</h3>
    <p class="profile-description-introduction">
      ${userData.bio}
    </p>
    <div class="profile-description-stats">
      <div class="profile-description-stats-content followers">
        <span>${userData.followers}  <span class="stat-name">Followers</span></span>
      </div>
      <div class="profile-description-stats-content following">
        <span>${userData.following} <span class="stat-name">Following</span></span>
      </div>
      <div class="profile-description-stats-content repos">
        <span>${userData.public_repos} <span class="stat-name">Repos</span></span>
      </div>
    </div>
  </div>
  `;
  githubProfileDom.innerHTML = cardHtml;
  githubContainerDom.appendChild(githubProfileDom);
};

const getGitHubProfileRepos = async (data) => {
  userGithubRepos = await data;

  const profileDescriptionDom = document.querySelector(".profile-description");
  profileDescriptionRepos = document.createElement("div");
  profileDescriptionRepos.classList.add("profile-description-repos");

  userGithubRepos.slice(0, 5).forEach((repo) => {
    const repoHtml = document.createElement("button");
    repoHtml.classList.add("profile-description-repo-item");
    const urlHtml = document.createElement("a");
    urlHtml.href = repo.html_url;
    urlHtml.target = "_blank";
    urlHtml.innerHTML = repo.name;
    repoHtml.appendChild(urlHtml);
    profileDescriptionRepos.appendChild(repoHtml);
  });
  profileDescriptionDom.appendChild(profileDescriptionRepos);
};


const getUserData = async (data) => {
  userData = await data;
  createUserProfile(userData);
  fetch(userData.repos_url + "?sort=created")
    .then((response) => response.json())
    .then((data) => getGitHubProfileRepos(data));
};
