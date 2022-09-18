from flask import Flask, request
import analyzer
import scraper

app = Flask(__name__)

@app.route("/stock", methods=["GET"])
def app_api():
    stock = request.args.get("query", default=None, type=str)
    try:
        if stock == None:
            return {"message": "invalid query"}
        else:
            article_texts = scraper.get_article_texts(stock, 3)
            #print(article_texts[0])
            #print(article_texts[1])
            return {"message": "ok", "response": [analyzer.summarize_text(article_text["content"]) for article_text in article_texts]}
    except Exception as e:
        return {"message": "error occurred", "exception": str(e)}

app.run(port=3001)
