const solution = (numbers) => [...new Set(combNumbers(numbers))].length;

const eratosthenes = (n) => {
  const sieve = [false, false, ...Array(n - 1).fill(true)];

  for (let i = 2; i < n + 1; i++) {
    if (sieve[i]) {
      sieve[i] = i;
      for (let j = i * 2; j < n + 1; j += i) {
        sieve[j] = false;
      }
    }
  }

  return sieve.filter(v => !!v);
};

const combNumbers = (s) => {
  const results = [];
  const pieces = [...`${s}`];
  pieces.sort((a, b) => b - a);
  const primes = new Set(eratosthenes(Math.max(pieces.join(''))));
  
  const perm = (nums, result = '') => {
    if (result.length !== 0 && primes.has(Number(result))) {
      results.push(Number(result));
    }

    if (nums.length === 0) {
      return;
    }

    nums.forEach((v, index) =>
     perm(nums.filter((_, i) => index !== i), result + v)
    );
  };

  perm(pieces);

  return results;
};

test('solution', () => {
  expect(solution('17')).toBe(3);
  expect(solution('011')).toBe(2);
});

test('sieve', () => {
  expect(eratosthenes(10)).toEqual([2, 3, 5, 7]);
});

test('combNumbers', () => {
  expect(combNumbers('17')).toEqual(expect.arrayContaining([7, 17, 71]));
});
