// Import the shape classes
const { Circle, Triangle, Square } = require('./Shapes');

// Test suite for the Circle class
test('Circle renders correctly', () => {
  // Create a new Circle instance with a color
  const circle = new Circle();
  circle.setColor('#ff0000'); // Set color to red

  // Render the circle and check if the SVG markup contains expected elements and attributes
  const svg = circle.render();
  expect(svg).toMatch(/<circle/); // Check if SVG contains a circle element
  expect(svg).toMatch(/fill="#ff0000"/); // Check if the circle has the correct fill color
});

// Test suite for the Triangle class
test('Triangle renders correctly', () => {
  // Create a new Triangle instance with a color
  const triangle = new Triangle();
  triangle.setColor('#00ff00'); // Set color to green

  // Render the triangle and check if the SVG markup contains expected elements and attributes
  const svg = triangle.render();
  expect(svg).toMatch(/<polygon/); // Check if SVG contains a polygon element
  expect(svg).toMatch(/fill="#00ff00"/); // Check if the triangle has the correct fill color
});

// Test suite for the Square class
test('Square renders correctly', () => {
  // Create a new Square instance with a color
  const square = new Square();
  square.setColor('#0000ff'); // Set color to blue

  // Render the square and check if the SVG markup contains expected elements and attributes
  const svg = square.render();
  expect(svg).toMatch(/<rect/); // Check if SVG contains a rect element
  expect(svg).toMatch(/fill="#0000ff"/); // Check if the square has the correct fill color
});
