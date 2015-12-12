import test from 'tape';
import { main } from './index';

test('day 01 santa floor tests', (t)=> {
  t.plan(9);

  let n = main('(())');
  t.equal(n, 0);

  n = main('()()');
  t.equal(n, 0);

  n = main('(((');
  t.equal(n, 3);

  n = main('(()(()(');
  t.equal(n, 3);

  n = main('))(((((');
  t.equal(n, 3);

  n = main('())');
  t.equal(n, -1);

  n = main('))(');
  t.equal(n, -1);

  n = main(')))');
  t.equal(n, -3);

  n = main(')())())');
  t.equal(n, -3);
});
