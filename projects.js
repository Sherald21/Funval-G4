//DARK MODE
const toggle = document.getElementById("toggle-dark");
const html = document.documentElement;

if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

let projects = [
  {
    name: "Pet Shelter",
    description: "A website where you will find pets to adopt",
    img: "./img/proj1.png",
    href: "./dia-9/ejercicio/index.html",
  },
  {
    name: "Bookshop",
    description: "Find books by category and buy online",
    img: "./img/proj2.png",
    href: "./dia-10/index.html",
  },
  {
    name: "DessertStore",
    description: "A few comments of a website",
    img: "./img/proj3.png",
    href: "./carrito4/index.html",
  },
];

let container = document.querySelector("#projects");

for (let i = 0; i < projects.length; i++) {
  container.innerHTML += `
          <a
          href="${projects[i].href}"
          target="_blank"
          class="project-1 bg-gray-200 dark:bg-gray-900 flex flex-row items-center justify-center p-4 rounded-2xl sm:p-7 max-w-[400px] min-h-[250px] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg shadow-cyan-500/30"
        >
          <img src=${projects[i].img} class="w-[200px]" />
          <div class="dark:text-white">
            <h1 class ="font-bold text-2xl">${projects[i].name}</h1>
            <p>${projects[i].description}</p>
          </div>
        </a>
            `;
}
export { container };
