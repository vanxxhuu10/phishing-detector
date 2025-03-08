async function analyzeEmail() {
    const emailText = document.getElementById("emailContent").value;

    if (!emailText.trim()) {
        alert("Please enter email content.");
        return;
    }

    try {
        const response = await fetch("https://phishing-detector-backend.vercel.app/analyze-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ emailText: emailText })  // ✅ Use "emailText" (matches backend)
        });

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();
        document.getElementById("result").innerText = `Prediction: ${data.prediction || "Error occurred"}`;
    } catch (error) {
        document.getElementById("result").innerText = "Error connecting to server.";
        console.error("Request failed:", error);
    }
}
