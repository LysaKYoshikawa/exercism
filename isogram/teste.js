let wordIsograms = 'Alphabet';
function isIsogram(wordIsograms) {
  const regexWord = wordIsograms.replace(/[^a-z0-9]/g, "").toLowerCase();
  return (
    regexWord
      .split("")
      .filter((value, index, newArrWord) => newArrWord.indexOf(value) == index)
      .length == regexWord.length
  );
}
console.log(isIsogram(wordIsograms));
