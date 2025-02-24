function animateCounter(elementId, target, duration) {
    let start = 0;
    let end = target;
    let startTime = null;

    // Function to update the number
    function updateCounter(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const currentValue = Math.min(start + (end - start) * (progress / duration), end);

        // Update the HTML counter
        document.getElementById(elementId).innerText = Math.floor(currentValue);

        // Continue animating until the target is reached
        if (currentValue < end) {
            requestAnimationFrame(updateCounter);
        }
    }

    // Start the animation
    requestAnimationFrame(updateCounter);
}

// Call the function for each counter element with its own target and duration
animateCounter("counter1", 1000, 3000);  // Counter 1: Counts to 1000 in 3 seconds
animateCounter("counter2", 500, 2000);   // Counter 2: Counts to 500 in 2 seconds
animateCounter("counter3", 1500, 5000); 
animateCounter("counter4", 1500, 5000); // Counter 3: Counts to 1500 in 5 seconds