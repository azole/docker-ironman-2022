from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_geek():
    return '<h1>Hello, Docker</h2>'


if __name__ == "__main__":
    app.run(debug=True)