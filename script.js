function grantWish() {
    // Hide input and button
    document.getElementById('wishInput').style.display = 'none';
    document.querySelector('button').style.display = 'none';

    // Show loader
    document.getElementById('loader').style.display = 'block';

    // After 5 seconds, hide loader and show "Wish Granted!"
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('wishGranted').style.display = 'block';
    }, 5000);
}
function grantWish() {
    // Show the modal instead of the loader
    document.getElementById('modalWindow').style.display = 'block';
}

function closeModal() {
    // Hide the modal
    document.getElementById('modalWindow').style.display = 'none';
}
function continueWish() {
    closeModal();

    let container = document.querySelector('.container');
    container.style.display = "none";

    // Display the progress container
    let progressContainer = document.getElementById('progressContainer');
    progressContainer.style.display = "block";

    // Update worldChangeMessage progress
    let worldChangePercent = 0;
    let worldChangeInterval = setInterval(() => {
        if (worldChangePercent < 100) {
            worldChangePercent += 10;  // adjust the rate of increment
            document.getElementById('worldChangePercent').textContent = worldChangePercent + "%";
        } else {
            clearInterval(worldChangeInterval);
            
            // Start selfChangeMessage progress after worldChangeMessage is done
            let selfChangePercent = 0;
            let selfChangeInterval = setInterval(() => {
                if (selfChangePercent < 100) {
                    selfChangePercent += 10;  // adjust rate of increment as needed
                    document.getElementById('selfChangePercent').textContent = selfChangePercent + "%";
                } else {
                    clearInterval(selfChangeInterval);
                    
                    // Display wish granted and reset input and button for new wish
                    document.getElementById('wishGranted').style.display = 'block';
                    container.innerHTML = `
                    <h1>Wish granted!</h1>
                    <hr/>
                        <h1>Make an another wish!</h1>
                        <input type="text" placeholder="Grant me a wish." id="wishInput">
                        <button onclick="grantWish()">Grant a wish</button>
                    `;
                    container.style.display = "block";
                    progressContainer.style.display = "none";
                }
            }, 500);  // adjust interval as needed
        }
    }, 500);  // adjust interval as needed
}

