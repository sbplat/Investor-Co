import cohere

cohere_client = cohere.Client('ojsimMVIln0d6Tsd0yAprJzX47uOi8agV4L4G4Hl')

def summarize_text(text):
    response = cohere_client.generate(
        model='xlarge',
        prompt=f"""\
The following are passages and short summaries that are two sentences.
Since officially changing its name to Meta last October, the news for CEO Mark Zuckerberg and the company has been almost all bad. Apple’s iOS privacy update made it more difficult for the company to target ads and the increased popularity of social media rival TikTok has drawn users and advertisers away from the app. Meanwhile, an economic slowdown has caused many companies to pull back on their online marketing spending. In July, Meta said it was expecting a second straight period of declining sales as it reported second-quarter earnings that missed on the top and bottom lines.
TLDR: Apple, Tik Tok, and other competitors has ve drawn users away from the app. With other social media apps gaining popularity, Meta is falling more compared to the rest of the industry. 
--
FedEx Corp. saw its biggest stock drop since at least 1980 after withdrawing its earnings forecast on worsening business conditions, a potentially worrying sign for the global economy. The package-delivery giant flagged weakness in Asia and challenges in Europe as it pulled its prior outlook and reported preliminary results for the latest quarter that fell well short of Wall Street’s expectations. The conditions could deteriorate further in the current period, FedEx said. The company will take immediate steps to cut costs, including parking some aircraft, cutting workers’ hours and closing more than 90 of its roughly 2,200 FedEx Office locations. Put simply, it was an “ugly quarter,” according to Robert W. Baird & Co. analyst Garrett Holland. “Global freight demand has significantly deteriorated.” FedEx shares tumbled 22 per cent Friday morning. While U.S. economic data has been mixed, with employment and manufacturing holding up, companies across industries are starting to paint a grimmer picture of the economy. Conditions in Asia and Europe also appear to be weighing on the U.S., where consumers are shifting spending into travel and concerts and away from online shopping.
TLDR: FedEx, a global transport company, experienced their biggest drop in stock since the late 2000's. With customers switching focus to travel and in-person events following the pandemic, online shopping is the last thing on their minds.
--
{text}
TLDR:""",
        max_tokens=60,
        temperature=0,
        k=0,
        p=0.75,
        frequency_penalty=0,
        presence_penalty=0,
        stop_sequences=["--"],
        return_likelihoods='NONE'
    )
    return response.generations[0].text.rstrip("\n--").strip()

if __name__ == "__main__":
    print(summarize_text("Tesla has crossed another significant manufacturing milestone. As caught by Electrek, the automaker shared on Saturday that its Texas Gigafactory recently produced its ten thousandth Model Y SUV. The achievement could be good news for those hoping to buy a Cybertruck next year. Tesla plans to build the pickup truck primarily in Texas. The automaker initially expected to begin volume production in 2021 but then delayed the Cybertruck to 2022 and then 2023."))
