window.addEventListener("load", () => {
  getAllUsers();
});

const getAllUsers = () => {
  const url = "http://localhost:3005/api/users";
  fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      jwt: sessionStorage.getItem("token"),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let users = data[2];
      console.log(users)
        const div=document.querySelector("div")
        const userName = document.createElement("h2");
        const userEmail = document.createElement("h2");
        userName.innerHTML = `name: ${users.name}`;
        userEmail.innerHTML = `email:  ${users.email}`;
        div.appendChild(userName);
        div.appendChild(userEmail);
    })
};
