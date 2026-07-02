
window.onload = function () {
    alert("Welcome to Rwanda Market Price Checker!");
};


const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.style.color = "yellow";
        link.style.fontWeight = "bold";
    }
});
const date = new Date();
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

const dateText = document.createElement("p");
dateText.textContent = "Today: " + date.toLocaleDateString("en-US", options);
dateText.style.color = "white";
dateText.style.textAlign = "center";
dateText.style.fontWeight = "bold";

document.querySelector(".container").prepend(dateText);