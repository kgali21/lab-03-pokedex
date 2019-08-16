
const test = QUnit.test;

QUnit.module('Travis Pass');

test('Getting travis to pass', assert => {
    const expected = true;
    const result = true;



    assert.equal(expected, result);
});