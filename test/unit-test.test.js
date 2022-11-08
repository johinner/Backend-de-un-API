const assert = require('chai').assert;


function addValue(a, b) {
    return a+b;
}

describe('Suite de prueba para el curso', () => {
    it('should return', () => {
        let va = addValue(2, 2);
        assert.equal(va, 4);
    })
})