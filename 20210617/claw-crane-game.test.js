/* eslint-disable max-classes-per-file */

// Object oriented styles

// 1. Crane이 인형을 moves의 첫번째 요소에 해당하는 lane에서 뽑아온다.
// 2. Basket에 뽑은 인형 doll을 넣는다
// 3. 같은 doll이 연속된다면 Basket에서 터진 인형 개수를 카운트한다.

class Lanes {
  constructor({ board }) {
    this.board = board;
    this.lanes = this.createLanes();
  }

  createLanes() {
    return this.board
      .map((row, i) => (
        row.map((_, j) => this.board[this.board.length - j - 1][i])
      ))
      .map((row) => row.filter((v) => v));
  }

  select(number) {
    return this.lanes[number - 1];
  }
}

class Crane {
  constructor({ lanes }) {
    this.lanes = lanes;
    this.position = 1;
  }

  grab() {
    const lane = this.lanes.select(this.position);
    return lane.pop();
  }

  moveTo(position) {
    this.position = position;
  }
}

class Basket {
  constructor() {
    this.dolls = [];
    this.explosions = 0;
  }

  push(doll) {
    if (this.dolls[this.dolls.length - 1] === doll) {
      this.explosions += 2;
      this.dolls.pop();
      return;
    }
    this.dolls.push(doll);
  }

  get count() {
    return this.explosions;
  }
}

function solution(board, moves) {
  const lanes = new Lanes({ board });
  const crane = new Crane({ lanes });
  const basket = new Basket();

  while (moves.length) {
    const position = moves.shift();

    crane.moveTo(position);
    const doll = crane.grab();

    basket.push(doll);
  }

  return basket.count;
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

describe('Lanes', () => {
  test('creation', () => {
    const board = [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ];

    const lanes = new Lanes({ board });
    const lane = lanes.select(1);

    expect(lane.pop()).toBe(4);
    expect(lane.pop()).toBe(3);
  });
});

describe('Crane', () => {
  function createCrane() {
    const board = [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ];

    const lanes = new Lanes({ board });
    return new Crane({ lanes });
  }

  test('creation', () => {
    const crane = createCrane();

    expect(crane.lanes).not.toBeNull();
    expect(crane.position).toBe(1);
  });

  test('grab', () => {
    const crane = createCrane();

    crane.moveTo(2);

    expect(crane.grab()).toBe(2);
  });
});

describe('Basket', () => {
  test('creation', () => {
    const basket = new Basket();

    expect(basket.dolls).not.toBeNull();
  });

  test('push', () => {
    const basket = new Basket();

    basket.push(3);
    basket.push(3);

    expect(basket.count).toBe(2);
  });
});
