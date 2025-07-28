let skills = [
  {
    name: "HTML",
    level: "Moderate",
    img: "./img/html.png",
    href: "https://html.spec.whatwg.org/",
  },
  {
    name: "CSS",
    level: "Basic",
    img: "./img/css.png",
    href: "https://www.w3.org/Style/CSS/Overview.en.html",
  },
  {
    name: "Tailwind",
    level: "Basic",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
    href: "https://tailwindcss.com/",
  },
  {
    name: "ENGLISH-B2",
    level: "Advance",
    img: "./img/eng.png",
    href: "https://cert.efset.org/pLW251",
  },
];

let container_s = document.querySelector("#skills");

for (let i = 0; i < skills.length; i++) {
  container_s.innerHTML += `
          <a
          href="${skills[i].href}"
          title="${skills[i].level}" 
          target="_blank"
          class="card-categoria bg-gray-200 dark:bg-gray-900 flex flex-col items-center justify-center p-4 rounded-2xl sm:p-7 max-w-[220px] min-h-[250px] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg shadow-cyan-500/30"
        >
          <img src="${skills[i].img}" class="w-32 rounded-2xl mb-2" />
          <h2 class="dark:text-white text-2xl">${skills[i].name}</h2>
        </a>
            `;
}
export { container_s };