'use strict'

var test = require('tap').test
var isLTS = require('../')

test('should work for lts versions', function(t) {
  t.plan(1)

  t.equal(isLTS(), !!(process.release || {}).lts)
})
