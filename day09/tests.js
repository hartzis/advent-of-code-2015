import test from 'tape';
import {
  getDestAndDists,
  getDestinations,
  getDistance,
  getShortestDistance,
} from './index';

test('day 09 getDestAndDists', (t) => {
  t.plan(3);

  let n = getDestAndDists('London to Dublin = 464');
  t.deepEqual(n, new Map([['London', 'London'], ['Dublin', 'Dublin'], ['dist', 464]]));

  n = getDestAndDists('London to Belfast = 518');
  t.deepEqual(n, new Map([['London', 'London'], ['Belfast', 'Belfast'], ['dist', 518]]));

  n = getDestAndDists('Dublin to Belfast = 141');
  t.deepEqual(n, new Map([['Dublin', 'Dublin'], ['Belfast', 'Belfast'], ['dist', 141]]));
});

test('day 09 getDestinations', (t) => {
  t.plan(2);

  const destsAndDists = [
    new Map([['London', 'London'], ['Dublin', 'Dublin'], ['dist', 464]]),
    new Map([['London', 'London'], ['Belfast', 'Belfast'], ['dist', 518]]),
    new Map([['Dublin', 'Dublin'], ['Belfast', 'Belfast'], ['dist', 141]]),
  ];
  const n = getDestinations(destsAndDists);
  t.deepEqual(n, new Set(['Belfast', 'Dublin', 'London']));

  const destsAndDists2 = [
    new Map([['London', 'London'], ['Dublin', 'Dublin'], ['dist', 464]]),
    new Map([['London', 'London'], ['Belfast', 'Belfast'], ['dist', 518]]),
    new Map([['Dublin', 'Dublin'], ['Belfast', 'Belfast'], ['dist', 141]]),
    new Map([['Paris', 'Paris'], ['Belfast', 'Belfast'], ['dist', 141]]),
  ];
  const n2 = getDestinations(destsAndDists2);
  t.deepEqual(n2, new Set(['Belfast', 'Dublin', 'Paris', 'London']));
});

test('day 09 getDistance', (t) => {
  t.plan(1);

  const destsAndDists = [
    new Map([['London', 'London'], ['Dublin', 'Dublin'], ['dist', 464]]),
    new Map([['London', 'London'], ['Belfast', 'Belfast'], ['dist', 518]]),
    new Map([['Dublin', 'Dublin'], ['Belfast', 'Belfast'], ['dist', 141]]),
  ];
  const n = getDistance('Dublin', 'Belfast', destsAndDists);
  t.equal(n, 141);
});

test('day 09 getShortestDistance', (t) => {
  t.plan(2);

  const n = getShortestDistance([
    'London to Dublin = 464',
    'London to Belfast = 518',
    'Dublin to Belfast = 141',
  ]);
  t.equal(n, 605);

  const n2 = getShortestDistance([
    'Norrath to Straylight = 9',
    'Norrath to Tristram = 50',
    'Norrath to Arbre = 60',
    'Straylight to Tristram = 27',
    'Straylight to Arbre = 81',
    'Tristram to Arbre = 90',
  ]);
  t.equal(n2, 96);
});
