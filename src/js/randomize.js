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
createMarkup();

function createMarkup() {
  fetchUser().then((elem) => {
    refs.userList.innerHTML = usersTpl(elem);
    getUserLogin(elem);
});
}
function getUserLogin(arr) {
    const userForm = document.querySelector(".user-form");
    const userCard = document.querySelector('.user-list')
    let currentPass;
    arr.forEach(pass => currentPass=pass.login.password);
    console.log(currentPass);

  function checkUser(e) {
    e.preventDefault();
    if(e.target.userPass.value === currentPass){
        userCard.insertAdjacentHTML('beforeend', usersLogTpl(arr))
        userForm.classList.add('hidden')
    }else{
        alert('Wrong password')
    }
    
  }

  userForm.addEventListener("submit", checkUser);
}

