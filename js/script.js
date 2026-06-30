console.log("Welcome to JavaScript 👋");

window.onload = function () {
    alert("Welcome to my website!");
};

function changeText() {
    const title = document.getElementById("title");
    if (title) {
        title.innerHTML = "JavaScript changed this text 🎉";
    }
}

function changeColor() {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "lightblue"
            ? "white"
            : "lightblue";
}