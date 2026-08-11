const contactForm = document.getElementById("contactForm");
const result = document.getElementById("result");

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

        if (result) {
            result.innerText = "Sending...";
        }

        try {

            const response = await fetch(
                "http://127.0.0.1:8000/contact",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(data)
                }
            );

            console.log("Status:", response.status);

            const resultData = await response.json();

            console.log("Result:", resultData);

            if (response.ok) {

                alert("✅ Message Sent Successfully!");

                contactForm.reset();

                if (result) {
                    result.innerText =
                        "✅ Contact saved successfully.";
                }

            } else {

                if (result) {
                    result.innerText =
                        "❌ " +
                        (
                            resultData.detail ||
                            resultData.message ||
                            "Server error"
                        );
                }

            }

        } catch (error) {

            console.error("Fetch Error:", error);

            if (result) {
                result.innerText =
                    "⚠️ Cannot connect to FastAPI Server.";
            }

        }

    });

}