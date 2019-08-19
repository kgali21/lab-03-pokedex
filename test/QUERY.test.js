import QUERY from '../src/components/options/QUERY.js';
const test = QUnit.test;

QUnit.module('Query String Parser');

test('converts string to object', assert => {
    const query = 'search=bulb&page=1';
    const expected = {
        search: 'bulb',
        page: '1'
    };

    const queryProps = QUERY.parse(query);

    assert.deepEqual(queryProps, expected);
});

test('converts object to string', assert => {
    const queryProps = {
        search: 'bulb',
        page: '1'
    };

    const expected = 'search=bulb&page=1';

    const query = QUERY.stringify(queryProps);

    assert.deepEqual(query, expected);
});