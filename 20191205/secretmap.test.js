const getDecryptedMap = (n, arr1, arr2) => 
  convertBinaryToSymbol(
    combineMaps(
      [arr1, arr2].map(decryptIntArrayToBinaryArray)
    )
  ).map((v) =>  v.join(''));
  // const realMap =  combineMaps(decryptIntArrayToBinaryArray(arr1), decryptIntArrayToBinaryArray(arr2));

const decryptIntArrayToBinaryArray = (array) =>
  array.map((v, i) => 
      v.toString(2)
        .padStart(array.length,'0')
        .split('')
        .map((v) => parseInt(v))
  );

const combineMaps = ([arr1, arr2]) => arr1.map((v1, i1) => 
                      v1.map((_, i2) => arr1[i1][i2] ==1 || arr2[i1][i2] == 1 ? 1 : 0 ));

const convertBinaryToSymbol = (combinedMap) =>
  combinedMap.map((v1, i1) => 
    v1.map((_, i2) => combinedMap[i1][i2] == 1 ? "#" : " "));


test('getDecryptedMap', () => {
  expect(getDecryptedMap(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])).
                              toEqual(["#####","# # #", "### #", "#  ##", "#####"]);
});

test('decryptIntArrayToBinaryArray', () => {
  expect(decryptIntArrayToBinaryArray([9, 20, 28, 18, 11])).toEqual([[0,1,0,0,1],[1,0,1,0,0],
                                                                  [1,1,1,0,0],[1,0,0,1,0],[0,1,0,1,1]]);
  expect(decryptIntArrayToBinaryArray([30, 1, 21, 17, 28])).toEqual([[1,1,1,1,0],[0,0,0,0,1],
                                                                  [1,0,1,0,1],[1,0,0,0,1],[1,1,1,0,0]]);
});

test('combineMaps', () =>{
  // expect(combineMaps([[0,1,0,0,1],[1,0,1,0,0],[1,1,1,0,0],[1,0,0,1,0],[0,1,0,1,1]],
  //                         [[1,1,1,1,0],[0,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,0,0]]))
  //                         .toEqual([[1,1,1,1,1],[1,0,1,0,1],[1,1,1,0,1],[1,0,0,1,1],[1,1,1,1,1]]);
  expect(combineMaps([[[0,1,0,0,1],[1,0,1,0,0],[1,1,1,0,0],[1,0,0,1,0],[0,1,0,1,1]],
                          [[1,1,1,1,0],[0,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,0,0]]]))
                          .toEqual([[1,1,1,1,1],[1,0,1,0,1],[1,1,1,0,1],[1,0,0,1,1],[1,1,1,1,1]]);
});

test('convertBinaryToSymbol', () => {
  expect(convertBinaryToSymbol([[1,1,1,1,1],[1,0,1,0,1],[1,1,1,0,1],[1,0,0,1,1],[1,1,1,1,1]]))
                              .toEqual([["#","#","#","#","#"],
                                        ["#"," ","#"," ","#"], 
                                        ["#","#","#"," ","#"], 
                                        ["#"," "," ","#","#"], 
                                        ["#","#","#","#","#"]]);
});