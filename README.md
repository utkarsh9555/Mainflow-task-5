# Calculator App

This is a simple calculator application built with React. The calculator can perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

## Features

- Addition
- Subtraction
- Multiplication
- Division
- Clear input

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

You need to have Node.js and npm installed on your machine. You can download and install them from [Node.js](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/calculator-app.git
   ```

2. Navigate to the project directory:
   ```sh
   cd calculator-app
   ```

3. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Application

To start the development server, run:
```sh
npm start
```

This will start the application and you can view it in your browser at `http://localhost:3000`.

### Building for Production

To create a production build, run:
```sh
npm run build
```

This will create an optimized build of the application in the `build` directory.

## Project Structure

```
calculator-app/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── Calculator.js
│   │   ├── Display.js
│   │   ├── Button.js
│   │   └── Calculator.css
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── ...
├── package.json
├── README.md
└── ...
```

## Components

- `Calculator.js`: The main component that contains the calculator logic and layout.
- `Display.js`: A component to display the input and result.
- `Button.js`: A reusable button component for numbers and operations.
- `Calculator.css`: The CSS file for styling the calculator.

## Note

One of the dependencies, `babel-preset-react-app`, imports `@babel/plugin-proposal-private-property-in-object` without declaring it. To avoid potential issues, we add this plugin manually to the `devDependencies`.

To add this dependency, run:
```sh
npm install --save-dev @babel/plugin-proposal-private-property-in-object
```

## License

This project is licensed under the MIT License.
