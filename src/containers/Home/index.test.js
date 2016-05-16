import test from 'blue-tape';

test('test2', (t) => {
  t.plan(2);

  t.equal(1 + 1, 2);
  setTimeout(() => {
    t.deepEqual(
      'ABC'.toLowerCase().split(''), ['a', 'b', 'c']
    );
  });
});
