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
}