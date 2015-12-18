import test from 'tape';
import {
  getTotal,
  getTotalNoRedObj,
} from './index';

test('day 12 getTotal', (t) => {
  t.plan(8);

  let n = getTotal([1,2,3]);
  t.equal(n, 6);

  n = getTotal({"a":2,"b":4});
  t.equal(n, 6);

  n = getTotal([[[3]]]);
  t.equal(n, 3);

  n = getTotal({"a":{"b":4},"c":-1});
  t.equal(n, 3);

  n = getTotal({"a":[-1,1]});
  t.equal(n, 0);

  n = getTotal([-1,{"a":1}]);
  t.equal(n, 0);

  n = getTotal([]);
  t.equal(n, 0);

  n = getTotal({});
  t.equal(n, 0);
});

test('day 12 getTotalNoRedObj', (t) => {
  t.plan(4);

  let n = getTotalNoRedObj([1,2,3]);
  t.equal(n, 6);

  n = getTotalNoRedObj([1,{"c":"red","b":2},3]);
  t.equal(n, 4);

  n = getTotalNoRedObj({"d":"red","e":[1,2,3,4],"f":5});
  t.equal(n, 0);

  n = getTotalNoRedObj([1,"red",5]);
  t.equal(n, 6);
})

// [1,2,3] and {"a":2,"b":4} both have a sum of 6.
// [[[3]]] and {"a":{"b":4},"c":-1} both have a sum of 3.
// {"a":[-1,1]} and [-1,{"a":1}] both have a sum of 0.
// [] and {} both have a sum of 0.
