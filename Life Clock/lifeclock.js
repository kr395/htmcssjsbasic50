let minDiv = document.getElementById("min");
let minspan = document.getElementById("mins")

setInterval(function() {
  let date = new Date();
  let min = date.getSeconds();
  minspan.innerText= min;
  let percent = Math.floor((min/60)*100)
  minDiv.style.width = `${percent}%`;

},1000)

