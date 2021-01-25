window.onload = function() {
    // parentElement is .container
    const project = new Project('.container');

    // set all eventlisteners
    project.setAllEventListeners();
};

class Project {
    constructor(parentElement) {
        // Set the parent element
        // In this assignment, it's .container
        this.parentElement = document.querySelector(parentElement);
    }

    // This sets all addEventListener
    setAllEventListeners() {
        // Set the function for back-button
        this.parentElement.querySelector("#knights-tour").addEventListener("click", () => this.processKnightsTour());
        
        // Set the function for back-button
        this.parentElement.querySelector(".back-button").addEventListener("click", () => this.processBackButton());
    }

    // This is for Knight's Tour
    processKnightsTour() {
        // Go to the detail page
        window.location.href = "../pages/project-pages/knights-tour-solver.html";
    }

    // This is for back-button
    processBackButton() {
        // Go to the main page
        window.location.href = "../index.html";
    }
}