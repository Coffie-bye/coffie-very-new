// JavaScript for Testimonial Carousel
document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");

    let currentIndex = 0;

    // Function to show the current testimonial
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? "block" : "none";
        });
    }

    // Event listeners for navigation buttons
    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
        showTestimonial(currentIndex);
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
        showTestimonial(currentIndex);
    });

    // Initialize carousel
    showTestimonial(currentIndex);
});

// JavaScript for Testimonial Form
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById("name").value.trim();
    const testimonial = document.getElementById("testimonial").value.trim();

    if (name && testimonial) {
        alert("Thank you for your feedback, " + name + "!");
        form.reset();
    } else {
        alert("Please fill out all fields before submitting.");
    }
});
