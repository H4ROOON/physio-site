document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form[name='contact']");

    form.addEventListener("submit", function (e) {
        const name = form.querySelector("#name").value.trim();
        const email = form.querySelector("#email").value.trim();
        const message = form.querySelector("#message").value.trim();

        if (!name || !email || !message || name.length < 3 || message.length < 10 || email.length < 6) {
            e.preventDefault();
            alert("Please enter valid values in all fields.");
        }
    });
});
