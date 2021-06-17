function convertLanes(board) {
  return board
    .map((row, i) => (
      row.map((v, j) => board[board.length - 1 - j][i])
    ))
    .map((row) => row.filter((v) => v));
}

function grab(lanes, lane) {
  return lanes[lane - 1].pop();
}

function put(basket, doll) {
  if (basket[basket.length - 1] === doll) {
    basket.pop();
    return true;
  }
  basket.push(doll);
  return false;
}

function solution(board, moves) {
  const lanes = convertLanes(board);
  const basket = [];
  let count = 0;

  while (moves.length) {
    const doll = grab(lanes, moves.shift());
    const exploded = put(basket, doll);

    if (exploded) {
      count += 2;
    }
  }

  return count;
}

test('solution', () => {
  const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ];
  const moves = [1, 5, 3, 5, 1, 2, 1, 4];

  expect(solution(board, moves)).toBe(4);
});

test('convertLanes', () => {
  const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ];

  expect(convertLanes(board)).toEqual([
    [3, 4],
    [5, 2, 2],
    [1, 4, 5, 1],
    [3, 4],
    [1, 2, 1, 3],
  ]);
});

test('grab', () => {
  const lanes = [
    [3, 4],
    [5, 2, 2],
    [1, 4, 5, 1],
    [3, 4],
    [1, 2, 1, 3],
  ];

  expect(grab(lanes, 1)).toBe(4);
  expect(grab(lanes, 1)).toBe(3);
});

test('put', () => {
  const basket = [4];

  expect(put(basket, 4)).toBeTruthy();
  expect(put(basket, 3)).toBeFalsy();
  expect(put(basket, 3)).toBeTruthy();
});
