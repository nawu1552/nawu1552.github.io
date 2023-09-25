const button = document.getElementById("show-resume");
const image = document.getElementById("resume");
var show_resume = "Show Resume";
var hide_resume = "Hide Resume";
button.addEventListener("click", () => {
  image.hidden = !image.hidden;
  if (button.innerText === "Show Resume") 
  {
    button.innerText = "Hide Resume";
  } 
  else 
  {
    button.innerText = "Show Resume";
  }
});