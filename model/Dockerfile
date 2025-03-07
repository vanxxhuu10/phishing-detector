FROM python:3.10

WORKDIR /app

# Copy everything from model/ to /app
COPY . /app

RUN pip install --upgrade pip && pip install -r requirements.txt

EXPOSE 5000

CMD ["gunicorn", "-b", "0.0.0.0:5000", "model_api:app"]
