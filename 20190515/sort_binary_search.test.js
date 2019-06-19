function binarySearch(sortedPhoneBook, searchValue, startIndex, endIndex){
  
  if (!startIndex) {
    startIndex = 0;
  }
  if (!endIndex) {
    endIndex = sortedPhoneBook.length - 1;
  }

  const middleIndex = startIndex + Math.floor((endIndex - startIndex)/2);
  const middle = sortedPhoneBook[middleIndex].name

  if (middle === searchValue) {
    return middleIndex;
  }

  if (searchValue > middle) {
    return binarySearch(sortedPhoneBook, searchValue, middleIndex + 1, endIndex);
  }
  if (searchValue < middle) {
    return binarySearch(sortedPhoneBook, searchValue, startIndex, middleIndex - 1);
  }
  
}


function quickSort(phoneBook) {

  if (phoneBook.length === 0) {
    return [];
  }

  const pivotIndex = Math.floor(phoneBook.length/2);
  const pivot = phoneBook[pivotIndex].name;

  const left = [];
  const right = [];
  
  for (let i = 0; i < phoneBook.length; i++){
    if (pivot > phoneBook[i].name) {
      left.push(phoneBook[i]);
    }
    
    if (pivot < phoneBook[i].name) {
      right.push(phoneBook[i]);    
    }
  }

  return [...quickSort(left), phoneBook[pivotIndex], ...quickSort(right)];
}



test('quick_sort', () => {
  const createPhoneBook = (names) => names.map(name => ({name}));
  const getName = i => i.name;

  [
    [[], []],
    [['a'], ['a']],
    [['b', 'a'], ['a', 'b']]
  ].forEach(([origin, sorted]) => {
    expect(quickSort(createPhoneBook(origin)).map(getName)).toEqual(sorted);
  });

  expect(quickSort(createPhoneBook([])).map(getName)).toEqual([]);

  expect(quickSort(createPhoneBook(['a'])).map(getName)).toEqual(['a']);

  expect(quickSort(createPhoneBook(['b', 'a'])).map(getName)).toEqual(['a', 'b']);


  const phoneBook = [
    {name: "f", phone: "6"},
    {name: "b", phone: "2"},
    {name: "d", phone: "4"},
    {name: "c", phone: "3"},
    {name: "e", phone: "5"},
    {name: "a", phone: "1"},
  ];

  const expectResult = [
    {name: "a", phone: "1"},
    {name: "b", phone: "2"},
    {name: "c", phone: "3"},
    {name: "d", phone: "4"},
    {name: "e", phone: "5"},
    {name: "f", phone: "6"},
  ];

  expect(quickSort(phoneBook)).toEqual(expectResult);
});

test('binary_search',()=>{
  const phoneBook = [
    {name: "f", phone: "6"},
    {name: "b", phone: "2"},
    {name: "d", phone: "4"},
    {name: "c", phone: "3"},
    {name: "e", phone: "5"},
    {name: "a", phone: "1"},
  ];
  expect(binarySearch(quickSort(phoneBook), 'c')).toBe(2);
  expect(binarySearch(quickSort(phoneBook), 'a')).toBe(0);
  expect(binarySearch(quickSort(phoneBook), 'f')).toBe(5);
  expect(binarySearch(quickSort(phoneBook), 'b')).toBe(1);
})