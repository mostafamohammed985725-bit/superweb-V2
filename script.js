fetch("data.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("projects");
    data.forEach(project => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.type}</p>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">Visit</a>
      `;
      container.appendChild(card);
    });
  });