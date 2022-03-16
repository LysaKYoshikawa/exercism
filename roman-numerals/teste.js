function remanize (numero){
    if (isNaN(numero))
    return NaN;

    let inf = String(+numero).split("") // retorna numa array separado por string

   console.log(inf, "aqui")
   arrayRomanos = ["","M","MM","MMM","MMMIV","MMMV","MMMVI","MMMVII","MMMVIII","MMMIX", // 1000-9000
       "","C","CC","CCC","CD","D","DC","DCC","DCCC","CM", // 100-900
    "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC", // 10-90
   "","I","II","III","IV","V","VI","VII","VIII","IX"]; //4 SEQUENCIAS DE NUMERAIS ROMANOS 1-9,

   romano = "";

   sequencia = 4; // 4 porque se trata de 4 sequencias de numerais 

   while (sequencia--)

   console.log(sequencia, "sequencia")
   romano = (arrayRomanos[+inf.pop() + (sequencia * 10)] || "") + romano;

   console.log(romano,"jjj")
  

}
remanize(1);