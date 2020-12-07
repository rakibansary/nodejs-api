async function healthCheck() {
  return {
    checksRun: 1,
  };
}

module.exports = { healthCheck };
