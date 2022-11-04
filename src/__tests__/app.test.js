import sortOrder from '../app';

test('comparison', () => {
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const received = sortOrder();
  expect(received).toEqual(expected);
});
