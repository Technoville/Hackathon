"strict";

const btn = document.querySelector("#mic__btn");
const text = document.querySelector("#translate__eng");
const h1 = document.querySelector("#voice_text");
let animated = document.querySelector(".circle");
let eng_text = document.querySelector("#translate__ibani");

// animated.classList.add("circle-animate");

const speech =
  window.SpeechRecognitionAlternative ||
  window.SpeechRecognition ||
  window.webkitSpeechRecognition;

const speechVoice = new speech();

speechVoice.onstart = function () {
  h1.textContent = "Listening for words...";
  animated.classList.add("circle-animate");
};

speechVoice.onresult = function (event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  text.textContent = transcript;
  animated.classList.remove("circle-animate");
  read(transcript);
  h1.textContent = "translation done..";
};
btn.addEventListener("click", () => {
  speechVoice.start();
});

function read(message) {
  const speech = new SpeechSynthesisUtterance();

  speech.text = "Sorry! that word is not in ibani";

  if (message.includes("worthless goods")) {
    const eng = "gbalagbálányé";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("stone")) {
    const eng = "dapiri";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("firewood")) {
    const eng = "fịnị ";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("equality")) {
    const eng = "gbasí";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("person")) {
    const eng = "kini";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("dog")) {
    const eng = "obiri";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("blessing")) {
    const eng = "ibikarịsúó";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("iron")) {
    const eng = "siki";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("skin")) {
    const eng = "ojuapara";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("ear")) {
    const eng = "biri";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("eye") || message.includes("I")) {
    const eng = "torumgbsolu";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("tongue")) {
    const eng = "beie";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("tooth")) {
    const eng = "Aka";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("knee")) {
    const eng = "buosibi";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("hand")) {
    const eng = "bara";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("drink")) {
    const eng = "bu";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("see")) {
    const eng = "ari";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("come")) {
    const eng = "bo";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("die")) {
    const eng = "fi";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("sun")) {
    const eng = "irua";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("star")) {
    const eng = "lolia";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("fire")) {
    const eng = "fini";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("tiger")) {
    const eng = "siri";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("how much")) {
    const eng = "ndẹé";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("night")) {
    const eng = "di";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("the reign of a king")) {
    const eng = "ámádá";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("full")) {
    const eng = "bi";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("new")) {
    const eng = "iwo";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("name")) {
    const eng = "ErE";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("come")) {
    const eng = "bu";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("lion")) {
    const eng = "oku";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("think")) {
    const eng = "koromá";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("money")) {
    const eng = "igúanga";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("brother")) {
    const eng = "mbiré";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("sister")) {
    const eng = "mbịrá";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("blood")) {
    const eng = "mbịnyé";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("fish")) {
    const eng = "ábásịlárị";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("good morning everyone")) {
    const eng = "Íbáāmá kíní mámgba";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("good morning")) {
    const eng = "Íbaama";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("how are you")) {
    const eng = "toro";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("don be angry")) {
    const eng = "Ịganị má";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("village")) {
    const eng = "káláámā";
    speech.text = eng;
    eng_text.textContent = eng;
  } else if (message.includes("what do you think about faith")) {
    const eng = "Faith is my master and the creator of me";
    speech.text = eng;
    eng_text.textContent = eng;
  }
  speech.volume = 1;
  window.speechSynthesis.speak(speech);
}
