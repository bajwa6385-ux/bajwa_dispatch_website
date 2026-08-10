const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const data = {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            company: document.getElementById("company").value.trim(),
            message: document.getElementById("message").value.trim()
        };

        console.log("Sending:", data);

        try {
            const response = await fetch(
                "https://bajwa-dispatch-website-1.onrender.com/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
            );

            console.log("Status:", response.status);

            const result = await response.json();

            console.log("Result:", result);

            if (response.ok) {
                alert("✅ Message Sent Successfully!");
                contactForm.reset();
            } else {
                alert(
                    "❌ Something went wrong: " +
                    (result.detail || result.message || "Server error")
                );
            }

        } catch (error) {
            console.error("Fetch Error:", error);

            alert(
                "⚠️ Cannot connect to FastAPI Server.\n\n" +
                "Please try again."
            );
        }
    });
}