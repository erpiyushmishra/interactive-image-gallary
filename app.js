// Wait for the DOM to fully load before executing the JavaScript code
document.addEventListener("DOMContentLoaded", function() {
    let scrollBar = document.querySelector(".gallery");
    let backBtn = document.getElementById("backBtn");
    let nextBtn = document.getElementById("nextBtn");

    // Check if scrollBar exists
    if (scrollBar) {
        // Add wheel event listener
        scrollBar.addEventListener("wheel", (e) => {
            e.preventDefault();
            scrollBar.scrollLeft += e.deltaY;
        });
    }

    // Check if nextBtn exists
    if (nextBtn) {
        // Add click event listener for the next button
        nextBtn.addEventListener("click", () => {
            // Apply smooth scrolling behavior
            console.log()
            scrollBar.style.scrollBehavior = "smooth";
            scrollBar.scrollLeft += 300;
        });
    }

    // Check if backBtn exists
    if (backBtn) {
        // Add click event listener for the back button
        backBtn.addEventListener("click", () => {
            // Apply smooth scrolling behavior
            scrollBar.style.scrollBehavior = "smooth";
            scrollBar.scrollLeft -= 300;
        });
    }
});
