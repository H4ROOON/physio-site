document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector("#name").value.trim();
        const email = form.querySelector("#email").value.trim();
        const message = form.querySelector("#message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        const submitBtn = form.querySelector("button");
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";

        setTimeout(() => {
            alert("Thank you for reaching out, " + name + "! We'll contact you shortly.");
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = "Claim Free Trial";
        }, 1000);
    });
});
