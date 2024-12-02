from flask import Flask, request, jsonify, render_template
from nltk.sentiment import SentimentIntensityAnalyzer
import nltk

# Download the VADER lexicon if not already downloaded
try:
    nltk.data.find('sentiment/vader_lexicon.zip')
except LookupError:
    nltk.download('vader_lexicon')

# Initialize Flask app
app = Flask(__name__)

# Initialize NLTK VADER sentiment analyzer
sia = SentimentIntensityAnalyzer()

@app.route('/')
def home():
    return render_template("index.html")

# Sentiment analysis function
def analyze_sentiment(text):
    sentiment_scores = sia.polarity_scores(text)
    if sentiment_scores['compound'] > 0.05:
        return "Positive"
    elif sentiment_scores['compound'] < -0.05:
        return "Negative"
    else:
        return "Neutral"

# Define responses based on sentiment
responses = {
    "Positive": "That's wonderful! How can I assist you further?",
    "Negative": "I'm sorry to hear that. Would you like to talk about it?",
    "Neutral": "Alright. Let me know if there's anything specific on your mind."
}

@app.route('/chat', methods=['POST'])
def chat():
    # Get user message from the request body
    user_message = request.json.get("message")
    
    # If no message is provided, return an error
    if not user_message:
        return jsonify({"response": "Please provide a message."}), 400
    
    # Analyze sentiment
    sentiment = analyze_sentiment(user_message)
    sentiment_scores = sia.polarity_scores(user_message)
    
    # Construct bot's response based on sentiment
    bot_response = responses.get(sentiment, "I'm not sure how to respond to that.")

    # Return both the bot's response and sentiment analysis
    return jsonify({
        "response": bot_response,
        "sentiment": sentiment,
        "scores": sentiment_scores
    })

if __name__ == "__main__":
    app.run(debug=True)
