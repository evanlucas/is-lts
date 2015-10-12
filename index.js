module.exports = function() {
  return !!(process.release || {}).lts
}
