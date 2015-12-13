import test from 'tape';
import { getPaperSize, getDimensions, getTotalPaperSizeFromDimensions } from './index';

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
