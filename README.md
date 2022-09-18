## Inspiration
We have experienced doing extensive research for daily stock price changes, but also have the tendency to forget about our investments. Our team knows that if we forget to check out Wealthsimple accounts sometimes, there’s a high chance that others do too, so we were inspired to create something that would be beneficial to all investors. Additionally, when doing research about stocks, there is loads of misinformation around the internet, so the goal of InvestorCo is to take that out and give investors reliable sources and stock change reminders. 

## What it does
At InvestCo, our mission is to help investors with diverse platforms and portfolios stay updated about any news that impacts the prices of their investments. A misinformation model working in the background filters out false or biassed information in order to deliver accurate information. In addition to this, we notify the investor about why the price fluctuation that is happening with their investments is happening - in real time. 

## How we built it
We used the Google News API and Cohere API to come up with the basis of our web scraping and summarizing. The Google News API was used to web scrape any news on a certain stock on the internet. Following this, the articles were fed through an AI model, which declared them as positive or negative and then moved on to the summarization step displayed on the frontend. This was then fed into the Cohere Article Summarizer API which summarizes multiple retrieved articles to only include important or necessary information. 

## Challenges we ran into
The main challenge we ran into was trying to integrate stock and crypto symbols in order to access their prices. Previously, our biggest issue was finding a way to gather multiple articles and summarise them in one go without taking a manual approach which was solved when we attended the mentor program and had chances to converse with the Cohere employees. Lastly, our biggest problem was developing on the frontend, as none of our team members specialise or have experience with that. 

## Accomplishments that we're proud of
We’re extremely proud of being able to combine the Google and Cohere API, as well as integrating a successful ML model for one of the main goals of eliminating misinformation. In addition to this, our biggest struggle was developing on the frontend, and we’re extremely proud of being able to figure it out with no previous experience, and all the learning on the spot. Huge shout out and thank you to all the mentors :)

## What we learned
We’ve learned a lot about working in a team and effectively time management/planning out action items. The biggest thing we learned was figuring stuff out on the spot and being okay with being uncertain. As none of us are frontend devs, we worked for hours on figma templates with the lingering possibility of it not working and resorting to html, but in the end it worked out and we were able to bring the website to life.

## What's next for InvestorCo
Moving forward, we are incredibly passionate about bringing the project to life. More often than not, most investors use different platforms for different platforms such as Stocks, Crypto, ETFs etc. In the near future, we want to create a more organized and efficient experience for the investors so that they can view all their portfolios in one place. 