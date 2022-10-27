document.addEventListener("DOMContentLoaded", () => {
  let icon = document.querySelector(".fa-solid");
  let header = document.querySelector("h1");
  icon.addEventListener("click", () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
    document.body.classList.toggle("tour");
    icon.classList.toggle("fa-ring");
    icon.classList.toggle("fa-volcano");
    icon.classList.toggle("spin");
    header.classList.toggle("smack");
    // if (header.textContent.includes("Good Morning!")) {} (otra versión)
    if (header.textContent == "Es miio!") {
      header.textContent = "Mi tesooooro!";
    } else {
      header.textContent = "Es miio!";
    }

    console.log(header.textContent);
  });
});
