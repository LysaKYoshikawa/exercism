//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, candidates) => {
  const wordToArray = word.split('')
  
  return candidates
    .filter((item) => item.toUpperCase() != word.toUpperCase())
    .filter((currentCandidate) => {
      let currentCandidateSplited = currentCandidate.split('')

      const isMatch = wordToArray.every((char) => {
        const matchIndex = currentCandidateSplited.findIndex((item) =>
          item.toUpperCase().includes(char.toUpperCase())
        )

        if (matchIndex >= 0) {
          currentCandidateSplited = currentCandidateSplited.filter((_, index) => index != matchIndex)
        }

        return matchIndex >= 0
      })

      return isMatch && currentCandidateSplited.length == 0
    })
}




