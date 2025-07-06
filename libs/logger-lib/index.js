const log = (serviceName, message) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${serviceName}] ${message}`);
};

module.exports = { log };
