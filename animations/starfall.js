const travel = 20;
const maxStars = 20;

const starfall = document.createElement("div");
starfall.setAttribute("id", "starfall");
document.body.insertAdjacentElement("afterbegin", starfall);

for (i = 0; i < maxStars; i++) {
  const delay = Math.floor(Math.random() * 10000);
  setTimeout(createFallingStar, delay);
}

function createFallingStar() {
  var x = Math.floor(Math.random() * 100);
  if (x > 90 - travel) x -= travel;

  const star = document.createElement("div");

  star.setAttribute("class", "star")
  star.animate([
    {
      opacity: 0.15,
      transform: 'translateX(' + x + 'vw) translateY(0vh)'
    },
    { opacity: 1.0 },
    { opacity: 0.5 },
    { opacity: 0.1 },
    {
      opacity: 0,
      transform: 'translateX(' + (x + travel) + 'vw) translateY(95vh)'
    }
  ], {
    duration: 4000,
    iterations: Infinity
  });
  starfall.insertAdjacentElement("afterbegin", star);
}