# Use Python as base image
FROM python:3.9

# Set working directory
WORKDIR /app
 
# Copy only requirements.txt first (for better caching)
COPY requirements.txt /app/

# Show contents of requirements.txt (debugging)
RUN cat requirements.txt

# Try installing dependencies with verbose logging
RUN pip install --no-cache-dir -r requirements.txt --verbose

# Copy remaining files
COPY . /app

# Expose port (if required)
EXPOSE 5000

# Start the application
CMD ["python", "model_api.py"]
