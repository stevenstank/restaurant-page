export default function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const container = document.createElement("div");
  container.classList.add("home");

  const hero = document.createElement("div");
  hero.classList.add("hero");

  const h1 = document.createElement("h1");
  h1.textContent = "The Odin Restaurant";

  const tagline = document.createElement("p");
  tagline.classList.add("tagline");
  tagline.textContent = "Authentic Indian flavours, crafted with passion since 1987.";

  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent =
    "Nestled in the heart of the city, The Odin Restaurant brings you an unforgettable journey through the rich and diverse flavours of India. Our chefs blend the finest spices with time-honoured recipes passed down through generations — from smoky tandoori classics to aromatic biryanis and creamy curries. Whether you're craving a sizzling paneer tikka or a comforting bowl of dal makhani, we promise a meal you'll remember.";

  const hours = document.createElement("div");
  hours.classList.add("hours");
  hours.innerHTML = `
    <h2>Hours</h2>
    <p>Monday – Friday: 11am – 10pm</p>
    <p>Saturday – Sunday: 9am – 11pm</p>
  `;

  hero.appendChild(h1);
  hero.appendChild(tagline);
  container.appendChild(hero);
  container.appendChild(description);
  container.appendChild(hours);
  content.appendChild(container);
}
