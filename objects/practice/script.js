/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const computer = {
  name: "Monster",
  battery: "Lion-II",
  color: "black",
  weight: 2,
  camera: {
    model: "Samsung",
    resolution: 1044,
  },
  cameraOpen: false,
  toggleCamera: function (cameraStatus) {
    this.cameraOpen = cameraStatus;
  },
};

console.log("The computer object:", computer);
console.log("The camera status:", computer.cameraOpen);
computer.toggleCamera(true);
console.log("The camera status:", computer.cameraOpen);
