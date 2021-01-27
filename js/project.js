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
        
        // Update the copyright
        this.addYearAndName();
    }

    // This sets all addEventListener
    setAllEventListeners() {
        // Set functions for buttons
        this.parentElement.querySelector("#knights-tour").addEventListener("click", () => this.processKnightsTour());
        this.parentElement.querySelector("#ontario-license-plate-identifier").addEventListener("click", () => this.processOntarioLicense());
        this.parentElement.querySelector("#abc-bookstore").addEventListener("click", () => this.processABCBookstore());
        this.parentElement.querySelector("#happiness-jar").addEventListener("click", () => this.processHappinessJar());
        

        // Set the function for back-button
        this.parentElement.querySelector(".back-button").addEventListener("click", () => this.processBackButton());
    }

    // This is for Knight's Tour
    processKnightsTour() {
        // Go to the detail page
        window.location.href = "../pages/project-pages/knights-tour-solver.html";
    }

    // This is for Ontario Lincense Plate Identifier
    processOntarioLicense() {
        window.location.href="../pages/project-pages/ontario-license-plate-identifier.html";
    }

    // ABC Bookstore
    processABCBookstore() {
        window.location.href="../pages/project-pages/abc-bookstore.html";
    }

    // Happiness Jar
    processHappinessJar() {
        window.location.href="../pages/project-pages/happiness-jar.html";
    }


    // ###############################################################################################
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