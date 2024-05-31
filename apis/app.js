const fullNameDataCell = document.querySelector("#fullName");
const bioDataCell = document.querySelector("#bio");
const img = document.querySelector("#profilePicture");
const homeUrlCell = document.querySelector("#homeUrl");
const errorDiv = document.querySelector("#error-message");

// fetch API to GET GitHub user data
async function getInfo(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    const userInfo = await response.json();

    if (!username) {
      errorDiv.textContent = `Please fill in the input field`;
    } else if (!userInfo.url) {
      errorDiv.textContent = `Please fill in the input field with a valid username`;
    } else {
      fullNameDataCell.textContent = userInfo.name;
      bioDataCell.textContent = userInfo.bio;
      img.src = userInfo.avatar_url;
      homeUrlCell.innerHTML = `<a href=${userInfo.html_url}>${userInfo.html_url}</a>`;
    }
  } catch (error) {
    console.log("error");
  }
}

// on click event listener - obtains username in input field
const btn = document.querySelector("#get-info-button");
btn.addEventListener("click", () => {
  const userNameInput = document.querySelector("#username");
  let username = userNameInput.value;
  getInfo(username);
});

// on change event listener - clears all fields when new username search is made
const userNameInput = document.querySelector("#username");
userNameInput.addEventListener("change", () => {
  errorDiv.textContent = "";
  fullNameDataCell.textContent = "";
  bioDataCell.textContent = "";
  img.src = "";
  homeUrlCell.innerHTML = "";
});
