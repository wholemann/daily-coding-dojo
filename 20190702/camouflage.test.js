// function getCloset(clothes) {
//   const closetObj = {};
//   clothes.forEach(v => closetObj[v[1]] === undefined ? closetObj[v[1]] = [v[0]] : closetObj[v[1]].push(v[0]));

//   return closetObj;
// }

// function getNumberOfCases(clothes) {
//   const closetObj = getCloset(clothes);
//   const typeOfClothes = Object.keys(closetObj);

//   let cases = 1;
//   typeOfClothes.forEach(v => cases *= (closetObj[v].length + 1));
//   cases--;

//   return cases;
// }


// test('getNumberOfCases', () => {
//   expect(getNumberOfCases([[`yellow_hat`, `headgear`], [`blue_sunglasses`, `eyewear`], [`green_turban`, `headgear`]])).toBe(5);
//   expect(getNumberOfCases([['crow_mask', 'face'], ['blue_sunglasses', 'face'], ['smoky_makeup', 'face']])).toBe(3);
// });

// test('getCloset', () => {
//   const closet = {
//     face: ['crow_mask', 'blue_sunglasses', 'smoky_makeup']
//   };
//   expect(getCloset([['crow_mask', 'face'], ['blue_sunglasses', 'face'], ['smoky_makeup', 'face']])).toMatchObject(closet);
// });

const obj = {
  i: 10,
  func() {
    console.log(this.i, this);
  }
}

console.log(obj.func());