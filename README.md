# AI Chatbot for Campus Navigation

## Project Description
This project is an AI-powered chatbot designed to assist students and visitors in navigating the Pragati Engineering College campus. The chatbot provides information about various campus locations, including directions and key details, through a user-friendly web interface. It leverages natural language processing to understand user queries and respond with relevant location information.

## Problem Statement
Navigating large campuses can be challenging for new students, visitors, and even existing students unfamiliar with specific locations. Traditional maps or directories may not provide real-time, conversational assistance. This project addresses the need for an interactive, AI-driven navigation tool that can answer queries in natural language and provide accurate directions to campus facilities.

## Features
- **Interactive Chat Interface**: Web-based chat interface with real-time responses
- **Location Database**: Comprehensive information about campus locations including library, CSE block, playground, ECE block, Mechanical block, workshops, AIML block, bus parking, hostel, canteen, and xerox shop
- **Keyword-Based Matching**: Intelligent matching of user queries to relevant locations
- **Responsive Design**: Modern, mobile-friendly UI with glassmorphism design
- **Real-time Directions**: Provides step-by-step directions to each location
- **Location Highlighting**: Visual feedback for queried locations

## Technology Used
- **Backend**: Python with Flask framework
- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Custom CSS with glassmorphism effects and animations
- **CORS Support**: Flask-CORS for cross-origin requests
- **Version Control**: Git
- **Deployment**: Local development server (Flask's built-in server)

## Project Structure
```
AI-Chatbot-For-Campus-Navigation/
├── app.py                    # Main Flask application with chatbot logic
├── static/
│   └── js/
│       └── chatbot.js        # Frontend JavaScript for chat functionality
├── templates/
│   ├── index.html            # Landing page
│   └── chatbot.html          # Chatbot interface
└── README.md                 # Project documentation
```

## Installation/Setup
1. **Prerequisites**:
   - Python 3.7 or higher
   - pip package manager

2. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd AI-Chatbot-For-Campus-Navigation
   ```

3. **Install Dependencies**:
   ```bash
   pip install flask flask-cors
   ```

4. **Run the Application**:
   ```bash
   python app.py
   ```

5. **Access the Application**:
   - Open your web browser and navigate to `http://localhost:5000`
   - The landing page will load first
   - Click on the chatbot link or navigate to `/chatbot` for the chat interface

## Usage
1. **Landing Page**: Visit the home page to see an overview of the Campus AI Navigator
2. **Chat Interface**: Navigate to the chatbot page
3. **Ask Questions**: Type natural language queries about campus locations, such as:
   - "Where is the library?"
   - "How do I get to the CSE block?"
   - "Tell me about the canteen"
   - "Directions to the playground"
4. **Receive Responses**: The chatbot will provide location information and directions
5. **Quick Access**: Use the sidebar buttons for direct access to popular locations

## Sample Output
**User Query**: "Where is the library?"

**Chatbot Response**:
"📚 The Central Library is the main study area of the campus. After entering the main gate walk straight. The library building will be directly ahead."

**User Query**: "How to reach the hostel?"

**Chatbot Response**:
"🏠 The Boys Hostel provides accommodation for students. The hostel is located in front of the bus parking area."

## Future Improvements
- Integration with GPS for real-time location tracking
- Voice input and output capabilities
- Mobile app development (iOS/Android)
- Integration with campus event calendar
- Multi-language support
- Advanced AI models for more natural conversations
- User authentication and personalized experiences
- Campus map visualization with interactive elements
- Integration with transportation schedules
- Emergency contact and safety features

## Author
**Name**: KUSUMANCHI CHARAN  
**Role**: STUDENT  
**LinkedIn URL**: https://www.linkedin.com/in/charan-kusumanchi