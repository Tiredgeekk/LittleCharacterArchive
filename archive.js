/* ==========================================================
   YOUR CHARACTER SHELF
   Add, remove, or edit characters in the list below.
   Each character needs a name, category, and page link.
   ========================================================== */

const characters = [
  // ADD YOUR FIRST CHARACTER HERE by copying this example and removing the //.
  // {
  //   name: "Character Name",
  //   subtitle: "A short quote, title, or little description.",
  //   category: "original", // Use: original, dnd, or fandom
  //   species: "Species",
  //   page: "characters/your-character.html",
  //   image: "assets/characters/your-character/headshot.jpg",
  //   accent: "#b77d83",
  //   paper: "#ead8d1"
  // },
];

const grid = document.getElementById("character-grid");
const searchInput = document.getElementById("character-search");
const filterButtons = document.querySelectorAll(".filter-button");
const emptyMessage = document.getElementById("empty-message");

let activeFilter = "all";

function makeCharacterCard(character) {
  const card = document.createElement("a");
  card.className = "book-card";
  card.href = character.page;
  card.style.setProperty("--card-accent", character.accent || "#b77d83");
  card.style.setProperty("--card-paper", character.paper || "#ead8d1");

  const cover = document.createElement("div");
  cover.className = "book-cover";

  if (character.image) {
    const image = document.createElement("img");
    image.src = character.image;
    image.alt = `Portrait of ${character.name}`;
    cover.appendChild(image);
  } else {
    const placeholder = document.createElement("div");
    placeholder.className = "book-cover-placeholder";
    placeholder.textContent = "✿ Add a character portrait here ✿";
    cover.appendChild(placeholder);
  }

  const ribbon = document.createElement("span");
  ribbon.className = "book-ribbon";
  ribbon.textContent = character.category || "character";
  cover.appendChild(ribbon);

  const title = document.createElement("h3");
  title.textContent = character.name;

  const subtitle = document.createElement("p");
  subtitle.className = "book-subtitle";
  subtitle.textContent = character.subtitle || "";

  const meta = document.createElement("div");
  meta.className = "book-meta";
  const species = document.createElement("span");
  species.textContent = character.species || "Unlisted";
  const category = document.createElement("span");
  category.textContent = character.category || "Other";
  meta.append(species, category);

  card.append(cover, title, subtitle, meta);
  return card;
}

function renderCharacters() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  const filtered = characters.filter(character => {
    const matchesFilter = activeFilter === "all" || character.category === activeFilter;
    const searchable = [
      character.name, character.subtitle, character.species, character.category
    ].join(" ").toLowerCase();
    return matchesFilter && searchable.includes(searchTerm);
  });

  grid.replaceChildren(...filtered.map(makeCharacterCard));
  emptyMessage.hidden = filtered.length > 0;
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle("active", item === button));
    renderCharacters();
  });
});

searchInput.addEventListener("input", renderCharacters);
renderCharacters();
