# Project Title

**CryptX**: This project fetches financial data from a cryptocurrency API, displays a chart showing data trends over the last 6 months, and provides live updates every minute using Vite and React.

**Project Live URL**: https://cryptx-app.onrender.com

# Features

**Data Fetching**: Retrieves historical and live data from a cryptocurrency API.

**Chart Display**: Renders a chart showing data trends for the past 6 months using Chart.js.

**Live Data Updates**: Updates the chart and displays live data every minute.

# Installation
Prerequisites: Ensure you have Node.js and npm/yarn installed on your system.

# Clone the repository
git clone https://github.com/Nagyvee/CryptX-project.git

# Navigate into the project directory
cd CryptX-project

# Install dependencies
npm install

#Usage
Running the Project: Instructions to start the development server and view the project.

# Start the development server
npm run dev

# Build the project for production
npm run build

# Components
**Key Components:**

**App.jsx**: Main component that orchestrates the fetching and rendering of data.

**TopSection.jsx**: Handles fetching data for the past 6 months and rendering the chart using Chart.js.

**BottomSection.jsx**: Manages the fetching and updating of live data every minute.

**Login.jsx and Signup.jsx**: Handle user login and signup functions using the @clerk/clerk-react library.

# Environment Variables
To start the project, you need to create a .env file with your React client key for user authentication. This is required as the routes are protected and accessible only by authenticated users.

Example .env file:

makefile
VITE_REACT_CLERK_API_KEY=your_client_key_here

# How the Project Works

**User Authentication:** Users must log in or register to access the '/' route. Authentication is required to use the app.

**Home Page Logic:**

On login, the app fetches data for the default coin, Bitcoin, for the past 6 months.
It also fetches and displays live data.

**Chart Display:**

A chart is rendered showing Bitcoin data for the previous 6 months.
Users can view charts for other cryptocurrencies by selecting them, which updates the chart with the new data.
**Live Data Updates:**
Live data is displayed in the bottom section of the app.
The app polls for live updates every minute and updates the component with new values.

**Logout:**
Users can log out using the logout button in the sidebar.
