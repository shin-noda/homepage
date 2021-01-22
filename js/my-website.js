// Made a class Product so that it's transferable and maintainable
class MainPage {
    constructor(parentElement) {
        // Set the parent element
        // In this assignment, it's .container
        this.parentElement = document.querySelector(parentElement);
    }

    // This sets all addEventListener
    setAllEventListeners() {
        // Clear the local storage
        localStorage.clear();

        // Set the function for home-block1
        this.parentElement.querySelector("#home-block1").addEventListener("click", () => this.processHomeBlock1());

        // Set the function for home-block2
        this.parentElement.querySelector("#home-block2").addEventListener("click", () => this.processHomeBlock2());

        // Set the function for home-block3
        this.parentElement.querySelector("#home-block3").addEventListener("click", () => this.processHomeBlock3());
    }

    // This is for home-block1
    processHomeBlock1() {
        // Go to the project page
        window.location.href = "./pages/project.html";
    }

    // This is for home-block2
    processHomeBlock2() {
        // Go to the about me page
        window.location.href = "./pages/about-me.html";
    }

    // This is for home-block3
    processHomeBlock3() {
        // Go to the contact page
        window.location.href = "./pages/contact.html";
    }
}