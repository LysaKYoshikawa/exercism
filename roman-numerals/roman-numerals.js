//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRoman = (numero) => {
  if (isNaN(numero))
    return NaN;

    let inf = String(+numero).split("")
    let arrayRomanos =["","M","MM","MMM","MMMIV","MMMV","MMMVI","MMMVII","MMMVIII","MMMIX",
    "","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
    "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
    "","I","II","III","IV","V","VI","VII","VIII","IX"]
    
    let romano = ""
    let sequencia = 4; 
    while (sequencia--)
    romano = (arrayRomanos[+inf.pop() + (sequencia * 10)] || "") + romano;
    return  romano

};
toRoman()
