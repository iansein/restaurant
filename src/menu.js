export function menu() {
  const $content = document.querySelector("#content");
  const $cards = document.createElement("div");
  const $container = document.createElement("div");

  const pizzaData = [
    { title: "Pizza with Pepperoni", price: "$25" },
    { title: "Pizza with Muzzarella", price: "$20" },
    { title: "Pizza with Onions", price: "$35" },
    { title: "Pizza with Rucola", price: "$30" },
    { title: "Pizza with Cheddar", price: "$25" },
    { title: "Pizza with Morron", price: "$40" },
  ];

  for (let i = 0; i < pizzaData.length; i++) {
    const $card = document.createElement("div");

    const $img = document.createElement("img");
    $img.src = `./assets/pizza${i + 1}.jpg`;
    $img.classList.add("img-card");

    const $title = document.createElement("p");
    $title.textContent = pizzaData[i].title;
    $title.classList.add("card-para");

    const $price = document.createElement("p");
    $price.textContent = pizzaData[i].price;
    $price.classList.add("card-para");

    $card.appendChild($img);
    $card.appendChild($title);
    $card.appendChild($price);
    $card.classList.add("card");

    $cards.appendChild($card);
  }

  $content.appendChild($container);
  $container.appendChild($cards);

  $container.classList.add("menu-container");
  $cards.classList.add("cards");
}
