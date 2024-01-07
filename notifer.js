const notifier = require('node-notifier');

// Function to trigger the alert
const triggerAlert = () => {
  notifier.notify({
    title: 'Alert!',
    message: 'hello user bot is here for see you.',
    sound: true, // Plays the default notification sound
  });
};

// Example: Trigger the alert after a delay (adjust as needed)
setTimeout(() => {
  triggerAlert();
}, 5000); // 5000 milliseconds (5 seconds)
