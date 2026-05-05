from flask import Flask, render_template, request, jsonify
import json
import os

app = Flask(__name__)

# Path to JSON file
REVIEWS_FILE = "reviews.json"

# Load existing reviews
def load_reviews():
    if not os.path.exists(REVIEWS_FILE):
        return []
    with open(REVIEWS_FILE, "r") as f:
        return json.load(f)

# Save reviews to file
def save_reviews(reviews):
    with open(REVIEWS_FILE, "w") as f:
        json.dump(reviews, f, indent=4)

@app.route("/")
def index():
    reviews = load_reviews()
    return render_template("index.html", reviews=reviews)

@app.route("/add_review", methods=["POST"])
def add_review():
    data = request.get_json()
    name = data.get("name")
    perfume = data.get("perfume")
    review_text = data.get("review")

    if not (name and perfume and review_text):
        return jsonify({"success": False, "message": "All fields are required!"}), 400

    reviews = load_reviews()
    reviews.append({
        "name": name,
        "perfume": perfume,
        "review": review_text
    })
    save_reviews(reviews)

    return jsonify({"success": True, "message": "Review added!"})

if __name__ == "__main__":
    app.run(debug=True)