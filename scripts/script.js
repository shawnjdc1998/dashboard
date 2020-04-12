//Homepage Time of Day

let pageHeader = document.getElementById("page-title");

let pageTitle = function () {
  let day = new Date();
  let hr = day.getHours();
  if (hr == 1) {
    pageHeader.innerText = "Good morning! 1AM Koala must sleep!";
  }
  if (hr == 2) {
    pageHeader.innerText = "Hey, it is past 2AM! Its past koala bedtime!";
  }
  if (hr == 3) {
    pageHeader.innerText = "Hey, it is after 3AM! Are you a vampire koala!";
  }
  if (hr == 4) {
    pageHeader.innerText = "4AM? Papa is mad you are awake?";
  }
  if (hr == 5) {
    pageHeader.innerText = "Whoa! Its too early to be awake Kentuco!";
  }
  if (hr == 6) {
    pageHeader.innerText = "Hey, isn't it too early to be using your computer";
  }
  if (hr == 6 || hr == 7 || hr == 8 || hr == 9 || hr == 10) {
    pageHeader.innerText = "Good Morning Kentuco! Have a good day!";
  }
  if (hr == 11) {
    pageHeader.innerText = "11AM... Is it time for lunch yet?";
  }
  if (hr == 12) {
    pageHeader.innerText = "NOON! Great, it must be time for leafs!";
  }
  if (hr == 13) {
    pageHeader.innerText = "Lunch time lazy hour!";
  }
  if (hr == 14) {
    pageHeader.innerText = "It's 2PM. Have you eaten lunch yet?";
  }
  if (hr == 15) {
    pageHeader.innerText = "3PM, what should I be doing?";
  }
  if (hr == 16) {
    pageHeader.innerText = "4 o' clock! Tick Tock";
  }
  if (hr == 17) {
    pageHeader.innerText = "Kentuco, its almost dinner time! Get washed up.";
  }
  if (hr == 18) {
    pageHeader.innerText = "Kentuco, its dinner time! Get to eating!";
  }
  if (hr == 19) {
    pageHeader.innerText = "Kentuco, its late dinner time! Have you eaten?";
  }
  if (hr == 20) {
    pageHeader.innerText = "Good Evening! Time to call sh0rn.";
  }
  if (hr == 21) {
    pageHeader.innerText = "Bedtime soon, start relaxing your day more.";
  }
  if (hr == 22) {
    pageHeader.innerText = "Tick Tock Shorn is about to wake.";
  }
  if (hr == 23) {
    pageHeader.innerText = "It's almost midnight...Aren't you sleepy yet?";
  }
  if (hr == 24) {
    pageHeader.innerText = "Midnight! Time for Koala's to rest.";
  }
};

pageTitle();
setInterval(pageTitle, 1000);

//Date and Time

let timeOfDay = () => {
  let date = new Date();
  let dateString = date.toDateString();
  let pageDate = document.getElementById("page-date");

  pageDate.innerHTML = dateString;

  let timeString = date.toLocaleTimeString();
  let pageTime = document.getElementById("page-time");

  pageTime.innerText = timeString;
};

timeOfDay();
setInterval(timeOfDay, 1000);

//To Do List App

// let todoItems = [];

// function addTodo(text) {
//   const todo = {
//     text,
//     checked: false,
//     id: Date.now(),
//   };
// }

// todoItems.push(todo);
// console.log(todoItems);
