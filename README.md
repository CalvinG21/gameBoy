# Hang-Man

Hang-Man Game is a classic word-guessing game built using React functional components, React hooks, React-Redux and React-Bootstrap. A player will have 10 atempts to try and guess a secret word and if player guesses all correct alphabets of the word then game is won, else lost.

## How to Play

1. Access the Hangman Game React application.
2. Select a difficulty level.
3. Click the "Start Game" button to begin the game.
4. A random word will be chosen for you to guess.
4. Use your keyboard or on-screen keyboard to guess letters one by one.
5. If the letter is part of the word, it will be revealed in its correct position(s) and the alphabet button will turn green.
6. If the letter is not part of the word, the Hangman figure will begin to appear on the graphic and the alphabet button will turn red.
7. Keep guessing until you have correctly guessed all the letters in the word or the Hangman figure is completed.
8. You win if you guess the word before the Hangman is completed; otherwise, you lose.

## Installation and Setup

1. Clone this repository to your local machine.
2. Navigate to the project directory using the terminal or command prompt.
3. Run `npm install` to install the required dependencies.
4. Run `npm start` to start the development server.
5. The application will open in your default web browser at `http://localhost:3000`.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React functional components: Using functional components and hooks to manage state and behavior.
- React Hooks: to handle components lifecycle,set-up and user interaction.
- React-Bootstrap: A library that integrates Bootstrap components with React, providing a responsive design and UI elements.
- React-Redux: Global State storage of data accessible to all components of the application

## Project Structure

The project is organized into the following directories:

- `src`: Contains the main source code for the Hangman Game.
  - `components`: Contains reusable React components used in the game.
  - `reduxStore`: Contains a global redux store and slices of state.
  - `images`: Contains images used in the game. 
  - `App.js`: The main application component that renders the game.

## Credits

The Hangman Game was developed by Calvin Govindsamy.

## Acknowledgments

Special thanks to [mention any external libraries, tutorials, or resources used] for their valuable contributions to this project.

## Feedback and Contribution

Feedback and contributions are welcome! If you find any issues or have ideas to improve the game, please feel free to create an issue or submit a pull request.
