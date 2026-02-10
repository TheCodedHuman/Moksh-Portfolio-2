// Here we are fabricating script file for My Portfolio


// Literals
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const grid = document.querySelector(".projects-grid");
const certificatesGrid = document.querySelector(".certificates-grid");
const timeLineContainer = document.querySelector(".timeline");

// Literal-Intel
const projects = [
    {
        title: "Kivy Formatter",
        description: "A Dev-Tool for Kivy Developers",
        image: "https://res.cloudinary.com/dbjhbabjd/image/upload/v1770741879/github_banner_usljrc.jpg",
        link: "https://github.com/TheCodedHuman/Kivy-Formatter"
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

const certificates = [
    {
        title: "Full-Stack Web Development",
        issuer: "GrowthSquare",
        date: "3rd November 2025",
        link: "https://drive.google.com/file/d/1FKYzlQoGxYQZLTqoIxeO06jY4YfBaQnb/view"
    },
    {
        title: "Computer Proficiency Certification Test",
        issuer: "State Government",
        date: "16th March 2024",
        link: "https://drive.google.com/file/d/1G7ANGde5bgutuGyB6RurwL2DzwFhUox2/view"
    },
    {
        title: "Python For Beginners",
        issuer: "Simplilearn",
        date: "21st December 2023",
        link: "https://drive.google.com/file/d/1Csdi-dMVIMS0q93F6tZMk6-fk_2qHOMa/view"
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

certificates.forEach(cert => {
    
    const card = document.createElement("div");
    card.className = "certificate-card";
    card.innerHTML = `
        <h3>${cert.title}</h3>
        <p class="issuer">Issued by: <strong>${cert.issuer}</strong></p>
        <p class="cert-date">${cert.date}</p>
        <a href=${cert.link} target="_blank" class="cert-link">View Certificate</a>
    `;
    certificatesGrid.appendChild(card);
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

