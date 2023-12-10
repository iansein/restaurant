export function contact() {
  const $content = document.querySelector("#content");
  const $container = document.createElement("div");
  const $contactAddress = document.createElement("p");
  const $contactTel = document.createElement("p");
  const $contactEmailAddress = document.createElement("p");
  const $img = document.createElement("img");

  $img.src = "./assets/contact.png";
  $img.classList.add("contact-img");

  const arrayContact = [$contactAddress, $contactTel, $contactEmailAddress];

  $contactAddress.textContent = `Address: Street 19 Field`;
  $contactTel.textContent = `Telephone: 238288928388`;
  $contactEmailAddress.textContent = `Email Address: ianseindev@gmail.com`;

  $content.appendChild($container);
  $container.appendChild($img);

  arrayContact.forEach((item) => {
    item.classList.add("contact-para");
    $container.appendChild(item);
  });
  $container.classList.add("contact-container");
}
