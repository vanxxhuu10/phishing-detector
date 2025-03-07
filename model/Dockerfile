# Use Python as base image
FROM python:3.9

# Set working directory
WORKDIR /app

# Copy requirements.txt first
COPY requirements.txt /app/

# Debugging: Check if file exists
RUN ls -l /app/

# Install dependencies
RUN pip install --no-cache-dir -r /app/requirements.txt

# Copy the rest of the files
COPY . /app/

# Expose port (if required)
EXPOSE 5000

# Start the application
CMD ["python", "model_api.py"]
