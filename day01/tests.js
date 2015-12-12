import test from 'tape';
import { main, second } from './index';

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

test('day 01 first char to make santa enter the basement', (t)=>{
  t.plan(4);

  let n = second(')');
  t.equal(n, 1);

  n = second('()())');
  t.equal(n, 5);

  n = second('((((()))))())))');
  t.equal(n, 13);

  n = second('(((((');
  t.equal(n, 0);
});
