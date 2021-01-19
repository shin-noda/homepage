// Made a class Product so that it's transferable and maintainable
class Product {
    constructor(parentElement) {
        // Set the parent element
        // In this assignment, it's .container
        this.parentElement = document.querySelector(parentElement);
    }

    // This sets all addEventListener
    setAllEventListeners() {
        // Clear the local storage
        localStorage.clear();

        // Set the function for product
        this.parentElement.querySelector("#product").addEventListener("change", () => this.processProductSelection());

        // Set the function for saveButton
        this.parentElement.querySelector("#saveButton").addEventListener("click", () => this.processSaveButton());

        // Set the function for nextPageButton
        this.parentElement.querySelector("#nextPageButton").addEventListener("click", () => this.processNextPageButton());
    }

    // This method change the src of the image
    processProductSelection() {
        const e = this.parentElement.querySelector("#product");

        // Update the price
        this.parentElement.querySelector("#price").value = e.value;

        // Replace the image
        this.parentElement.querySelector(".itemImage").src = `images/${e.options[e.selectedIndex].text}.jpg`;
    }

    processSaveButton() {
        const customerName = this.parentElement.querySelector("#customerName").value;
        const customerEmail = this.parentElement.querySelector("#customerEmail").value;

        // The product is NOT .value but .options.value
        const e = this.parentElement.querySelector("#product");
        const product = e.options[e.selectedIndex].text;

        const order = this.parentElement.querySelector("#order").value;
        const price = this.parentElement.querySelector("#price").value;

        // set the info into the local storage
        localStorage.setItem("customerName", customerName);
        localStorage.setItem("customerEmail", customerEmail);
        localStorage.setItem("product", product);
        localStorage.setItem("order", order);
        localStorage.setItem("price", price);
    }

    processNextPageButton() {
        // Check if every info is stored collectly
        const keys = ["customerName", "customerEmail", "product", "order", "price"];

        let isFilled = true;
        for (let i = 0; i < keys.length; i++) {
            // This is for testing purpose
            // console.log(localStorage.getItem(keys[i]));

            if (localStorage.getItem(keys[i]) === null || localStorage.getItem(keys[i]) === "") {
                isFilled = false;
                break;
            }
        }

        // If isFilled is true, the form will submit the info. Otherwise, shows the error message
        if (isFilled) {
            // Submit the form
            document.getElementById("productForm").submit();
        } else {
            window.alert("Please fill the all information, and click the Save button before you click the Next Page button.");
        }
    }

    // Display all info submitted from the main page
    displayAllInfo() {
        const customerName = localStorage.getItem("customerName");
        const customerEmail = localStorage.getItem("customerEmail");
        const product = localStorage.getItem("product");
        const order = parseInt(localStorage.getItem("order"));
        const price = parseInt(localStorage.getItem("price"));
        const total = price * order;

        // Update results
        this.updateResult(".customerNameArea2", customerName);
        this.updateResult(".customerEmailArea2", customerEmail);
        this.updateResult(".productArea2", product);
        this.updateResult(".orderArea2", order);
        this.updateResult(".priceArea2", price);
        this.updateResult(".totalArea2", total);
    }

    // Update the content of the result
    updateResult(targetElementName, result) {
        const d = this.parentElement.querySelector(targetElementName);

        const resultText = document.createTextNode(result);
        const resultElement = document.createElement("div");

        resultElement.classList.add("result");
        resultElement.appendChild(resultText);

        // Append a new child
        d.appendChild(resultElement);
    }
}