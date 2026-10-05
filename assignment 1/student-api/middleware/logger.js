// Custom Logger Middleware
// Logs the HTTP Method, URL, and Timestamp of every incoming request

function logger(req, res, next) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);
  next(); // pass control to the next middleware/route handler
}

module.exports = logger;
