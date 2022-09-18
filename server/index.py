from flask import Flask, request
import analyzer
import scraper

app = Flask(__name__)

# /analyze?query=amazon
@app.route("/analyze", methods=["GET"])
def app_api():
    stock = request.args.get("query", default=None, type=str)
    try:
        if stock == None:
            return {"message": "invalid query"}
        else:
            article_texts = scraper.get_article_texts(stock, 3)
            #print(article_texts[0])
            #print(article_texts[1])
            response_list = []

            for article_text in article_texts:
                text_title = article_text["title"]
                text_summary = analyzer.summarize_text(article_text["content"])
                text_classification = analyzer.classify_text(text_summary)
                response_list.append({"title": text_title, "summary": text_summary, "positive": text_classification})

            return {"message": "ok", "response": response_list}

    except Exception as e:
        return {"message": "error occurred", "exception": str(e)}

@app.route("/add_user", methods=["POST"])
def app_add_user():
    ...

app.run(port=3001)
