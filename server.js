// Define port and start Server services
const app = require('./app');
const PORT = 9055;

const server = app.listen(PORT, () => {
  console.log(`WSV eCommerce start with port ${PORT}...`);
});

// process.on('SIGINT', () => {
//   server.close(() => {
//     console.log(`Exit Server Express!!!`);
//   });
// });
