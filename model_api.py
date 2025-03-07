from flask import Flask, request, jsonify
import joblib
import os  # Import os to get PORT from Railway

app = Flask(__name__)
MODEL_PATH = os.path.join(os.path.dirname(__file__), "phishing_detector.pkl")
model = joblib.load(MODEL_PATH)
# Load the trained model

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    email_text = data.get("emailText", "")  # Matches expected key

    if not email_text:
        return jsonify({"error": "No email content provided"}), 400

    # Predict phishing or not
    prediction = model.predict([email_text])[0]
    result = "Phishing Email" if prediction == 1 else "Legitimate Email"

    return jsonify({"prediction": result})

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))  # Get Railway-assigned port
    app.run(port=5001)
