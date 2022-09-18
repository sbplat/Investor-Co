from html.entities import name2codepoint
from webbrowser import get
from GoogleNews import GoogleNews
from goose3 import Goose
import pandas as pd
import yfinance as yf

google_news = GoogleNews()
goose = Goose()

ticker_list = pd.read_csv('ticker_list.csv')
symbol = ticker_list['Symbol']
name_list = ticker_list['Name']

def get_ticker(name):
    for i, s in enumerate(name_list):
        if name in s:
            return symbol[i]

ticker = get_ticker("Zynex")

def get_price(symbol):
    ticker = yf.Ticker(symbol)
    todays_data = ticker.history(period='1d')
    return round(todays_data['Close'][0], 2)

print(get_price(ticker))



def get_articles(name):
    google_news.clear()
    google_news.set_lang('en')
    google_news.set_period('1d')
    google_news.set_encode('utf-8')
    google_news.search(f"{name} company") # method is very slow
    google_news.getpage(0)
    google_news.result()
    return google_news.get_links()

def extract_article(url):
    article_text = goose.extract(url=url)
    return {"title": article_text.title, "content": article_text.cleaned_text}

def get_article_texts(name, max_texts):
    url_list = get_articles(name)

    article_texts = []

    for index, url in enumerate(url_list):
        if index >= max_texts:
            break
        article_texts.append(extract_article(url))

    return article_texts


if __name__ == "__main__":
    print("in main")
    print(get_article_texts("tesla", 1)[0])
    print("\n" * 3)
    print(get_article_texts("google", 1)[0])
