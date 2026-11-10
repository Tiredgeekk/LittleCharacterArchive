
/* ==========================================================
   THE LITTLE CHARACTER LIBRARY
   CHARACTER CONNECTIONS DATABASE
   ========================================================== */

/*
  ADD YOUR CHARACTERS HERE.

  Each character needs:
  - id: A unique identifier
  - name: Their display name
  - page: Their profile page
  - image: Their portrait image path (optional)
  - groups: The groups they belong to
  - relationships: Their individual relationships
*/

const archiveCharacters = [

  /*
  {
    id: "avery",
    name: "Avery",
    page: "avery.html",
    image: "assets/characters/avery/portrait.png",
    groups: ["the-triplets"],
    relationships: [
      {
        characterId: "morgan",
        label: "Triplet sibling"
      },
      {
        characterId: "riley",
        label: "Triplet sibling"
      }
    ]
  },
  */

];


/* ==========================================================
   CONNECTION GROUPS
   ========================================================== */

/*
  A group can represent:
  - Families
  - Siblings
  - Friend groups
  - Teams
  - D&D adventuring parties
  - Anything else you can think of!

  Characters can belong to multiple groups.
*/

const archiveGroups = [

  /*
  {
    id: "the-triplets",
    name: "The Triplets",
    description: "Three siblings who share a little more than a birthday.",
    members: ["avery", "morgan", "riley"]
  },
  */

];


/* ==========================================================
   CHARACTER CONNECTION DISPLAY
   ========================================================== */

function renderCharacterConnections() {
  const characterId = document.body.dataset.characterId;
  const container = document.getElementById("character-connection-list");

  if (!characterId || !container) return;

  const currentCharacter = archiveCharacters.find(
    character => character.id === characterId
  );

  if (!currentCharacter) return;

  const groups = archiveGroups.filter(
    group => group.members.includes(characterId)
  );

  container.replaceChildren();

  if (groups.length === 0) {
    const message = document.createElement("p");
    message.className = "section-intro";
    message.textContent = "No connection groups have been added yet.";
    container.appendChild(message);
    return;
  }

  groups.forEach(group => {
    const groupCard = document.createElement("div");
    groupCard.className = "connection-group-card";

    const heading = document.createElement("h3");
    heading.textContent = group.name;

    const description = document.createElement("p");
    description.textContent = group.description || "";

    const members = document.createElement("div");
    members.className = "connection-members";

    group.members.forEach(memberId => {
      if (memberId === characterId) return;

      const member = archiveCharacters.find(
        character => character.id === memberId
      );

      if (!member) return;

      const relationship = currentCharacter.relationships?.find(
        item => item.characterId === memberId
      );

      const link = document.createElement("a");
      link.className = "connection-member";
      link.href = member.page;

      if (member.image) {
        const portrait = document.createElement("img");
        portrait.src = member.image;
        portrait.alt = `Portrait of ${member.name}`;
        link.appendChild(portrait);
      } else {
        const placeholder = document.createElement("span");
        placeholder.className = "connection-placeholder";
        placeholder.textContent = "✿";
        link.appendChild(placeholder);
      }

      const name = document.createElement("strong");
      name.textContent = member.name;

      const label = document.createElement("span");
      label.textContent = relationship?.label || "Connected character";

      const details = document.createElement("span");
      details.className = "connection-member-details";
      details.append(name, label);

      link.appendChild(details);
      members.appendChild(link);
    });

    groupCard.append(heading, description, members);
    container.appendChild(groupCard);
  });
}


/* ==========================================================
   START THE CONNECTIONS SYSTEM
   ========================================================== */

document.addEventListener("DOMContentLoaded", renderCharacterConnections);
