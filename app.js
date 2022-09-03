// local reviews data
const reviews = [
  {
    id: 1,
    name: "Xi Tang",
    job: "Artist",
    img:
      "./person-1.jpeg",
    text:
      "I'm a fan of Van Gogh. I like the life in his paiting. My next goal\
      is to create a 3D paper art for his 'Starry Night'."
  },
  {
    id: 2,
    name: "Mo Tang",
    job: "Bubba Lover",
    img:
      "./person-2.jpeg",
    text:
      "I am a fan of black sugar bubba and fruity tea. My favorite is Lychee\
      Oolong from Gong Cha and Pink Drink from Starbucks."
  },
  {
    id: 3,
    name: "Liz Tang",
    job: "World Explorer",
    img:
      "./person-3.jpeg",
    text:
      "I believe life should not be wasted."
  },
];
const headcount = reviews.length;
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("info");

const prev_btn = document.querySelector(".prev-button");
const next_btn = document.querySelector(".next-button");
const random_btn = document.querySelector(".rand-btn");

const getRandNumber = () => {
  return Math.floor(Math.random() * headcount);
};

let idNumber = getRandNumber();

window.addEventListener("DOMContentLoaded", () => {
  showPerson(idNumber);
});

const showPerson = (idNumber) => {
  const item = reviews[idNumber];
  img.src = item.img;
  author.textContent = item.author;
  job.textContent = item.job;
  text.textContent = item.text;
}

prev_btn.addEventListener("click", () => {
  idNumber--;
  if(idNumber >= 0){
    idNumber %= headcount;
  } else {
    idNumber += headcount;
  }
  showPerson(idNumber);
});

next_btn.addEventListener("click", () => {
  idNumber++;
  idNumber %= headcount;
  showPerson(idNumber);
});
