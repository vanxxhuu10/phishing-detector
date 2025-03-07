# Use official lightweight Python image
FROM python:3.10

# Set working directory inside the container
WORKDIR /app

# Copy the model files
COPY . . 

# Install dependencies
RUN pip install --upgrade pip && pip install -r requirements.txt

# Expose the API port
EXPOSE 5000

# Run the model API using Gunicorn
CMD ["gunicorn", "-b", "0.0.0.0:5000", "model_api:app"]
