import test from 'tape';
import {
  getPaperSize,
  getDimensions,
  getTotalPaperSizeFromDimensions,
  getBowRibbon,
  getTotalRibbon,
 } from './index';

test('day 02 paper size', (t)=> {
  t.plan(2);

  let n = getPaperSize({ l: 2, w: 3, h: 4 });
  t.equal(n, 58);

  n = getPaperSize({ l: 1, w: 1, h: 10 });
  t.equal(n, 43);
});

test('day 02 dimensions', (t)=> {
  t.plan(1);

  const n = getDimensions('2x3x4');
  t.deepEqual(n, { l: 2, w: 3, h: 4 });
});

test('day 02 wrapping paper size from dimensions', (t)=> {
  t.plan(2);

  let n = getTotalPaperSizeFromDimensions('2x3x4');
  t.equal(n, 58);

  n = getTotalPaperSizeFromDimensions('1x1x10');
  t.equal(n, 43);
});

test('day 02 bowRibbon', (t)=> {
  t.plan(1);

  const n = getBowRibbon({ l: 2, w: 3, h: 4 });
  t.deepEqual(n, 24);
});

test('day 02 total ribbon from dimensions', (t)=> {
  t.plan(4);

  let n = getTotalRibbon('2x3x4');
  t.equal(n, 34);

  n = getTotalRibbon('1x1x10');
  t.equal(n, 14);

  n = getTotalRibbon('2x5x3');
  t.equal(n, 40);

  n = getTotalRibbon('17x5x1');
  t.equal(n, 97);
});
