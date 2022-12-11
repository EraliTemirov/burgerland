let total = document.querySelector(".total");
let maxsus = document.querySelector("#maxsus");
let cheesebutton = document.querySelector(".cheese");

cheesebutton.addEventListener("click", function () {
  let cheeseimg = document.createElement("img");
  cheeseimg.classList.add("cheeseclass", "blok");
  cheeseimg.src = "./img/cheese.svg";
  maxsus.append(cheeseimg);
  total.textContent++;
  total.textContent++;
  cheeseimg.addEventListener("click", function () {
    document.getElementsByClassName("cheesesclass");
    maxsus.textContent = null;
    total.textContent = 2;

    return 0;
  });
});

let meatbutton = document.querySelector(".meat");

meatbutton.addEventListener("click", function () {
  document.getElementsByClassName("meatclass");
  let meatimg = document.createElement("img");
  meatimg.classList.add("meatclass", "blok");
  meatimg.src = "./img/meat.svg";
  maxsus.append(meatimg);
  total.textContent++;
  total.textContent++;

  meatimg.addEventListener("click", function () {
    document.getElementsByClassName("meatclass");
    maxsus.textContent = null;
    total.textContent = 2;
    return 0;
  });
});

let onionbutton = document.querySelector(".onion");

onionbutton.addEventListener("click", function () {
  document.getElementsByClassName("onionclass");

  let onionimg = document.createElement("img");
  onionimg.classList.add("onionclass", "blok");
  onionimg.src = "./img/onion.svg";
  maxsus.append(onionimg);
  total.textContent++;
  onionimg.addEventListener("click", function () {
    document.getElementsByClassName("onionclass");
    maxsus.textContent = null;
    total.textContent = 2;
    return 0;
  });
});

let saladbutton = document.querySelector(".salad");

saladbutton.addEventListener("click", function () {
  document.getElementsByClassName("saladclass");
  let saladimg = document.createElement("img");
  saladimg.classList.add("saladclass", "blok");
  saladimg.src = "./img/salad.svg";
  maxsus.append(saladimg);
  total.textContent++;

  saladimg.addEventListener("click", function () {
    document.getElementsByClassName("saladclass");
    maxsus.textContent = null;
    total.textContent = 2;
    return 0;
  });
});

let tomatobutton = document.querySelector(".tomato");

tomatobutton.addEventListener("click", function () {
  document.getElementsByClassName("tomatoclass");
  let tomatoimg = document.createElement("img");
  tomatoimg.classList.add("tomatoclass", "blok");
  tomatoimg.src = "./img/tomato.svg";
  maxsus.append(tomatoimg);
  total.textContent++;
  total.textContent++;
  tomatoimg.addEventListener("click", function () {
    document.getElementsByClassName("tomatoclass");
    maxsus.textContent = null;
    total.textContent = 2;
    return 0;
  });
});

let picklebutton = document.querySelector(".pickle");

picklebutton.addEventListener("click", function () {
  let pickleimg = document.createElement("img");
  document.getElementsByClassName("pickleclass");
  pickleimg.classList.add("pickleclass", "blok");
  pickleimg.src = "./img/pickle.svg";
  maxsus.append(pickleimg);
  total.textContent++;
  total.textContent++;

  pickleimg.addEventListener("click", function () {
    document.getElementsByClassName("pikleclass");
    maxsus.textContent = null;
    total.textContent = 2;
    return 0;
  });
});

let clearbutton = document.querySelector(".clear");

clearbutton.addEventListener("click", function () {
  maxsus.textContent = null;
  total.textContent = 2;
});
