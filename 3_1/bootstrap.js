function changeColor() {
  const text = document.getElementById('change');
  text.style.color = "blue";
  setTimeout(function() {
    text.style.color = "black";
  },3000);
}
