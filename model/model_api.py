from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load the trained model
model = joblib.load("phishing_detector.pkl")

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    email_text = data.get("emailText", "")  # Fix: Now matches the key from Node.js

    if not email_text:
        return jsonify({"error": "No email content provided"}), 400

    # Predict phishing or not
    prediction = model.predict([email_text])[0]
    result = "Phishing Email" if prediction == 1 else "Legitimate Email"

    return jsonify({"prediction": result})

if __name__ == '__main__':
    app.run(port=5001)
