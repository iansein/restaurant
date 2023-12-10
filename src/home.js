export function home() {
  const $content = document.querySelector("#content");
  const $container = document.createElement("div");
  const $img = document.createElement("img");
  const $welcomePara = document.createElement("p");

  $img.src = "./assets/main.png";
  $img.classList.add("home-img");

  $container.classList.add("home-container");
  $welcomePara.textContent = `
  Welcome to Papa's Pizzeria! Inspired by the game, our pizzas are a flavor journey. From classics to crazy, every slice is a tasty adventure. Join us for good vibes, fresh eats, and pizza love! 🍕✨`;
  $welcomePara.classList.add("welcome-para");

  $content.appendChild($container);
  $container.appendChild($img);
  $container.appendChild($welcomePara);
}
