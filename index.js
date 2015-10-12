'use strict'

module.exports = function() {
  return !!(process.release || {}).lts
}
