// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
// Or async function
module.exports = async () => {
  return {
    verbose: true,
    testEnvironment: "jest-environment-node",
    transform: {},
  };
};
