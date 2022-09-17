from flask import Flask

app = Flask(__name__)

@app.route("/api")
def app_api():
    return {"message": "Hello from flask server API"}

app.run(port=3001)
