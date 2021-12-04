"strict";

// function clock() {
//   const now = new Date();
//   const hour = now.getHours();
//   const minute = now.getMinutes();
//   const meridiem = now.toLocaleString("en").slice(19);

//   console.log(meridiem);

//   let timeDOM = document.querySelector("#time").innerHTML;
//   const timeArr = timeDOM.split(" ");
//   timeDOM = timeArr;
//   let timeHr = timeArr[0];
//   let timeMin = timeArr[2];

//   timeArr[0] = hour;

//   const timeCurrent = console.log(timeDOM);
// }
// clock();

/* Set the width of the side navigation to 100% */
const open = document.querySelector(".menu__bar");
const close = document.querySelector(".closebtn");

const openNav = () =>
  (document.getElementById("mySidenav").style.width = "100%");
open.addEventListener("click", () => openNav());
close.addEventListener("click", () => closeNav());

const closeNav = () => (document.getElementById("mySidenav").style.width = "0");
