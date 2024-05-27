// Base class for shapes
class Shape {
    constructor() {
      this.color = ""; // Initialize color property
    }
  
    // Method to set color
    setColor(color) {
      this.color = color;
    }
  }
  
  // Circle class extending Shape
  class Circle extends Shape {
    // Method to render circle SVG markup
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`; // Return circle SVG markup with color
    }
  }
  
  // Triangle class extending Shape
  class Triangle extends Shape {
    // Method to render triangle SVG markup
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`; // Return triangle SVG markup with color
    }
  }
  
  // Square class extending Shape
  class Square extends Shape {
    // Method to render square SVG markup
    render() {
      return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`; // Return square SVG markup with color
    }
  }
  
  // Export the classes
  module.exports = { Circle, Triangle, Square };
  