
class Set {

  constructor(...values) {
    this.values = [...values];
  }

  append(value) {
    if (this.contains(value)) {
      return;
    }
    this.values.push(value);
  }

  remove(value) {
    const index = this.values.indexOf(value);
    if (index < 0) {
      return;
    }
    this.values.splice(index, 1);
  }

  getValues() {
    return this.values;
  }

  contains(value) {
    return this.values.indexOf(value) >= 0;
  }

  size() {
    return this.values.length;
  }

  equals(other) {
    if (this.size() !== other.size()) {
      return false;
    }

    return this.values.every(i => other.contains(i));
  }

  isSubset(other) {
    if (this.size() > other.size()) {
      return false;
    }

    return this.values.every(i => other.contains(i));

    // for (let i = 0; i < this.values.length; i++) {
    //   if (!other.contains(this.values[i])) {
    //     return false;
    //   }
    // }
    // return true;
  }

  union(other) {
    const set = new Set(...this.values);
    other.values.forEach(i => set.append(i));
    return set;
  }

  difference(other) {
    const values = this.values.filter(i => !other.contains(i));
    return new Set(...values);
  }

  intersection(other) {
    const values = this.values.filter(i => other.contains(i));
    return new Set(...values);
  }
}

test('constructor', () => {
  const set = new Set(1, 2, 3);
  expect(set.size()).toBe(3);
  expect(set.getValues()).toEqual([1, 2, 3]);
});

test('append', () => {
  const set = new Set();
  set.append(1);
  set.append(1);
  set.append(2);
  set.append(3);

  expect(set.size()).toBe(3);
  expect(set.contains(1)).toBeTruthy();

  expect(set.getValues()).toEqual([1, 2, 3]);
});

test('remove', () => {
  const set = new Set();
  set.append(1);  
  set.append(2);
  
  set.remove(2);
  expect(set.size()).toBe(1);
  expect(set.contains(2)).toBeFalsy();
  set.remove(2);
});

test('equals', () => {
  const a = new Set(1, 2, 3);
  const b = new Set(3, 2, 1);
  const c = new Set(1, 2, 3, 4);
  const d = new Set(2, 3, 4);
  expect(a.equals(b)).toBeTruthy();
  expect(a.equals(c)).toBeFalsy();
  expect(a.equals(d)).toBeFalsy();
});

test('union', () => {
  const a = new Set(1, 2);
  const b = new Set(2, 3);

  expect(a.union(b).getValues()).toEqual([1, 2, 3]);
});

test('difference', () => {
  const a = new Set(1, 2, 3);
  const b = new Set(2, 3, 4, 5);

  expect(a.difference(b).getValues()).toEqual([1]);
  expect(b.difference(a).getValues()).toEqual([4, 5]);
});

test('intersection', () => {
  const a = new Set(1, 2, 3);
  const b = new Set(2, 3, 4, 5);

  expect(a.intersection(b).getValues()).toEqual([2, 3]);
});

test('subset', () => {
  const a = new Set(1, 2, 3);
  const b = new Set(1, 2);
  const c = new Set(1, 2, 4);

  expect(b.isSubset(a)).toBeTruthy();
  expect(a.isSubset(c)).toBeFalsy();
});

//

function d(n) {
  return n + sumOfDigits(n);
}

function sumOfDigits(n) {
  if (n < 10) {
    return n;
  }
  return sumOfDigits(Math.floor(n / 10)) + n % 10;
}

function selfNumbers(n) {
  // const numbers = Array(n).fill(0).map((v, i) => i + 1);
  const numbers = Array.from({length: n}, (v, i) => i + 1);
  const a = new Set(...numbers);
  const b = new Set(...numbers.map(i => d(i)));
  return a.difference(b).getValues();
}

test('selfNumbers', () => {
  expect(selfNumbers(20)).toEqual([1, 3, 5, 7, 9, 20]);
});

test('d(n)', () => {
  expect(d(1)).toBe(2);
  expect(d(12)).toBe(15);
});

test('sumOfDigits', () => {
  expect(sumOfDigits(1)).toBe(1);
  expect(sumOfDigits(12)).toBe(3);
  expect(sumOfDigits(123)).toBe(6);
  expect(sumOfDigits(1234)).toBe(10);
});