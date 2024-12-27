const skills = [
    "C#",
    "JavaScript",
    "TypeScript",
    "HTML",
    "React",
    "Vue",
    "Angular",
    "CSS",
    "Tailwind",
    "Node.js/Express",
    "Mongoose",
    ".NET",
    "NoSQL",
    "MongoDB",
    "SQL",
    "Postgresql",
    "MySQL",
    "Git/GitHub",
    "Azure DevOps",
    "Cypress",
    "Mocha"
  ];
  
  const skillsContainer = document.querySelector('.skills');
  
  skills.forEach(skill => {
    const skillDiv = document.createElement('div');
    skillDiv.classList.add('skill');
    skillDiv.textContent = skill;
    skillsContainer.appendChild(skillDiv);
  });