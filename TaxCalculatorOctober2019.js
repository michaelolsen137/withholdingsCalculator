function round(value, precision) {
   var multiplier = Math.pow(10, precision || 0);
   return Math.round(value * multiplier) / multiplier;
}

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

function FIRST_TIER_OF_TAXES(taxable_income, filing_status) {

  if(taxable_income<=annualMinimum+taxBracket[0][filing_status]){
    console.log(taxable_income);
  return taxable_income;
 }
   else {
    SECOND_TIER_OF_TAXES(taxable_income, filing_status);
     return
  }
}

function SECOND_TIER_OF_TAXES(taxable_income, filing_status) {
  if(taxable_income<=annualMinimum+taxBracket[1][filing_status]){
      base = 0;

      amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[0][filing_status]))*taxBracket[0].Rate)),2);
      console.log(amount_To_Withhold);
        return amount_To_Withhold
      }
    else {
      THIRD_TIER_OF_TAXES(taxable_income, filing_status);
        return "hi"
    }
  }

function THIRD_TIER_OF_TAXES(taxable_income, filing_status) {
  if(taxable_income<=annualMinimum+taxBracket[2][filing_status]){
      base = round(taxBracket[0].Rate*taxBracket[1][filing_status],2)
       // console.log('base is: ' + base);// base = $485.00
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[1][filing_status]))*taxBracket[1].Rate)),2);
        console.log(amount_To_Withhold);
          return amount_To_Withhold
        } else {
          FOURTH_TIER_OF_TAXES(taxable_income, filing_status);
          return
        }

}

function FOURTH_TIER_OF_TAXES(taxable_income, filing_status) {
  if(taxable_income<=annualMinimum+taxBracket[3][filing_status]){
      base = round((taxBracket[0].Rate*taxBracket[1][filing_status])+
             ((taxBracket[2][filing_status]-taxBracket[1][filing_status])*taxBracket[1].Rate),2);
       // console.log('base is: ' + base);// base = $2,271.56
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[2][filing_status]))*taxBracket[2].Rate)),2);
        console.log(amount_To_Withhold);
        return amount_To_Withhold;
      } else {
        FIFTH_TIER_OF_TAXES(taxable_income, filing_status);
        return
      }
}

function FIFTH_TIER_OF_TAXES(taxable_income, filing_status) {
  if(taxable_income<=annualMinimum+taxBracket[4][filing_status]){
    base = round((taxBracket[0].Rate*taxBracket[1][filing_status])
           + ((taxBracket[2][filing_status]-taxBracket[1][filing_status])*taxBracket[1].Rate)
           + ((taxBracket[3][filing_status]-taxBracket[2][filing_status])*taxBracket[2].Rate),2);
     // console.log('base is: ' + base);// base = $7,191.20
   amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[3][filing_status]))*taxBracket[3].Rate)),2);
   console.log(amount_To_Withhold);
     return amount_To_Withhold
   } else {
     SIXTH_TIER_OF_TAXES(taxable_income, filing_status);
     return
   }
}

function SIXTH_TIER_OF_TAXES(taxable_income, filing_status) {
  if(taxable_income<=annualMinimum+taxBracket[5][filing_status]){
        base = round((taxBracket[0].Rate*taxBracket[1][filing_status])
                   + ((taxBracket[2][filing_status]-taxBracket[1][filing_status])*taxBracket[1].Rate)
                   + ((taxBracket[3][filing_status]-taxBracket[2][filing_status])*taxBracket[2].Rate)
                   + ((taxBracket[4][filing_status]-taxBracket[3][filing_status])*taxBracket[3].Rate),2);
         // console.log('base is: ' + base);// base = $16,374.32
          amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[4][filing_status]))*taxBracket[4].Rate)),2);
            console.log(amount_To_Withhold);
            return amount_To_Withhold
          } else {
            SEVENTH_TIER_OF_TAXES(taxable_income, filing_status);
            return
            }
}

function SEVENTH_TIER_OF_TAXES(taxable_income, filing_status) {
  if(taxable_income<=annualMinimum+taxBracket[6][filing_status]){
        base = round((taxBracket[0].Rate*taxBracket[1][filing_status])
                   + ((taxBracket[2][filing_status]-taxBracket[1][filing_status])*taxBracket[1].Rate)
                   + ((taxBracket[3][filing_status]-taxBracket[2][filing_status])*taxBracket[2].Rate)
                   + ((taxBracket[4][filing_status]-taxBracket[3][filing_status])*taxBracket[3].Rate)
                   + ((taxBracket[5][filing_status]-taxBracket[4][filing_status])*taxBracket[4].Rate),2);
         console.log('base is: ' + base);// base = $23,314.16
          amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[5][filing_status]))*taxBracket[5].Rate)),2);
            console.log(amount_To_Withhold);
            return amount_To_Withhold
          } else {
            EIGHTH_TIER_OF_TAXES(taxable_income, filing_status);
            return
            }
}

function EIGHTH_TIER_OF_TAXES(taxable_income, filing_status) {
  if(taxable_income>annualMinimum+taxBracket[6][filing_status]){
        base = round((taxBracket[0].Rate*taxBracket[1][filing_status])
                   + ((taxBracket[2][filing_status]-taxBracket[1][filing_status])*taxBracket[1].Rate)
                   + ((taxBracket[3][filing_status]-taxBracket[2][filing_status])*taxBracket[2].Rate)
                   + ((taxBracket[4][filing_status]-taxBracket[3][filing_status])*taxBracket[3].Rate)
                   + ((taxBracket[5][filing_status]-taxBracket[4][filing_status])*taxBracket[4].Rate)
                   + ((taxBracket[6][filing_status]-taxBracket[5][filing_status])*taxBracket[5].Rate),2);
        console.log('base is: ' + base);// base = $76,899.16
          amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[6][filing_status]))*taxBracket[6].Rate)),2);
            console.log(amount_To_Withhold);
            return amount_To_Withhold
          }
}

    // FIRST_TIER_OF_TAXES(3800, "Single");
    // FIRST_TIER_OF_TAXES(13500, "Single");
    // FIRST_TIER_OF_TAXES(43275, "Single");
    // FIRST_TIER_OF_TAXES(88000, "Single");
    // FIRST_TIER_OF_TAXES(164525, "Single");
    // FIRST_TIER_OF_TAXES(207900, "Single");
    // FIRST_TIER_OF_TAXES(514100, "Single");
    FIRST_TIER_OF_TAXES(550000, "Single");
