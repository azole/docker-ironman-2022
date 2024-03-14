ARG PYTHON_VERSION=3
FROM python:${PYTHON_VERSION}-slim as base

WORKDIR /app

COPY requirements.txt /app
RUN pip3 install -r requirements.txt

COPY . /app

EXPOSE 8000

# ENTRYPOINT ["python3"]
# CMD ["app.py"]
CMD ["python3", "app.py"]