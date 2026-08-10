const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        company: document.getElementById("company").value,
        message: document.getElementById("message").value
    };

    console.log("Sending:", data);

    try {
        const response = await fetch("https://bajwa-dispatch-website-1.onrender.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        console.log("Status:", response.status);

        const result = await response.json();
        console.log("Result:", result);

        if (result.success) {
            alert("✅ Message Sent Successfully!");
            contactForm.reset();
        } else {
            alert("❌ Something went wrong.");
        }

    } catch (error) {
        console.error("Fetch Error:", error);
        alert("⚠️ Cannot connect to FastAPI Server.");
    }
});