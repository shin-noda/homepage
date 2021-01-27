window.onload = function() {
    // parentElement is .container
    const subPage = new SubPage('.container');

    // set all eventlisteners
    subPage.setAllEventListeners();
};

class SubPage {
    constructor(parentElement) {
        // Set the parent element
        // In this assignment, it's .container
        this.parentElement = document.querySelector(parentElement);
        
        // Update the copyright
        this.addYearAndName();
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

    // This is for copyright
    addYearAndName() {
        const e = this.parentElement.querySelector(".footer-content");

        // Add year and name
        const year = new Date().getFullYear();

        const newCopyrightText = e.firstChild.nodeValue + " " + year + " Shin";

        e.firstChild.nodeValue = newCopyrightText;
    }
}