import usersTpl from "../templates/users.hbs";
import usersLogTpl from "../templates/login.hbs";

const refs = {
  userList: document.querySelector(".user-wrapper"),
};
export const fetchUser = async () => {
  const url = "https://randomuser.me/api/";
  try {
    const response = await fetch(url);
    const data = await response.json();
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
    let currentPass;
    arr.forEach(pass => currentPass=pass.login.password);

  function checkUser(e) {
    e.preventDefault();
    if(e.target.userPass.value === currentPass){
        refs.userList.insertAdjacentHTML('beforeend', usersLogTpl(arr))
    }else{
        alert('Wrong password')
    }
    

  }

  userForm.addEventListener("submit", checkUser);
}

createMarkup();
