const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };
  const projects = [
    {
      title: "Product Cards",
      screenshot:
        "https://github.com/Lwamtekie/product-cards/blob/master/screenshot/screencapture-127-0-0-1-8082-2019-05-18-12_05_01.png",
      description: "Product cards using html, css, and flexbox for positioning",
      technologiesUsed: "HTML and CSS",
      available: true,
      url: "https://github.com/Lwamtekie/product-cards"
    },
    {
      title: "Sorting-hat",
      screenshot:
        "https://github.com/Lwamtekie/Sorting-hat/blob/master/screenshot/Screen%20Shot%202019-05-02%20at%206.20.56%20PM.png",
      description:
        " In this project we used the buttons in index.html to work by using the eventlisner function in java script. And by building the container in the domString builder in the javascript. ",
      technologiesUsed: " index.html, main.js, main.css",
      available: true,
      url: "https://github.com/Lwamtekie/Sorting-hat"
    },
    {
      title: "Temperature-Converter",
      screenshot:
        "https://github.com/Lwamtekie/Temperature-Converter/blob/master/screenshot/screencapture-127-0-0-1-8081-2019-05-21-11_43_18.png",
      description:
        "The application show the conversion of temperature from fahrenheit to celsius, and celsius to fahrenheit.",
      technologiesUsed: "index.html, main.js, main.css",
      available: true,
      url: "https://github.com/Lwamtekie/Temperature-Converter"
    },
    {
      title: "favorite Places",
      screenshot:
        "https://github.com/Lwamtekie/favorite_places/blob/master/screenshots/screencapture-127-0-0-1-8083-2019-05-18-12_42_26.png",
      description:
        "This projectis different form the pervious assignments, because all the data for favorite places is in Json file not in main.js. So main.js has only the Print To Dom and the domString to style the bootstrap card. The styling and color is in main.css.",
      technologiesUsed: "index.html, main.css, main.js, json.data(db)",
      available: true,
      url: "https://github.com/Lwamtekie/favorite_places"
    },
    {
      title: "sandwich-maker",
      screenshot:
        "https://github.com/Lwamtekie/sandwich-maker/blob/master/screenshot/screencapture-127-0-0-1-8080-2019-05-16-23_38_05.png",
      description:
        "The Foodie Club is similar with the online checkout style cart. it helps to secure the final price by passing information through modules.",
      technologiesUsed:
        "html, css and javascript modular javascript import and export to pass information between modules more secure information approach",
      available: true,
      url: "https://github.com/Lwamtekie/sandwich-maker"
    }
  ];

  const bioHideAndShow = () => {
    const bioDiv = document.getElementById('AboutPage');
    const projectDiv = document.getElementById('ProjectPage');
    const techDiv = document.getElementById('TechnologiesPage');
    const contactLinkDiv = document.getElementById('ContactPage');
    bioDiv.classList.remove('hide');
    projectDiv.classList.add('hide');
    techDiv.classList.add('hide');
    contactLinkDiv.classList.add('hide');
      
    } 
    const contactsLinkHideAndShow = () => {
        const bioDiv = document.getElementById('AboutPage');
        const projectDiv = document.getElementById('ProjectPage');
        const techDiv = document.getElementById('TechnologiesPage');
        const contactLinkDiv = document.getElementById('ContactPage');
        bioDiv.classList.add('hide');
        projectDiv.classList.add('hide');
        techDiv.classList.add('hide');
        contactLinkDiv.classList.remove('hide');
        
      } 
    
  const projectHideAndShow = () => {
    const bioDiv = document.getElementById('AboutPage');
    const projectDiv = document.getElementById('ProjectPage');
    const techDiv = document.getElementById('TechnologiesPage');
    const contactLinkDiv = document.getElementById('ContactPage');
    bioDiv.classList.add('hide');
    projectDiv.classList.remove('hide');
    techDiv.classList.add('hide');
    contactLinkDiv.classList.add('hide');
    
  } 
  const techHideAndShow = () => {
    const bioDiv = document.getElementById('AboutPage');
    const projectDiv = document.getElementById('ProjectPage');
    const techDiv = document.getElementById('TechnologiesPage');
    const contactLinkDiv = document.getElementById('ContactPage');
    bioDiv.classList.add('hide');
    projectDiv.classList.add('hide');
    techDiv.classList.remove('hide');
    contactLinkDiv.classList.add('hide');
  } 
  const clickEvents = () => {
    const bioLink = document.getElementById('aboutLink');
    const projectLink= document.getElementById('projectLink');
    const techLink = document.getElementById('techLink');
    const contactLink = document.getElementById('contactLink')
    bioLink.addEventListener('click', bioHideAndShow);
    projectLink.addEventListener('click', projectHideAndShow);
    techLink.addEventListener('click', techHideAndShow);
    contactLink.addEventListener ('click', techHideAndShow);
  }
  const createProjectCard = (array) => {
    let domString = "";
    array.forEach(project => {
      domString += `<div class="projectDiv">`;
      domString += `<p class="title">${project.title}</p>`;
      // domString += `<p><img class= "screenshot" src=${project.screenshot}></p>`;
      domString += `<p class="description">${project.description}</p>`;
      domString += `<p class="tech">${project.technologiesUsed}</p>`;
      domString += `<p class="link">Check it out <a href={project.url}>HERE</a></p>`;
      domString += `</div>`;
    })
    printToDom('ProjectPage', domString);
    clickEvents();
  };
  const init = () => {
    createProjectCard(projects);
  };
  init();
  