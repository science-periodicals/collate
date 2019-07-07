import assert from 'assert';
import { toIndexableString, parseIndexableString } from '../src';

describe('collate', function() {
  describe('toIndexableString', () => {
    it('should create a string', () => {
      const id = toIndexableString(['a', 'b', 'c']);
      assert.equal(id, 'a::b::c');
    });
  });

  describe('parseIndexableString', () => {
    it('should create an array', () => {
      const parsed = parseIndexableString('a::b::c');
      assert.deepEqual(parsed, ['a', 'b', 'c']);
    });
  });
});
