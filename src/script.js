const linksCont = document.getElementById("links");
const links = Array.from(linksCont.children);
const classes = [
  "text-[#AD775B]",
  "underline",
  "decoration-2",
  "underline-offset-6",
];

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((e) => {
      e.classList.remove(...classes);
    });

    link.classList.add(...classes);
  });
});
