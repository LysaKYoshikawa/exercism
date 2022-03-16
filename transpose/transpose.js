//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
// throw new Error('Remove this statement and implement this function');

export const transpose = (input) => {
  if (input.length == 0) return []

  let counter = 0;
  const result = [];
  const itemsSplited = input.map(item => item.split(''));
  const bigItemFromArray = input
    .map(item => item.length)
    .reduce((prev, curr) => Math.max(prev, curr));
  
  while(counter < bigItemFromArray) {
    const transposeList = itemsSplited.map(item => item[counter] || ' ')
    const newItem = ((counter + 1) === bigItemFromArray)
      ? transposeList.join('').trimEnd()
      : transposeList.join('')

    result.push(newItem)
    counter++
  }

  return result
};
