# Flask Chatbot with Sentiment Analysis

This project is a Flask-based chatbot application that incorporates sentiment analysis. Users can interact with the chatbot by typing messages into a user-friendly interface. The chatbot analyzes the sentiment of the user's input and responds accordingly.

## Features

- **Text-based Chat:** Users can type messages to interact with the chatbot.
- **Sentiment Analysis:** The chatbot uses NLTK's VADER sentiment analysis tool to determine whether the user's input is Positive, Neutral, or Negative.
- **Real-time Responses:** The chatbot provides responses tailored to the sentiment of the user's message.
- **Sentiment Scores:** The application displays detailed sentiment scores (Positive, Neutral, Negative, Compound) alongside the response.

## Technologies Used

- **Backend:**
  - Flask (Python)
  - NLTK (Natural Language Toolkit) for sentiment analysis
- **Frontend:**
  - HTML, CSS, JavaScript
- **API Integration:** Communication between the frontend and backend using JSON via POST requests.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/chatbot-sentiment-analysis.git
   cd chatbot-sentiment-analysis
   ```

2. **Set up a Virtual Environment (Optional but Recommended):**
   ```bash
   python -m venv venv
   source venv/bin/activate    # On Windows: venv\Scripts\activate
   ```

3. **Install Dependencies:**
   Ensure Python is installed and run:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Application:**
   ```bash
   python app.py
   ```
   The application will run at `http://127.0.0.1:5000`.

## How to Use

1. Open a browser and navigate to `http://127.0.0.1:5000`.
2. Type a message into the input box and click "Send."
3. View the chatbot's response and sentiment analysis details in real time.

## Project Structure

```
chatbot-sentiment-analysis/
│
├── static/
│   ├── css/
│   │   └── style.css        # Styling for the interface
│   └── js/
│       └── script.js        # JavaScript logic for interactions
│
├── templates/
│   └── index.html           # HTML file for the user interface
│
├── app.py                   # Main Flask application
├── requirements.txt         # Dependencies
└── README.md                # Project documentation
```

## Future Enhancements

- Add voice command functionality.
- Improve sentiment analysis with advanced NLP models.
- Enhance the UI/UX design.
