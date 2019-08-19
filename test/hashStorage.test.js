import hashStorage from '../src/components/options/hash-storage.js';
const test = QUnit.test;

QUnit.module('Hash Storage');

test('reads window location hash as an object', assert => {
    window.location.hash = 'search=bulb&page=1';
    const expected = {
        page: '1',
        search: 'bulb'
    };

    const result = hashStorage.get();

    assert.deepEqual(result, expected);
});

test('sets window location with props', assert => {
    window.location.hash = '';
    const queryProps = {
        search: 'bulb',
        page: '1'
    };
    const expected = 'search=bulb&page=1';

    hashStorage.set(queryProps);
    const result = window.location.hash.slice(1);

    assert.equal(result, expected);
});

test('only set new props on location', assert => {
    window.location.hash = 'search=bulb&page=1';
    const queryProps = {
        page: '2'
    };
    const expected = 'search=bulb&page=2';

    hashStorage.set(queryProps);
    const result = window.location.hash.slice(1);

    assert.equal(result, expected);
});

test('removes key', assert => {
    window.location.hash = 'search=bulb&page=1';
    const key = 'page';
    const expected = 'search=bulb';

    hashStorage.remove(key);
    const result = window.location.hash.slice(1);

    assert.deepEqual(result, expected);
});