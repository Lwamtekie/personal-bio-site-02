const projects = [
  {
      title: "Product Cards", 
      screenshot: "https://github.com/Lwamtekie/product-cardsraw=true", 
      description: "Product cards using html, css, and flexbox for positioning", 
      technologiesUsed: "HTML, CSS, Version Control with Github",
      available: true,
      url: "https://github.com/Lwamtekie/product-cards",
      githubUrl: "https://github.com/Lwamtekie/product-cards",
    }
  ]
  const printToDom = (divId, textToPrint) => {
      const selectedDiv=document.getElementById(divId);
      selectedDiv.innerHTML = textToPrint;
  };
  
  const buildProjects = () => {
      let domString = '';
      projects.forEach ((project) => {
          domString += `<div class="projectDiv">`;
          domString += `<p class="pjtitle">${project.title}</p>`;
          domString += `<p><img class= "screenshot" src=${project.screenshot}></p>`;
          domString += `<p class="pjdescription">${project.description}</p>`;
          domString += `<p class="pjtech">${project.technologiesUsed}</p>`;
          domString += `<p class="pjlink">Check it out <a href={project.title}>HERE</a></p>`;
          domString += `<p class="pjlink1">View my <a href=${project.githubUrl}> code</a></p>`;
          domString += `</div>`;
     
          if (project.available === true) {
          printToDom('array',domString);
      }
  });
  };
  
  
  
  const init = () => {
      buildProjects();
  }
  
  init();
  