const fs = require('fs');
const shapes = require('./Lib/Shapes');
const readline = require('readline');

// Setup readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to get user input from the command line
const getInput = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

(async () => {
  // Prompt user for logo text
  const text = await getInput('Enter up to three characters for the logo text: ');
  if (text.length > 3) {
    console.log('Please enter no more than three characters.');
    rl.close();
    return;
  }

  // Prompt user for text color
  const textColor = await getInput('Enter the text color (keyword or hexadecimal): ');

  // Prompt user for shape selection
  const shape = await getInput('Choose a shape (circle, triangle, square): ');

  // Prompt user for shape color
  const shapeColor = await getInput('Enter the shape\'s color (keyword or hexadecimal): ');

  // Determine the shape based on user input and create the corresponding object
  let svgShape;
  switch (shape) {
    case 'circle':
      svgShape = new shapes.Circle(shapeColor);
      break;
    case 'triangle':
      svgShape = new shapes.Triangle(shapeColor);
      break;
    case 'square':
      svgShape = new shapes.Square(shapeColor);
      break;
    default:
      console.log('Invalid shape.');
      rl.close();
      return;
  }

  // Generate SVG content using the selected shape and text
  const svgContent = svgShape.render(text, textColor);

  // Write the SVG content to a file
  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
  rl.close();
})();
