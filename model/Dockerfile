# Use Python as base image
FROM python:3.9

# Set working directory
WORKDIR /model

# Copy only requirements.txt before installing dependencies
COPY model/requirements.txt /model/

# Show contents for debugging
RUN ls -l /model/ && cat /model/requirements.txt

# Install dependencies
RUN pip install --no-cache-dir -r /model/requirements.txt

# Copy everything else
COPY . /model/

# Expose port (if required)
EXPOSE 5000

# Start the application
CMD ["python", "model_api.py"]
