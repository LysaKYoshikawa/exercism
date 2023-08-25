function translate(codon){       
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
  console.log('condons é:', codons)
  for (const codon of codons) {
    if (!proteinDict[codon]) {
      throw new Error("Invalid codon");
    }

    if (proteinDict[codon] === "STOP") {
      break;
    }
    proteins.push(proteinDict[codon]);
      
      //hasOwnProperty é uma propriedade para verificar se a chave esta no objeto.
      // if(proteinDict.hasOwnProperty(group)) {
      //   let valor = []
      //   valor = proteinDict[group];
      //   const valuesArray = Object.values(proteinDict)
      //   console.log(valor)
      //   return valor
      // }else if(proteinStop.hasOwnProperty(group)){
      //   let valor = []
      //   return valor
      // }
      
      
      //  else {
      //   throw new Error('Invalid Codon');
      // }
    }

    console.log (proteins)

  return proteins

}
translate('UUUUUUUUG');