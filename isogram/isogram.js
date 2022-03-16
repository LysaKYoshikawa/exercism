//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.

// throw new Error('Remove this statement and implement this function');

export const isIsogram = (wordIsograms) => {
  const regexWord = wordIsograms.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return (
    regexWord
      .split("")
      .filter((value, index, newArrWord) => newArrWord.indexOf(value) == index)
      .length == regexWord.length
  );
};
