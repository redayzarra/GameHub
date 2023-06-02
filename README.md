# Game Hub - Video Game Showcase

[Game Hub](https://game-hub-flame-two.vercel.app/) is a comprehensive web application built using React and TypeScript. This project is part of a project-based course offered by [Code with Mosh](https://codewithmosh.com/p/ultimate-react-part1), aiming to provide practical experience in developing modern web applications. The application is designed to create an engaging platform for gamers to explore and discover various video games. 

The application consumes data from the [RAWG API](https://rawg.io/apidocs), one of the largest video game databases that provides comprehensive details about games including titles, thumbnails, screenshots, videos, and many more. As part of the course, the project incorporates essential aspects of a modern web application including responsiveness, accessibility, and efficient state management, among others.

With this application, users can browse through a vast library of video games. Each game on the platform is presented with detailed information, including high-quality screenshots and videos, offering a sneak peek into the gameplay.

<div align="center">
 
  <img src="https://github.com/redayzarra/web-gamesite-project/assets/113388793/847c956e-ddc0-4251-a1e2-8f77dc0fec12" alt="HomePage">
  <p>Home Page</p>

</div>

<div align="center">
 
  <img src="https://github.com/redayzarra/web-gamesite-project/assets/113388793/949be238-21f5-47d5-a2ca-c5549ff131cf" alt="GameDetailsPage">
  <p>Game Details Page</p>
 
</div>

## Features

- **Game Grid:** An organized display of video games in a grid layout for easy browsing. Each cell in the grid represents a game with its corresponding thumbnail.

- **Game Details:** Clicking on a game directs the user to a page with more detailed information about the game, including screenshots and gameplay videos.

- **Genre List:** Users can explore games based on their favorite genres. The Genre List component presents a list of genres that users can choose from.

- **Platform Selector:** Users can filter games based on the gaming platform of their choice. The Platform Selector allows users to choose a gaming platform to refine their search.

- **Sort Selector:** Users can sort games based on different criteria such as popularity, release date, etc. using the Sort Selector.

- **Search Input:** A powerful search feature that allows users to search for their favorite games directly.

- **Color Mode Switch:** Users can switch between dark mode and light mode based on their preference.

- **Responsive Design:** The application is built with a mobile-first approach and is responsive to different screen sizes.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of npm and Node.js.
- You have a Windows/Linux/Mac machine.

### Installing

1. Clone the repository
```bash
git clone https://github.com/username/projectname.git
```

2. Move into the new project
```bash
cd projectname
```

3. Install the dependencies
```bash
npm install
```

4. Start the development server
```bash
npm start
```
Open http://localhost:3000, or any link that shows up in the terminal, with your browser to see the result.

## Tech Stack

* React.js: Frontend web library
* TypeScript: A superset of JavaScript adding static types and modern features
* RAWG API: API service providing the game data
* Chakra UI: UI library for designing the interface
* react-router-dom: For routing and navigation in the app
