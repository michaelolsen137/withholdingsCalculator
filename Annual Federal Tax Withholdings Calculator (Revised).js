var base;
var annualMinimum = 3800
var amount_To_Withhold;
var taxBracket =   [ {Rate: .10, Single: 0,      Married: 0,      HeadofHousehold: 0},
                     {Rate: .12, Single: 9700,   Married: 19400,  HeadofHousehold: 13850},
                     {Rate: .22, Single: 39475,  Married: 78950,  HeadofHousehold: 52850},
                     {Rate: .24, Single: 84200,  Married: 168400, HeadofHousehold: 84200},
                     {Rate: .32, Single: 160725, Married: 321450, HeadofHousehold: 160700},
                     {Rate: .35, Single: 204100, Married: 408200, HeadofHousehold: 204100},
                     {Rate: .37, Single: 510300, Married: 612300, HeadofHousehold: 510300}
                   ];

function round(value, precision) {
   var multiplier = Math.pow(10, precision || 0);
   return Math.round(value * multiplier) / multiplier;
}

function withholdingsCalculator(taxable_income, filing_status) {
base = 0;
let j = 1;
let k = 0;

//annual income is at or below $3,800
if(taxable_income<=annualMinimum+taxBracket[0][filing_status]){
  amount_To_Withhold = 0
  console.log('Base when income is ' + '$' + taxable_income + ' for a ' + filing_status + ' filer: $' + base);
  console.log('Amount to withhold when income is ' + '$' + taxable_income + ' for a ' + filing_status + ' filer: $' + amount_To_Withhold);
  console.log();
  return 0;
}
 else {

//annual income is at or below the first tax bracket plus $3,800 
if(taxable_income<=annualMinimum+taxBracket[1][filing_status]){
       base = 0;
       amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[0][filing_status]))*taxBracket[0].Rate)),2);
       console.log('Base when income is ' + '$' + taxable_income + ' for a ' + filing_status + ' filer: $' + base);
       console.log('Amount to withhold when income is ' + '$' + taxable_income + ' for a ' + filing_status + ' filer: $' + amount_To_Withhold);
       console.log();
         return amount_To_Withhold
       }
     else {

//this is where the repeatable calculations begin to occur
  for (let i = 1; i <= 6; i++) {
    base = base + ((taxBracket[j][filing_status]-taxBracket[k][filing_status])*taxBracket[k].Rate);
    amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[i][filing_status]))*taxBracket[i].Rate)),2);

    if (taxable_income<=annualMinimum+taxBracket[i][filing_status]) { break; }

      j = j + 1;
      k = k + 1;
  }
  console.log('Base when income is ' + '$' + taxable_income + ' for a ' + filing_status + ' filer: $' + base);
  console.log('Amount to withhold when income is ' + '$' + taxable_income + ' for a ' + filing_status + ' filer: $' + amount_To_Withhold);
  console.log();
    return amount_To_Withhold
  }
}
}

withholdingsCalculator(3800, "Single");
withholdingsCalculator(13500, "Single");
withholdingsCalculator(43275, "Single");
withholdingsCalculator(88000, "Single");
withholdingsCalculator(164525, "Single");
withholdingsCalculator(207900, "Single");
withholdingsCalculator(514100, "Single");
withholdingsCalculator(550000, "Single");

withholdingsCalculator(3800, "Married");
withholdingsCalculator(13500, "Married");
withholdingsCalculator(43275, "Married");
withholdingsCalculator(88000, "Married");
withholdingsCalculator(164525, "Married");
withholdingsCalculator(207900, "Married");
withholdingsCalculator(514100, "Married");
withholdingsCalculator(550000, "Married");

withholdingsCalculator(3800, "HeadofHousehold");
withholdingsCalculator(13500, "HeadofHousehold");
withholdingsCalculator(43275, "HeadofHousehold");
withholdingsCalculator(88000, "HeadofHousehold");
withholdingsCalculator(164525, "HeadofHousehold");
withholdingsCalculator(207900, "HeadofHousehold");
withholdingsCalculator(514100, "HeadofHousehold");
withholdingsCalculator(550000, "HeadofHousehold");
