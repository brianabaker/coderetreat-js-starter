var assert = chai.assert;

mocha.setup('bdd');

describe('First test', function() {
  it('Answer to the Ultimate Question of Life, the Universe, and Everything', function() {
    assert.equal(foo(), 42);
  });
});

mocha.run();