//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (codon) => {
  let proteinDict = {
    'AUG' : 'Methionine',
    'UGG' : 'Tryptophan',
    'UUU' : 'Phenylalanine',
    'UUC' : 'Phenylalanine',
    'UUA' : 'Leucine',
    'UUG' : 'Leucine',
    'UCU' : 'Serine',
    'UCC' : 'Serine',
    'UCA' : 'Serine',
    'UCG' : 'Serine',
    'UAU' : 'Tyrosine',
    'UAC' : 'Tyrosine',
    'UGU' : 'Cysteine',
    'UGC' : 'Cysteine',
    'UGG' : 'Tryptophan',
    'UAA' : 'STOP',
    'UAG' : 'STOP',
    'UGA' : 'STOP'
  }
   if (!codon){
    return []
  }
  const codons = codon.match(/.{1,3}/g);
  if (!codons) {
    throw new Error("Invalid codon");
  }
  const proteins = []

  for (const codon of codons) {
    if (!proteinDict[codon]) {
      throw new Error("Invalid codon");
    }

    if (proteinDict[codon] === "STOP") {
      break;
    }
    proteins.push(proteinDict[codon]);
      
  }

  return proteins

};
