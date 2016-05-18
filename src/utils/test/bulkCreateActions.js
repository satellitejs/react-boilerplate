import test from 'blue-tape';
import bulkCreateActions from '../bulkCreateActions';

const actionMap = {
  foo: 'FOO',
  bar: 'BAR',
  baz: 'BAZ',
};

test('Util: bulkCreateActions', (t) => {
  t.plan(12);

  const { foo, bar, baz } = bulkCreateActions(actionMap);

  t.assert(foo !== undefined, 'should not be undefined');
  t.assert(bar !== undefined, 'should not be undefined');
  t.assert(baz !== undefined, 'should not be undefined');

  t.equal(foo().type, actionMap.foo, 'should return an action creator');
  t.equal(bar().type, actionMap.bar, 'should return an action creator');
  t.equal(baz().type, actionMap.baz, 'should return an action creator');

  t.equal(foo.type, actionMap.foo, 'should contain action type in type property');
  t.equal(bar.type, actionMap.bar, 'should contain action type in type property');
  t.equal(baz.type, actionMap.baz, 'should contain action type in type property');

  const payload = { some: 'value' };
  t.deepEqual(foo(payload).payload, payload, 'should return payload');
  t.deepEqual(bar(payload).payload, payload, 'should return payload');
  t.deepEqual(baz(payload).payload, payload, 'should return payload');
});
