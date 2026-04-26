from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

locations = {

"library": {
"keywords": ["library"],
"info": "📚 The Central Library is the main study area of the campus.",
"directions": "After entering the main gate walk straight. The library building will be directly ahead."
},

"cse": {
"keywords": [
"cse",
"computer science",
"principal",
"principal office",
"fee counter",
"fees",
"fee",
"pay fee",
"pay fees",
"fee payment",
"seminar hall",
"seminar",
"office",
"computer lab",
"labs",
"lab",
"physics lab",
"chemistry lab",
"chem lab",
"physics",
"chemistry"
],

"info": "💻 The CSE Block contains Computer Science classrooms, Computer Labs, Physics Lab and Chemistry Lab. The Principal Office, Fee Counter and Seminar Halls are also located in this building.",

"directions": "From the library turn right. The CSE block is located next to the library."
},

"playground": {
"keywords": ["playground","ground"],
"info": "🏏 The playground is used for sports activities and college events.",
"directions": "The playground is located directly in front of the CSE block."
},

"ece": {
"keywords": ["ece","electronics"],
"info": "📡 The ECE block belongs to the Electronics and Communication Engineering department.",
"directions": "From the playground move towards the right side to reach the ECE block."
},

"mech": {
"keywords": ["mech","mechanical","civil","eee"],
"info": "⚙ This block contains Mechanical, Civil and EEE departments.",
"directions": "From the library move towards the left side to reach the Mechanical block."
},

"workshop": {
"keywords": [
"workshop",
"engineering workshop",
"mechanical workshop",
"workshop lab"
],

"info": "🛠 Engineering Workshops are used for mechanical practical training and hands-on lab sessions.",

"directions": "Two engineering workshop labs are located to the left side of the Mechanical / Civil / EEE block."
},

"aiml": {
"keywords": ["aiml","ai","machine learning"],
"info": "🧠 The AIML block is used for Artificial Intelligence and Machine Learning programs.",
"directions": "From the Mechanical block walk straight forward. The AIML block is located in front of it."
},

"bus": {
"keywords": ["bus","bus parking","buses","transport"],
"info": "🚌 This is the bus parking area where all college buses are parked.",
"directions": "From the AIML block walk forward to reach the bus parking area."
},

"hostel": {
"keywords": ["hostel","boys hostel"],
"info": "🏠 The Boys Hostel provides accommodation for students.",
"directions": "The hostel is located in front of the bus parking area."
},

"canteen": {
"keywords": ["canteen","food","eat"],
"info": "🍴 The canteen provides food and snacks for students.",
"directions": "The canteen is located behind the library."
},

"xerox": {
"keywords": ["xerox","printing","photocopy"],
"info": "📄 The xerox shop is used for printing and photocopying documents.",
"directions": "The xerox shop is attached to the left side of the library."
}

}

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/chatbot")
def chatbot():
    return render_template("chatbot.html")

@app.route("/chat", methods=["POST"])
def chat():

    data = request.get_json()
    message = data.get("message","").lower()

    for place in locations.values():
        if any(keyword in message for keyword in place["keywords"]):
            return jsonify({
                "reply": place["info"] + " " + place["directions"]
            })

    return jsonify({
        "reply": "Sorry, I couldn't find that location. Try asking about library, hostel, playground, canteen, workshop, labs, fee counter or CSE block."
    })

if __name__ == "__main__":
    app.run(debug=True)