"strict";

const homepage = document.querySelector("#homepage");
const gamePage = document.querySelector("#game__page");
const learnPage = document.querySelector("#learn__page");
const voiceSearchPage = document.querySelector("#voice_search-page");
const sectionDictionary = document.querySelector("#section_dictionary");

const gameBtn = document.querySelector("#game");
const homeBtn = document.querySelector("#home");
const micBtn = document.querySelector("#mic");
const leanersBtn = document.querySelector("#learners");
const dictionaryBtn = document.querySelector("#dictionary");

const navIcons = document.querySelectorAll(".nav__icons");

const pages = [
  homepage,
  gamePage,
  learnPage,
  voiceSearchPage,
  sectionDictionary,
];

gameBtn.addEventListener("click", () => {
  pages.forEach((page, index) => {
    page.style.display = "none";
    navIcons[index].classList.remove("active__nav");
  });
  gameBtn.children[0].classList.add("active__nav");
  gamePage.style.display = "block";
});

homeBtn.addEventListener("click", () => {
  pages.forEach((page, index) => {
    page.style.display = "none";
    navIcons[index].classList.remove("active__nav");
  });
  homeBtn.children[0].classList.add("active__nav");
  homepage.style.display = "flex";
});

micBtn.addEventListener("click", () => {
  pages.forEach((page, index) => {
    page.style.display = "none";
    navIcons[index].classList.remove("active__nav");
  });
  micBtn.children[0].classList.add("active__nav");
  voiceSearchPage.style.display = "flex";
});

leanersBtn.addEventListener("click", () => {
  pages.forEach((page, index) => {
    page.style.display = "none";
    navIcons[index].classList.remove("active__nav");
  });
  leanersBtn.children[0].classList.add("active__nav");
  learnPage.style.display = "block";
});

dictionaryBtn.addEventListener("click", () => {
  pages.forEach((page, index) => {
    page.style.display = "none";
    navIcons[index].classList.remove("active__nav");
  });
  dictionaryBtn.children[0].classList.add("active__nav");
  sectionDictionary.style.display = "flex";
});

let dictSearch = document.querySelector("#dict__search");
const searchInput = document.querySelector("#search__input");
const searchBtn = document.querySelector("#search__btn");
const relateBtn = document.querySelectorAll(".relate__btn");

const dictionaryObj = [
  { eng: "hospital", ibani: "bíríwárí", cat: "buildings" },
  { eng: "much", ibani: "ndẹé", cat: "quantity" },
  { eng: "angry", ibani: "ịganị", cat: "expression" },
  { eng: "plantain", ibani: "ịnyaa", cat: "food" },
  { eng: "money", ibani: "igúanga", cat: "food" },
  { eng: "morning", ibani: "báāmá", cat: "greeting" },
  { eng: "blessing", ibani: "kari ibí", cat: "greeting" },
  { eng: "thank you", ibani: "í mịẹbám", cat: "greeting" },
  { eng: "mother", ibani: "nyingi", cat: "person" },
  { eng: "father", ibani: "ị daa", cat: "person" },
  { eng: "blood", ibani: "mbịnyé", cat: "person" },
  { eng: "sister", ibani: "mbịrá", cat: "person" },
  { eng: "brother", ibani: "mbiré", cat: "person" },
  { eng: "fish", ibani: "ábásịlárị", cat: "animal" },
  { eng: "oyster", ibani: "mgbe", cat: "animal" },
];

const howToSay = (word) => {
  let relatedArr = [];
  let foundWord;
  let unfoundWord;
  let result;
  dictionaryObj.filter((item) => {
    if (item.eng == word) {
      foundWord = item.ibani;
      console.log("This ran");
      dictionaryObj.filter((data) => {
        if (data.cat == item.cat) {
          relatedArr.push(data.eng);
          return relatedArr;
        }
      });
      return foundWord;
    }
    //  else {
    //   unfoundWord = "word not found";
    //   relatedArr = "";
    //   console.log(unfoundWord);
    //   return foundWord;
    // }
  });
  result = { foundWord, relatedArr };
  return result;
};

searchBtn.addEventListener("click", () => {
  let result = howToSay(searchInput.value);
  dictSearch.innerText = result.foundWord;

  //   relateBtn.forEach((btn) => {
  //     result.relatedArr.forEach((word) => {
  //       btn.innerHTML = word;
  //     });
  //   });

  for (let i = 0; i < relateBtn.length; i++) {
    relateBtn[i].textContent = result.relatedArr[i];
  }

  // console.log(result);
});

const updateText = document.querySelector("#update__text");
const translateBtn = document.querySelector("#translate__btn");

let dailyWord = dictionaryObj[0];

setInterval(() => {
  let randomNumber = Math.floor(Math.random() * 4);
  dailyWord = dictionaryObj[randomNumber];
  updateText.innerText = dailyWord.ibani;
}, 100_000);

translateBtn.addEventListener("click", () => {
  if (updateText.innerText == dailyWord.ibani) {
    updateText.innerText = dailyWord.eng;
  } else {
    updateText.innerText = dailyWord.ibani;
  }
});

const levels = document.querySelectorAll(".levels");
const levelCheck = document.querySelectorAll(".level__check");

levels.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    levelCheck[index].classList.toggle("fa-check");
    // btn.style.color = "white";
    levelCheck[index].style.backgroundColor = "#4e44ff";
    btn.classList.toggle("level__active");
    // btn.style.backgroundColor = "#4d44ff2a";
  });
});

// levelCheck[1].classList.add("fa-check");

// date and time
const timeElement = document.querySelector("#time");
const dateElement = document.querySelector("#date");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const displayDateTime = () => {
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let time = `${hour} : ${minute}`;
  let day = date.getDay();
  let dayString = days[day];
  let month = date.toLocaleString("default", { month: "short" });
  let meridiemDOM = document.querySelector("#clock__meridiem");
  let year = date.getFullYear();

  let dateString = `${dayString}, ${month} ${year}`;
  let dateNow = date.toLocaleString("en");
  let meridiem = "AM";
  if (dateNow.includes("AM")) {
    meridiem = "AM";
  } else {
    meridiem = "PM";
  }
  meridiemDOM.innerText = meridiem;

  timeElement.innerText = time;
  dateElement.innerText = dateString;
  // console.log(meridiemDOM);
};

displayDateTime();
setInterval(() => displayDateTime(), 100);

const userName = document.querySelector("#username");

const getUser = JSON.parse(localStorage.getItem("users"));
userName.innerText = getUser[0].userName;

//Listening
// const micListeningBtn = document.querySelector("#mic__btn");
// const voiceText = document.querySelector("#voice_text");
// const listeningCircle = document.querySelectorAll(".circle");
// const translating = document.querySelector("#translating");

// let listening = true;
// micListeningBtn.addEventListener("click", () => {
//   //   listening = true;
//   if (listening) {
//     voiceText.innerText = "Listening ...";
//     listeningCircle[0].classList.toggle("circle-animate");
//     translating.innerText = "";
//     listening = false;
//   } else {
//     voiceText.innerText = "Click and Say Something ...";
//     listeningCircle[0].classList.toggle("circle-animate");
//     translating.innerText = "translating ...";
//     listening = true;
//   }
// });
