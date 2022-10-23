let color = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
console.log(color);
function flip_color() {
  let color_value = Math.floor(Math.random() * 7);
  console.log("clicked");

  document.getElementById("main-container").style.backgroundColor =
    color[color_value];
  document.getElementById("value").textContent = color[color_value];
}
