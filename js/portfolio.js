const projects = [
    {
        title: "Evolution Designers LLP",
        image: "images/evolution-designers-logo.webp",
        url: "https://evolution-designers.com",
        desc: "A partnership I founded specialising in website creation.",
    },
    {
        title: "United Homes Website",
        image: "images/utdhomes-project.png",
        url: "https://www.utdhomes.co.uk",
        desc: "A website I made for an estate agents in Oughtibridge.",
    },
    {
        title: "City Road Community Childcare Website",
        image: "images/crcc-project.png",
        url: "https://cityroadchildcare.co.uk",
        desc: "A website I made for a childcare establishment in Sheffield.",
    },
    {
        title: "Queen of Diamonds Casino Hire Project",
        image: "images/queenofdiamonds-project.png",
        url: "http://www.queenofdiamondscasino.co.uk",
        desc: "A website I made for a casino hire service in Doncaster.",
    }
];

document.addEventListener("DOMContentLoaded", function () {
    let portfolioContainer = document.getElementById("portfolio-container");
    projects.forEach((project) => {
        portfolioContainer.innerHTML += `
            <a href="${project.url}" class="project" target="_blank">
                <img src="${project.image}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p class="project-desc">${project.desc}</p>
            </a>
        `;
    });
});