// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image Click-to-Expand Logic
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("fullImg");
const closeBtn = document.querySelector(".close-btn");
const images = document.querySelectorAll(".expandable-img");

// When user clicks an image, open the modal
images.forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

// Close modal on 'X' click
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close modal if user clicks outside the image
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});