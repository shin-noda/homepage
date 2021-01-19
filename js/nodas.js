window.onload = function() {
    // parentElement is .gridContainer
    const products = new Product('.gridContainer');

    // set all eventlisteners
    products.setAllEventListeners();
};