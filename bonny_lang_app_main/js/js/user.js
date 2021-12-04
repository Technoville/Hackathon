const nextBtn = document.querySelector("#login__btn");
const emailData = document.querySelector("#email_input");
const passwordData = document.querySelector("#password_input");

const registeredUsers = [
  {
    firstName: "John",
    lastName: "Doe",
    userName: "@allicodes",
    phoneNumber: "081132",
    dob: "12",
    email: "allisonevans@gmail.com",
    password: "Pa$$w0rd",
  },
];

const saveOnLocalStorage = () => {
  localStorage.setItem("users", JSON.stringify(registeredUsers));
};

saveOnLocalStorage();

const authenticateUser = (email, password) => {
  const getUser = JSON.parse(localStorage.getItem("users"));
  if (email == getUser[0].email && password == getUser[0].password) {
    // let url = window.location;
    window.location.href = "main.html";
    console.log(window.location);
  } else {
    console.log(getUser[0].email);
  }
};

nextBtn.addEventListener("click", () => {
  authenticateUser(emailData.value, passwordData.value);
});
