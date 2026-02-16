export default function loadContact() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const container = document.createElement("div");
  container.classList.add("contact");

  const h2 = document.createElement("h2");
  h2.textContent = "Contact Us";
  container.appendChild(h2);

  const info = document.createElement("div");
  info.classList.add("contact-info");
  info.innerHTML = `
    <div class="contact-card">
      <h3>Address</h3>
      <p>123 Odin Lane</p>
      <p>Midgard, AS 90210</p>
    </div>
    <div class="contact-card">
      <h3>Phone</h3>
      <p>123-4567-890</p>
    </div>
    <div class="contact-card">
      <h3>Email</h3>
      <p>reservations@odinrestaurant.com</p>
    </div>
  `;

  const formWrapper = document.createElement("div");
  formWrapper.classList.add("contact-form-wrapper");

  const formTitle = document.createElement("h3");
  formTitle.textContent = "Send Us a Message";
  formWrapper.appendChild(formTitle);

  const form = document.createElement("form");
  form.classList.add("contact-form");
  form.innerHTML = `
    <label for="name">Name</label>
    <input type="text" id="name" placeholder="Your name">
    <label for="email">Email</label>
    <input type="email" id="email" placeholder="you@example.com">
    <label for="message">Message</label>
    <textarea id="message" rows="5" placeholder="How can we help?"></textarea>
    <button type="submit">Send</button>
  `;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! We'll get back to you soon.");
    form.reset();
  });

  formWrapper.appendChild(form);
  container.appendChild(info);
  container.appendChild(formWrapper);
  content.appendChild(container);
}
