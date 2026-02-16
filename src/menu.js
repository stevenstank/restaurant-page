export default function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const container = document.createElement("div");
  container.classList.add("menu");

  const h2 = document.createElement("h2");
  h2.textContent = "Our Menu";
  container.appendChild(h2);

  const menuItems = [
    {
      category: "Starters",
      items: [
        { name: "Samosa", price: "₹150", desc: "Crispy pastry filled with spiced potatoes, peas & cumin." },
        { name: "Paneer Tikka", price: "₹350", desc: "Marinated cottage cheese grilled in a tandoor with peppers & onions." },
        { name: "Chicken 65", price: "₹400", desc: "Spicy deep-fried chicken bites tossed with curry leaves & chillies." },
      ],
    },
    {
      category: "Mains",
      items: [
        { name: "Butter Chicken", price: "₹550", desc: "Tender chicken in a rich, creamy tomato-butter gravy." },
        { name: "Dal Makhani", price: "₹400", desc: "Slow-cooked black lentils simmered with butter & cream." },
        { name: "Mutton Rogan Josh", price: "₹650", desc: "Aromatic Kashmiri lamb curry with whole spices & saffron." },
        { name: "Palak Paneer", price: "₹400", desc: "Cottage cheese cubes in a velvety spinach & spice gravy." },
        { name: "Biryani", price: "₹500", desc: "Fragrant basmati rice layered with spiced meat and caramelized onions." },
      ],
    },
    {
      category: "Breads",
      items: [
        { name: "Garlic Naan", price: "₹80", desc: "Soft tandoori bread brushed with garlic butter." },
        { name: "Butter Roti", price: "₹50", desc: "Whole wheat flatbread finished with a touch of butter." },
        { name: "Laccha Paratha", price: "₹90", desc: "Flaky, layered whole wheat bread cooked on a tawa." },
      ],
    },
    {
      category: "Desserts",
      items: [
        { name: "Gulab Jamun", price: "₹200", desc: "Golden fried milk dumplings soaked in cardamom-rose syrup." },
        { name: "Rasmalai", price: "₹250", desc: "Soft paneer discs in chilled saffron & cardamom milk." },
        { name: "Kulfi", price: "₹180", desc: "Traditional Indian frozen dessert with pistachios & saffron." },
      ],
    },
  ];

  menuItems.forEach((section) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("menu-section");

    const catHeader = document.createElement("h3");
    catHeader.textContent = section.category;
    sectionDiv.appendChild(catHeader);

    section.items.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("menu-card");

      const top = document.createElement("div");
      top.classList.add("menu-card-top");

      const itemName = document.createElement("span");
      itemName.classList.add("item-name");
      itemName.textContent = item.name;

      const itemPrice = document.createElement("span");
      itemPrice.classList.add("item-price");
      itemPrice.textContent = item.price;

      top.appendChild(itemName);
      top.appendChild(itemPrice);

      const itemDesc = document.createElement("p");
      itemDesc.classList.add("item-desc");
      itemDesc.textContent = item.desc;

      card.appendChild(top);
      card.appendChild(itemDesc);
      sectionDiv.appendChild(card);
    });

    container.appendChild(sectionDiv);
  });

  content.appendChild(container);
}
