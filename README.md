This project is a simple React-based web application that fetches and displays real-time news headlines using the News API. It demonstrates the integration of external APIs, asynchronous data fetching, error handling, and responsive UI design.
## TABLE OF CONTENTS
1.Features  
2.Technologies Used  
3.Installation  
4.Usage  
5.Configuration  
6.Additional Libraries

## FEATURES
->Real-Time News Headlines: Displays the top 5 latest news headlines fetched from the News API.  
->Error Handling: Shows user-friendly error messages if the API request fails.  
->Responsive Design: Ensures a seamless experience on different devices.  
->Direct Links: Each headline links to the full article on the respective news website.

## TECHNOLOGIES USED
->React.js: For building the user interface.  
->Axios: For making HTTP requests to the News API.  
->CSS: For styling the application and ensuring responsive design.

## INSTALLATION
##### PRE-REQUISITES
1.Node.js (v14 or above)  
2.npm (v6 or above) or Yarn

###### STEPS
Indented code

1.Clone the repository:  
git clone https://github.com/Nandini2903/News-Website.git  
cd News-Website

2.Install dependencies:
*If using npm:
npm install
*Or if using Yarn:
yarn install

3.Create a .env file in the root directory:
touch .env  
-->Add your News API key to the .env file:  
REACT_APP_NEWS_API_KEY=your_news_api_key_here  
Replace `your_news_api_key_here` with your actual News API key.

## USAGE
##### Running the Application Locally
After installing dependencies and setting up the environment variables, start the development server:
npm start
The application will run at `http://localhost:3000/` by default. Open this URL in your browser to view the app.

## CONFIGURATION
#### Environment Variables
This application requires an API key from the News API to function. Sign up at News API to get your API key and add it to the `.env` file as shown above.
#### Additional Libraries
->Axios: A promise-based HTTP client for making requests to the News API.  
Installation: npm install axios or yarn add axios  
->dotenv: To load environment variables from a .env file into process.env.  
Installation: npm install dotenv or yarn add dotenv

