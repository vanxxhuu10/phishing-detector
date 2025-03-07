# Use Python as base image
FROM python:3.9

# Set working directory
WORKDIR /app

# Copy contents from model directory
COPY . /app

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose port (if required)
EXPOSE 5000

# Start the application
CMD ["python", "model_api.py"]
