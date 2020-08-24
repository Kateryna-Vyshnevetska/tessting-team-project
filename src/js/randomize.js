import usersTpl from "../templates/users.hbs";

const refs = {
  userList: document.querySelector(".user-wrapper"),
};
export const fetchUser = async () => {
  const url = "https://randomuser.me/api/";
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch {}
};

function createMarkup() {
  fetchUser().then((elem) => {
    refs.userList.innerHTML = usersTpl(elem);
    getUserLogin(elem);
  });
}
function getUserLogin(arr) {
  const userForm = document.querySelector(".user-form");
  const loginInput = document.querySelector(".user-input");
  const loginBtn = document.querySelector(".login-button");
  console.log(userForm);

  function checkUser(e) {
    e.preventDefault();
    console.log(e.target);
  }

  //    loginInput.addEventListener('input', checkUser)
  userForm.addEventListener("submit", checkUser);
}

createMarkup();
