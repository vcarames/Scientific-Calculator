const body = document.querySelector("body");

const firstTheme = document.getElementById("first");
const secondTheme = document.getElementById("second");
const thirdTheme = document.getElementById("third");

function changeTheme(themeName) {
  document.getElementById("theme").href = `css/${themeName}`;
}

firstTheme.addEventListener("click", () => {
  changeTheme("theme--01.css");
});

secondTheme.addEventListener("click", () => {
  changeTheme("theme--02.css");
});

thirdTheme.addEventListener("click", () => {
  changeTheme("theme--03.css");
});
