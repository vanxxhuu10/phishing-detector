async function analyzeEmail() {
    const emailText = document.getElementById("emailContent").value;

    if (!emailText.trim()) {
        alert("Please enter email content.");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/analyze-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: emailText })  // Make sure this matches backend key
        });

        const data = await response.json();
        document.getElementById("result").innerText = `Prediction: ${data.prediction || "Error occurred"}`;
    } catch (error) {
        document.getElementById("result").innerText = "Error connecting to server.";
        console.error("Request failed:", error);
    }
}
