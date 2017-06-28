/**
 * Created by dhkim on 2017-05-12.
 */
const utils = require('./practice_#9_TDD_capitialize');
//const assert = require('assert');
const should = require('should');

describe('practice_#9_TDD_capitialize 모듈의 capitialize() 함수는,', () => {
  it('문자열의 첫번째 문자를 대분자로 변환한다.', () => {
    const result = utils.capitialize('hello');
    result.should.be.equal('Hello');
    //assert.equal(result, 'Hello');
  });

});