class SubPage {
    constructor(parentElement) {
        // Set the parent element
        // In this assignment, it's .container
        this.parentElement = document.querySelector(parentElement);
    }

    // This sets all addEventListener
    setAllEventListeners() {
        // Set the function for back-button
        this.parentElement.querySelector(".back-button").addEventListener("click", () => this.processBackButton());
    }

    // This is for back-button
    processBackButton() {
        // Go to the main page
        window.location.href = "../index.html";
    }
}