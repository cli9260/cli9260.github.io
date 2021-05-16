const critiques = [
  {
    id: 1,
    name: "Kurosaki Ichigo",
    hobby: "Reading Manga",
    img:
      "bleach.jpeg",
    text:
      "I almost cried. Almost! The movie's a bit slow paced but overall nice action!",
  },
  {
    id: 2,
    name: "Nami",
    hobby: "leisure activities",
    img:
      "nami.jpeg",
    text:
      " The movie was a blast. Delicate graphics + epic soundtrack = so freakin awesome. Definitely would recommend to families and friends.",
  },
  {
    id: 3,
    name: "Doraemon",
    hobby: "Dorayaki, Reading Comics",
    img:
      "doramon.jpeg",
    text:
      "Any movie with food in it can't be bad. 10 out of 10!",
  },
  {
    id: 4,
    name: "SpongeBob",
    hobby: "catching jellyfish and spending time with Patrick",
    img:
      "spongebob.jpg",
    text:
      "Nothing like i've ever seen before! This film is almost as iconic as my laugh! BAWHAWHAHAHHAWHAHWHAWHAHWAWHA! ",
  },
];

const img = document.getElementById("character-img");
const filmcritic = document.getElementById("filmcritic");
const hobby = document.getElementById("hobby");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 2;


window.addEventListener("DOMContentLoaded", function () {
  const item = critiques[currentItem];
  img.src = item.img;
  filmcritic.textContent = item.name;
  hobby.textContent = item.hobby;
  info.textContent = item.text;
});

function showPerson(person) {
  const item = critiques[person];
  img.src = item.img;
  filmcritic.textContent = item.name;
  hobby.textContent = item.hobby;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > critiques.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = critiques.length - 1;
  }
  showPerson(currentItem);
});
randomBtn.addEventListener("click", function () {
  console.log("the random button works");

  currentItem = Math.floor(Math.random() * critiques.length);
  showPerson(currentItem);
});

