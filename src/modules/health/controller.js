/**
 * Health Controller
 */

const service = require("./service");

module.exports = {
  get: async (_, res) => {
    res.json(await service.healthCheck());
  },
};
