window.onload = function() {
    // parentElement is .container
    const projectDetail = new ProjectDetail('.container');

    // set all eventlisteners
    projectDetail.setAllEventListeners();
};

class ProjectDetail {
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
        this.parentElement.querySelector(".project-back-button").addEventListener("click", () => this.processProjectBackButton());
    }

    // This is for back-button
    processProjectBackButton() {
        // Go to the previous page
        window.location.href = "../project.html";
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