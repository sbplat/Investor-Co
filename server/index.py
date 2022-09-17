from flask import Flask, request
import scraper

app = Flask(__name__)

@app.route("/stock", methods=["GET"])
def app_api():
    stock = request.args.get("query", default=None, type=str)
    try:
        if stock == None:
            return {"message": "invalid query"}
        else:
            return {"message": "ok", "response": scraper.get_article_texts(stock, 5)}
    except Exception as e:
        return {"message": "error occurred", "exception": str(e)}

app.run(port=3001)
