let start_time = new Date().getTime();

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i=0; i<6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color;
}


function make_shape_visible () {
  shape.style.top = (Math.random() * 800)+"px";
  shape.style.left = (Math.random() * 1800)+"px";
  shape.style.width = (Math.random() * 200 + 50) + "px";
  shape.style.height = (Math.random() * 200 + 50) + "px";
  shape.style.backgroundColor = getRandomColor();

  if (Math.random() < 0.1) {
    shape.style.borderRadius = "50%";
    shape.style.backgroundColor = getRandomColor();//"green";
    shape.style.borderBottom = "0 solid " + getRandomColor();
  }
  else if (Math.random() >= 0.2 && Math.random() <= 0.3) {
    shape.style.width = "0";
    shape.style.height = "0";
    shape.style.borderLeft = Math.random()+90 + "px solid transparent";
    shape.style.borderRight = Math.random()+90 + "px solid transparent";
    shape.style.borderBottom = Math.random()+80 + "px solid" + getRandomColor();
    shape.style.backgroundColor = "transparent";
    shape.style.borderRadius = "0";
  }
  else {
    shape.style.borderBottom = "0 solid" + getRandomColor();
    shape.style.backgroundColor = getRandomColor();
  }

  document.getElementById("shape").style.display = "block";
  start_time = new Date().getTime();
}

setTimeout(make_shape_visible, Math.random() * 500);

document.getElementById("shape").onclick = function() {
  let shape = document.getElementById("shape");
  shape.style.display = "none";

  let finish_time = new Date().getTime();
  let reaction_time = (finish_time - start_time) / 1000;
  document.getElementById("reaction_time").innerHTML = reaction_time + " seconds";
  setTimeout(make_shape_visible, Math.random() * 500);
}
