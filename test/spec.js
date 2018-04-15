const spectronTest = require('./tapeSpectron');

spectronTest('True', assert => {
    assert.equal(true, true, 'should be true');
});

spectronTest('True2', assert => {
    assert.equal(true, true, 'should also be true');
});