// Here we are fabricating script file for My Portfolio


// Literals
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const grid = document.querySelector(".projects-grid");
const timeLineContainer = document.querySelector(".timeline");

// Literal-Intel
const projects = [
    {
        title: "Healthy Programmer App",
        description: "A Tkinter-based wellness tracker for coders.",
        image: "stash/healthy.png",
        link: "https://github.com/thecodedhuman/healthy-programmer"
    },
    {
        title: "KartavyaFEED",
        description: "Daily Current Affairs tool for UPSC Aspirants",
        image: "https://res.cloudinary.com/dbjhbabjd/image/upload/v1763019048/KartavyaFEED_README_Banner_ubh57a.jpg",
        link: "https://github.com/TheCodedHuman/KartavyaFeed"
    },
    {
        title: "Line Follower Bot",
        description: "Arduino and Sensor Based IoT Project",
        image: "https://res.cloudinary.com/dbjhbabjd/image/upload/v1763019167/banner_bpfqbs.png",
        link: "https://github.com/TheCodedHuman/Minor_2-Line_Follower_Bot"
    }
];

const timeLineData = [
    {
        year: "2020",
        title: "Programming Journey Started",
        description: "Explored basic logic, syntax, and curiosity-driven coding."
    },
    {
        year: "2021",
        title: "Built First Personal Projects",
        description: "Used Python and MySQL to create simple applications."
    },
    {
        year: "2022",
        title: "Creative Expansion",
        description: "Learned Photoshop and video editing to support content creation."
    },
    {
        year: "2023",
        title: "Content Creation Era",
        description: "Launched YouTube channel: KhelKaTadka → BroTohProHai."
    },
    {
        year: "2024",
        title: "CPCT Certified",
        description: "Cleared CPCT exam and refined typing + system skills."
    },
    {
        year: "2025",
        title: "Web Dev & Java",
        description: "Completed web development and began learning Java."
    },
    {
        year: "2026",
        title: "AI/ML Mastery",
        description: "Aiming to become professional in AI/ML and start earning."
    }
];



// Listeners
menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// Iterators
projects.forEach(project => {
    
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
        <img src=${project.image} alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href=${project.link} target="_blank" class="project-link">View Project</a>
    `;
    grid.appendChild(card);
});

timeLineData.forEach(item => {

    const block = document.createElement("div");
    block.className = "timeline-item";
    block.innerHTML = `
    <div class="timeline-year">${item.year}</div>
    <div class="timeline-content">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </div>`;
    timeLineContainer.appendChild(block);
});

