const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");

ingredients.forEach((ingredients) => {
  const li = document.createElement("li");
  li.textContent = ingredients;
  li.classList.add("item");
  ingredientsList.appendChild(li);
});
