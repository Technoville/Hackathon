const rocket = document.querySelector("img");
const loader = document.querySelector("#loader");
const loginContainer = document.querySelector("#login__container");

rocket.addEventListener("animationend", () => {
  rocket.classList.replace("rocket__riseup", "rocket__ready");
  rocket.addEventListener("animationend", () => {
    rocket.classList.replace("rocket__ready", "rocket__go");
  });
});

setTimeout(() => {
  loader.style.display = "none";
  loginContainer.style.display = "grid";
}, 9000);
