// Personalize these!
const HER_NAME = "Shruti Shukla";
const PHOTOS = [
     "shruti1.png",  // Add her photo filenames here
    "1739522381670.jpg",
    "photo3.jpg",
];

// Load photos
const photoGrid = document.getElementById("photoGrid");
PHOTOS.forEach(photo => {
    const img = document.createElement("img");
    img.src = `photos/${photo}`;  // Ensure photos are in a 'photos' folder
    photoGrid.appendChild(img);
});

// Show surprise message
function showSurprise() {
    const surpriseDiv = document.getElementById("surprise");
    surpriseDiv.textContent = "Wishing you a day filled with joy and laughter! 🎉";
}
