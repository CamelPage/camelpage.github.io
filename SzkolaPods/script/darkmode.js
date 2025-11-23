// Js-Cookies Extension
function setUserPreference(key, value) {
  document.cookie = `${key}=${value}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
}

function getUserPreference(key) {
  const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
  for (const cookie of cookies) {
    const [cookieKey, cookieValue] = cookie.split("=");
    if (cookieKey === key) {
      return cookieValue;
    }
  }
  return null;
}

function toggleDarkMode() {
  const body = document.querySelector("body");
  const sections = document.querySelectorAll("section");
  body.classList.toggle("dark-mode");
  sections.forEach((section) => section.classList.toggle("dark-mode"));

  const isDarkModeEnabled = body.classList.contains("dark-mode");

  setUserPreference("darkMode", isDarkModeEnabled ? "true" : "false");
}

document.addEventListener("DOMContentLoaded", function () {
  const darkModeEnabled = getUserPreference("darkMode");
  if (darkModeEnabled === "true") {
    toggleDarkMode();
  }
});


function reload() {
  window.location.href = "./";
}
function reload(href) {
  window.location.href = href;
}

// function RandomAd() {

//   let adlist = ["https://fakeimg.pl/600x400?text=1","https://fakeimg.pl/600x400?text=2","https://fakeimg.pl/600x400?text=3","https://fakeimg.pl/600x400?text=4","https://fakeimg.pl/600x400?text=5","https://fakeimg.pl/600x400?text=6","https://fakeimg.pl/600x400?text=7","https://fakeimg.pl/600x400?text=8","https://fakeimg.pl/600x400?text=9","https://fakeimg.pl/600x400?text=10"]
  
//   let RandIndex = Math.floor(Math.random() * 10 + 1);

//   document.getElementById('ad-href').href = adlist[RandIndex-1];
//   document.getElementById('ad-img').src = "https://fakeimg.pl/600x400?text=Reklama-" + RandIndex;



// }

