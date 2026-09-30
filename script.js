// ===============================
// LUMÉRA SALON - JAVASCRIPT
// ===============================


// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");

    if (navMenu.classList.contains("show-menu")) {
        menuBtn.innerHTML = "✕";
    } else {
        menuBtn.innerHTML = "☰";
    }
});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show-menu");

        menuBtn.innerHTML = "☰";

    });

});


// ===============================
// HEADER SCROLL EFFECT
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("header-scrolled");

    } else {

        header.classList.remove("header-scrolled");

    }

});


// ===============================
// APPOINTMENT FORM
// ===============================

const bookingForm = document.querySelector(".booking-form");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const nameInput =
        bookingForm.querySelector('input[type="text"]');

    const phoneInput =
        bookingForm.querySelector('input[type="tel"]');

    const serviceInput =
        bookingForm.querySelector("select");

    const dateInput =
        bookingForm.querySelector('input[type="date"]');


    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const service = serviceInput.value;
    const date = dateInput.value;


    // Name validation

    if (name === "") {

        showMessage("Please enter your name.");

        nameInput.focus();

        return;

    }


    // Phone validation

    if (phone === "") {

        showMessage("Please enter your phone number.");

        phoneInput.focus();

        return;

    }


    if (phone.length < 10) {

        showMessage("Please enter a valid phone number.");

        phoneInput.focus();

        return;

    }


    // Service validation

    if (service === "Select service") {

        showMessage("Please select a service.");

        serviceInput.focus();

        return;

    }


    // Date validation

    if (date === "") {

        showMessage("Please select your preferred date.");

        dateInput.focus();

        return;

    }


    // Success message

    showMessage(
        `Thank you, ${name}! Your appointment request has been received.`
    );


    // Reset form

    bookingForm.reset();

});


// ===============================
// MESSAGE BOX
// ===============================

function showMessage(message) {

    const oldMessage =
        document.querySelector(".message-box");

    if (oldMessage) {
        oldMessage.remove();
    }


    const messageBox =
        document.createElement("div");

    messageBox.className = "message-box";

    messageBox.innerHTML = `
        <div class="message-content">

            <span class="message-icon">✓</span>

            <div>
                <strong>Thank You!</strong>
                <p>${message}</p>
            </div>

            <button class="close-message">
                ×
            </button>

        </div>
    `;


    document.body.appendChild(messageBox);


    const closeButton =
        messageBox.querySelector(".close-message");


    closeButton.addEventListener("click", () => {

        messageBox.remove();

    });


    setTimeout(() => {

        if (messageBox) {
            messageBox.remove();
        }

    }, 5000);

}


// ===============================
// SERVICE CARD ANIMATION
// ===============================

const serviceCards =
    document.querySelectorAll(".service-card");


const cardObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("card-visible");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


serviceCards.forEach(card => {

    cardObserver.observe(card);

});


// ===============================
// GALLERY HOVER EFFECT
// ===============================

const galleryItems =
    document.querySelectorAll(".gallery-item");


galleryItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.classList.add("gallery-active");

    });


    item.addEventListener("mouseleave", () => {

        item.classList.remove("gallery-active");

    });

});


// ===============================
// CURRENT YEAR
// ===============================

const yearElement =
    document.querySelector(".footer-bottom p");

if (yearElement) {

    const currentYear =
        new Date().getFullYear();

    yearElement.innerHTML =
        `© ${currentYear} LUMÉRA Beauty Studio`;

}


// ===============================
// SET MINIMUM DATE
// ===============================

const datePicker =
    document.querySelector('input[type="date"]');


if (datePicker) {

    const today =
        new Date().toISOString().split("T")[0];

    datePicker.setAttribute("min", today);

}


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements =
    document.querySelectorAll(
        ".section-heading, .about-content, .about-visual, .review-card, .booking-box"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal-show");

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.1
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active-link");

        const target =
            link.getAttribute("href");

        if (target === `#${currentSection}`) {

            link.classList.add("active-link");

        }

    });

});
