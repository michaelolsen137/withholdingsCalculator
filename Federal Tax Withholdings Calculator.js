
function round(value, precision) {
   var multiplier = Math.pow(10, precision || 0);
   return Math.round(value * multiplier) / multiplier;
}

function FEDERAL_SINGLE_ANNUAL_WITHHOLDINGS(taxable_income) {
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

   //first tier of taxes (0%) taxable_income is $0.00–$1,900
     if(taxable_income<=annualMinimum+taxBracket[0].Single){
      return taxable_income;

   //second tier of taxes (10%) taxable_income is $1,901-$6,750
  }else if(taxable_income<=annualMinimum+taxBracket[1].Single){
      base = 0;
       // console.log('base is: ' + base);// base = $0.00
      amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[0].Single))*taxBracket[0].Rate)),2);
        return amount_To_Withhold

   //third tier of taxes (12%) taxable_income is $6,751-$21,638
  }else if(taxable_income<=annualMinimum+taxBracket[2].Single){
      base = round(taxBracket[0].Rate*taxBracket[1].Single,2)
       // console.log('base is: ' + base);// base = $485.00
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[1].Single))*taxBracket[1].Rate)),2);
          return amount_To_Withhold

   //fourth tier of taxes (22%) $21,639-$44,000
  }else if(taxable_income<=annualMinimum+taxBracket[3].Single){
      base = round((taxBracket[0].Rate*taxBracket[1].Single)+
             ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate),2);
       // console.log('base is: ' + base);// base = $2,271.56
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[2].Single))*taxBracket[2].Rate)),2);
          return amount_To_Withhold

   //fifth tier of taxes (24%) taxable_income is $44,001-$82,263
  }else if(taxable_income<=annualMinimum+taxBracket[4].Single){
      base = round((taxBracket[0].Rate*taxBracket[1].Single)
             + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
             + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate),2);
       // console.log('base is: ' + base);// base = $7,191.20
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[3].Single))*taxBracket[3].Rate)),2);
       return amount_To_Withhold

   // sixth tier of taxes (32%) taxable_income is $82,264-$103,950
  }else if(taxable_income<=annualMinimum+taxBracket[5].Single){
      base = round((taxBracket[0].Rate*taxBracket[1].Single)
                 + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
                 + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate)
                 + ((taxBracket[4].Single-taxBracket[3].Single)*taxBracket[3].Rate),2);
       // console.log('base is: ' + base);// base = $16,374.32
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[4].Single))*taxBracket[4].Rate)),2);
          return amount_To_Withhold

   //seventh tier of taxes (35%) taxable_income is $103,951-$257,050
  }else if(taxable_income<=annualMinimum+taxBracket[6].Single){
      base = round((taxBracket[0].Rate*taxBracket[1].Single)
                 + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
                 + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate)
                 + ((taxBracket[4].Single-taxBracket[3].Single)*taxBracket[3].Rate)
                 + ((taxBracket[5].Single-taxBracket[4].Single)*taxBracket[4].Rate),2);
       // console.log('base is: ' + base);// base = $23,314.16
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[5].Single))*taxBracket[5].Rate)),2);
          return amount_To_Withhold
   //eigth tier of taxes (37%) taxable_income is $257,051 and up
  }else if(taxable_income>annualMinimum+taxBracket[6].Single){
      base = round((taxBracket[0].Rate*taxBracket[1].Single)
                 + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
                 + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate)
                 + ((taxBracket[4].Single-taxBracket[3].Single)*taxBracket[3].Rate)
                 + ((taxBracket[5].Single-taxBracket[4].Single)*taxBracket[4].Rate)
                 + ((taxBracket[6].Single-taxBracket[5].Single)*taxBracket[5].Rate),2);
      // console.log('base is: ' + base);// base = $76,899.16
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[6].Single))*taxBracket[6].Rate)),2);
          return amount_To_Withhold
  }
}

function FEDERAL_SINGLE_SEMIANNUAL_WITHHOLDINGS(taxable_income) {
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

  annualMinimum = (annualMinimum/2)
  taxBracket[0].Single = round(taxBracket[0].Single/2,0);
  taxBracket[1].Single = round(taxBracket[1].Single/2,0);
  taxBracket[2].Single = round(taxBracket[2].Single/2,0);
  taxBracket[3].Single = round(taxBracket[3].Single/2,0);
  taxBracket[4].Single = round(taxBracket[4].Single/2,0);
  taxBracket[5].Single = round(taxBracket[5].Single/2,0);
  taxBracket[6].Single = round(taxBracket[6].Single/2,0);

  //first tier of taxes (0%) taxable_income is $0.00–$1,900
    if(taxable_income<=annualMinimum+taxBracket[0].Single){
     return taxable_income;

  //second tier of taxes (10%) taxable_income is $1,901-$6,750
}else if(taxable_income<=annualMinimum+taxBracket[1].Single){
     base = 0
      // console.log('base is: ' + base);// base = $0.00
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[0].Single))*taxBracket[0].Rate)),2);
       return amount_To_Withhold

  //third tier of taxes (12%) taxable_income is $6,751-$21,638
}else if(taxable_income<=annualMinimum+taxBracket[2].Single){
     base = round(taxBracket[0].Rate*taxBracket[1].Single,2)
      // console.log('base is: ' + base);// base = $485.00
       amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[1].Single))*taxBracket[1].Rate)),2);
         return amount_To_Withhold

  //fourth tier of taxes (22%) $21,639-$44,000
}else if(taxable_income<=annualMinimum+taxBracket[3].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)+
            ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate),2);
      // console.log('base is: ' + base);// base = $2,271.56
       amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[2].Single))*taxBracket[2].Rate)),2);
         return amount_To_Withhold

  //fifth tier of taxes (24%) taxable_income is $44,001-$82,263
}else if(taxable_income<=annualMinimum+taxBracket[4].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
            + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
            + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate),2);
      // console.log('base is: ' + base);// base = $7,191.20
    amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[3].Single))*taxBracket[3].Rate)),2);
      return amount_To_Withhold

  // sixth tier of taxes (32%) taxable_income is $82,264-$103,950
}else if(taxable_income<=annualMinimum+taxBracket[5].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
                + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
                + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate)
                + ((taxBracket[4].Single-taxBracket[3].Single)*taxBracket[3].Rate),2);
      // console.log('base is: ' + base);// base = $16,374.32
       amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[4].Single))*taxBracket[4].Rate)),2);
         return amount_To_Withhold

  //seventh tier of taxes (35%) taxable_income is $103,951-$257,050
}else if(taxable_income<=annualMinimum+taxBracket[6].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
                + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
                + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate)
                + ((taxBracket[4].Single-taxBracket[3].Single)*taxBracket[3].Rate)
                + ((taxBracket[5].Single-taxBracket[4].Single)*taxBracket[4].Rate),2);
      // console.log('base is: ' + base);// base = $23,314.16
       amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[5].Single))*taxBracket[5].Rate)),2);
         return amount_To_Withhold
  //eigth tier of taxes (37%) taxable_income is $257,051 and up
}else if(taxable_income>annualMinimum+taxBracket[6].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
                + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
                + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate)
                + ((taxBracket[4].Single-taxBracket[3].Single)*taxBracket[3].Rate)
                + ((taxBracket[5].Single-taxBracket[4].Single)*taxBracket[4].Rate)
                + ((taxBracket[6].Single-taxBracket[5].Single)*taxBracket[5].Rate),2);
     // console.log('base is: ' + base);// base = $76,899.16
       amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[6].Single))*taxBracket[6].Rate)),2);
         return amount_To_Withhold
   }
}

function FEDERAL_SINGLE_QUARTERLY_WITHHOLDINGS(taxable_income) {
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

  annualMinimum = round((annualMinimum/4),2)
  taxBracket[0].Single = round(taxBracket[0].Single/4,0);
  taxBracket[1].Single = round(taxBracket[1].Single/4,0);
  taxBracket[2].Single = round(taxBracket[2].Single/4,0);
  taxBracket[3].Single = round(taxBracket[3].Single/4,0);
  taxBracket[4].Single = round(taxBracket[4].Single/4,0);
  taxBracket[5].Single = round(taxBracket[5].Single/4,0);
  taxBracket[6].Single = round(taxBracket[6].Single/4,0);

  //first tier of taxes (0%) taxable_income is $0.00–$1,900
    if(taxable_income<=annualMinimum+taxBracket[0].Single){
     return taxable_income;

  //second tier of taxes (10%) taxable_income is $1,901-$6,750
}else if(taxable_income<=annualMinimum+taxBracket[1].Single){
     base = 0
      // console.log('base is: ' + base);// base = $0.00
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[0].Single))*taxBracket[0].Rate)),2);
       return amount_To_Withhold

  //third tier of taxes (12%) taxable_income is $6,751-$21,638
}else if(taxable_income<=annualMinimum+taxBracket[2].Single){
     base = round(taxBracket[0].Rate*taxBracket[1].Single,2)
      // console.log('base is: ' + base);// base = $485.00
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[1].Single))*taxBracket[1].Rate)),2);
         return amount_To_Withhold

  //fourth tier of taxes (22%) $21,639-$44,000
}else if(taxable_income<=annualMinimum+taxBracket[3].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)+
            ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate),2);
      // console.log('base is: ' + base);// base = $2,271.56
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[2].Single))*taxBracket[2].Rate)),2);
         return amount_To_Withhold

  //fifth tier of taxes (24%) taxable_income is $44,001-$82,263
}else if(taxable_income<=annualMinimum+taxBracket[4].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
            + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
            + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate),2);
      // console.log('base is: ' + base);// base = $7,191.20
    amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[3].Single))*taxBracket[3].Rate)),2);
      return amount_To_Withhold

  // sixth tier of taxes (32%) taxable_income is $82,264-$103,950
}else if(taxable_income<=annualMinimum+taxBracket[5].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
                + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
                + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate)
                + ((taxBracket[4].Single-taxBracket[3].Single)*taxBracket[3].Rate),2);
      // console.log('base is: ' + base);// base = $16,374.32
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[4].Single))*taxBracket[4].Rate)),2);
         return amount_To_Withhold

  //seventh tier of taxes (35%) taxable_income is $103,951-$257,050
}else if(taxable_income<=annualMinimum+taxBracket[6].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
                + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
                + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate)
                + ((taxBracket[4].Single-taxBracket[3].Single)*taxBracket[3].Rate)
                + ((taxBracket[5].Single-taxBracket[4].Single)*taxBracket[4].Rate),2);
      // console.log('base is: ' + base);// base = $23,314.16
      amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[5].Single))*taxBracket[5].Rate)),2);
         return amount_To_Withhold
  //eigth tier of taxes (37%) taxable_income is $257,051 and up
}else if(taxable_income>annualMinimum+taxBracket[6].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
                + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
                + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate)
                + ((taxBracket[4].Single-taxBracket[3].Single)*taxBracket[3].Rate)
                + ((taxBracket[5].Single-taxBracket[4].Single)*taxBracket[4].Rate)
                + ((taxBracket[6].Single-taxBracket[5].Single)*taxBracket[5].Rate),2);
     // console.log('base is: ' + base);// base = $76,899.16
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[6].Single))*taxBracket[6].Rate)),2);
         return amount_To_Withhold
   }
}

function FEDERAL_SINGLE_MONTHLY_WITHHOLDINGS(taxable_income) {
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

  annualMinimum = round((annualMinimum/12),2)
  taxBracket[0].Single = round(taxBracket[0].Single/12,0);
  taxBracket[1].Single = round(taxBracket[1].Single/12,0);
  taxBracket[2].Single = round(taxBracket[2].Single/12,0);
  taxBracket[3].Single = round(taxBracket[3].Single/12,0);
  taxBracket[4].Single = round(taxBracket[4].Single/12,0);
  taxBracket[5].Single = round(taxBracket[5].Single/12,0);
  taxBracket[6].Single = round(taxBracket[6].Single/12,0);

  //first tier of taxes (0%) taxable_income is $0.00–$1,900
    if(taxable_income<=annualMinimum+taxBracket[0].Single){
     return taxable_income;

  //second tier of taxes (10%) taxable_income is $1,901-$6,750
}else if(taxable_income<=annualMinimum+taxBracket[1].Single){
     base = 0
      // console.log('base is: ' + base);// base = $0.00
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[0].Single))*taxBracket[0].Rate)),2);
       return amount_To_Withhold

  //third tier of taxes (12%) taxable_income is $6,751-$21,638
}else if(taxable_income<=annualMinimum+taxBracket[2].Single){
     base = round(taxBracket[0].Rate*taxBracket[1].Single,2)
      // console.log('base is: ' + base);// base = $485.00
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[1].Single))*taxBracket[1].Rate)),2);
         return amount_To_Withhold

  //fourth tier of taxes (22%) $21,639-$44,000
}else if(taxable_income<=annualMinimum+taxBracket[3].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)+
            ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate),2);
      // console.log('base is: ' + base);// base = $2,271.56
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[2].Single))*taxBracket[2].Rate)),2);
         return amount_To_Withhold

  //fifth tier of taxes (24%) taxable_income is $44,001-$82,263
}else if(taxable_income<=annualMinimum+taxBracket[4].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
            + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
            + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate),2);
      // console.log('base is: ' + base);// base = $7,191.20
    amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[3].Single))*taxBracket[3].Rate)),2);
      return amount_To_Withhold

  // sixth tier of taxes (32%) taxable_income is $82,264-$103,950
}else if(taxable_income<=annualMinimum+taxBracket[5].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
                + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
                + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate)
                + ((taxBracket[4].Single-taxBracket[3].Single)*taxBracket[3].Rate),2);
      // console.log('base is: ' + base);// base = $16,374.32
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[4].Single))*taxBracket[4].Rate)),2);
         return amount_To_Withhold

  //seventh tier of taxes (35%) taxable_income is $103,951-$257,050
}else if(taxable_income<=annualMinimum+taxBracket[6].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
                + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
                + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate)
                + ((taxBracket[4].Single-taxBracket[3].Single)*taxBracket[3].Rate)
                + ((taxBracket[5].Single-taxBracket[4].Single)*taxBracket[4].Rate),2);
      // console.log('base is: ' + base);// base = $23,314.16
      amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[5].Single))*taxBracket[5].Rate)),2);
         return amount_To_Withhold
  //eigth tier of taxes (37%) taxable_income is $257,051 and up
}else if(taxable_income>annualMinimum+taxBracket[6].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
                + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
                + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate)
                + ((taxBracket[4].Single-taxBracket[3].Single)*taxBracket[3].Rate)
                + ((taxBracket[5].Single-taxBracket[4].Single)*taxBracket[4].Rate)
                + ((taxBracket[6].Single-taxBracket[5].Single)*taxBracket[5].Rate),2);
     // console.log('base is: ' + base);// base = $76,899.16
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[6].Single))*taxBracket[6].Rate)),2);
         return amount_To_Withhold
   }
}

function FEDERAL_SINGLE_SEMIMONTHLY_WITHHOLDINGS(taxable_income) {
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

  annualMinimum = round((annualMinimum/24),2)
  taxBracket[0].Single = round(taxBracket[0].Single/24,0);
  taxBracket[1].Single = round(taxBracket[1].Single/24,0);
  taxBracket[2].Single = round(taxBracket[2].Single/24,0);
  taxBracket[3].Single = round(taxBracket[3].Single/24,0);
  taxBracket[4].Single = round(taxBracket[4].Single/24,0);
  taxBracket[5].Single = round(taxBracket[5].Single/24,0);
  taxBracket[6].Single = round(taxBracket[6].Single/24,0);

  //first tier of taxes (0%) taxable_income is $0.00–$1,900
    if(taxable_income<=annualMinimum+taxBracket[0].Single){
     return taxable_income;

  //second tier of taxes (10%) taxable_income is $1,901-$6,750
}else if(taxable_income<=annualMinimum+taxBracket[1].Single){
     base = 0
      // console.log('base is: ' + base);// base = $0.00
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[0].Single))*taxBracket[0].Rate)),2);
       return amount_To_Withhold

  //third tier of taxes (12%) taxable_income is $6,751-$21,638
}else if(taxable_income<=annualMinimum+taxBracket[2].Single){
     base = round(taxBracket[0].Rate*taxBracket[1].Single,2)
      // console.log('base is: ' + base);// base = $485.00
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[1].Single))*taxBracket[1].Rate)),2);
         return amount_To_Withhold

  //fourth tier of taxes (22%) $21,639-$44,000
}else if(taxable_income<=annualMinimum+taxBracket[3].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)+
            ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate),2);
      // console.log('base is: ' + base);// base = $2,271.56
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[2].Single))*taxBracket[2].Rate)),2);
         return amount_To_Withhold

  //fifth tier of taxes (24%) taxable_income is $44,001-$82,263
}else if(taxable_income<=annualMinimum+taxBracket[4].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
            + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
            + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate),2);
      // console.log('base is: ' + base);// base = $7,191.20
    amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[3].Single))*taxBracket[3].Rate)),2);
      return amount_To_Withhold

  // sixth tier of taxes (32%) taxable_income is $82,264-$103,950
}else if(taxable_income<=annualMinimum+taxBracket[5].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
                + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
                + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate)
                + ((taxBracket[4].Single-taxBracket[3].Single)*taxBracket[3].Rate),2);
      // console.log('base is: ' + base);// base = $16,374.32
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[4].Single))*taxBracket[4].Rate)),2);
         return amount_To_Withhold

  //seventh tier of taxes (35%) taxable_income is $103,951-$257,050
}else if(taxable_income<=annualMinimum+taxBracket[6].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
                + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
                + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate)
                + ((taxBracket[4].Single-taxBracket[3].Single)*taxBracket[3].Rate)
                + ((taxBracket[5].Single-taxBracket[4].Single)*taxBracket[4].Rate),2);
      // console.log('base is: ' + base);// base = $23,314.16
      amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[5].Single))*taxBracket[5].Rate)),2);
         return amount_To_Withhold
  //eigth tier of taxes (37%) taxable_income is $257,051 and up
}else if(taxable_income>annualMinimum+taxBracket[6].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
                + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
                + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate)
                + ((taxBracket[4].Single-taxBracket[3].Single)*taxBracket[3].Rate)
                + ((taxBracket[5].Single-taxBracket[4].Single)*taxBracket[4].Rate)
                + ((taxBracket[6].Single-taxBracket[5].Single)*taxBracket[5].Rate),2);
     // console.log('base is: ' + base);// base = $76,899.16
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[6].Single))*taxBracket[6].Rate)),2);
         return amount_To_Withhold
   }
}

function FEDERAL_SINGLE_BIWEEKLY_WITHHOLDINGS(taxable_income) {
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

  annualMinimum = round((annualMinimum/26),2)
  taxBracket[0].Single = round(taxBracket[0].Single/26,0);
  taxBracket[1].Single = round(taxBracket[1].Single/26,0);
  taxBracket[2].Single = round(taxBracket[2].Single/26,0);
  taxBracket[3].Single = round(taxBracket[3].Single/26,0);
  taxBracket[4].Single = round(taxBracket[4].Single/26,0);
  taxBracket[5].Single = round(taxBracket[5].Single/26,0);
  taxBracket[6].Single = round(taxBracket[6].Single/26,0);

  //first tier of taxes (0%) taxable_income is $0.00–$1,900
    if(taxable_income<=annualMinimum+taxBracket[0].Single){
     return taxable_income;

  //second tier of taxes (10%) taxable_income is $1,901-$6,750
}else if(taxable_income<=annualMinimum+taxBracket[1].Single){
     base = 0
      // console.log('base is: ' + base);// base = $0.00
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[0].Single))*taxBracket[0].Rate)),2);
       return amount_To_Withhold

  //third tier of taxes (12%) taxable_income is $6,751-$21,638
}else if(taxable_income<=annualMinimum+taxBracket[2].Single){
     base = round(taxBracket[0].Rate*taxBracket[1].Single,2)
      // console.log('base is: ' + base);// base = $485.00
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[1].Single))*taxBracket[1].Rate)),2);
         return amount_To_Withhold

  //fourth tier of taxes (22%) $21,639-$44,000
}else if(taxable_income<=annualMinimum+taxBracket[3].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)+
            ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate),2);
      // console.log('base is: ' + base);// base = $2,271.56
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[2].Single))*taxBracket[2].Rate)),2);
         return amount_To_Withhold

  //fifth tier of taxes (24%) taxable_income is $44,001-$82,263
}else if(taxable_income<=annualMinimum+taxBracket[4].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
            + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
            + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate),2);
      // console.log('base is: ' + base);// base = $7,191.20
    amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[3].Single))*taxBracket[3].Rate)),2);
      return amount_To_Withhold

  // sixth tier of taxes (32%) taxable_income is $82,264-$103,950
}else if(taxable_income<=annualMinimum+taxBracket[5].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
                + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
                + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate)
                + ((taxBracket[4].Single-taxBracket[3].Single)*taxBracket[3].Rate),2);
      // console.log('base is: ' + base);// base = $16,374.32
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[4].Single))*taxBracket[4].Rate)),2);
         return amount_To_Withhold

  //seventh tier of taxes (35%) taxable_income is $103,951-$257,050
}else if(taxable_income<=annualMinimum+taxBracket[6].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
                + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
                + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate)
                + ((taxBracket[4].Single-taxBracket[3].Single)*taxBracket[3].Rate)
                + ((taxBracket[5].Single-taxBracket[4].Single)*taxBracket[4].Rate),2);
      // console.log('base is: ' + base);// base = $23,314.16
      amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[5].Single))*taxBracket[5].Rate)),2);
         return amount_To_Withhold
  //eigth tier of taxes (37%) taxable_income is $257,051 and up
}else if(taxable_income>annualMinimum+taxBracket[6].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
                + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
                + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate)
                + ((taxBracket[4].Single-taxBracket[3].Single)*taxBracket[3].Rate)
                + ((taxBracket[5].Single-taxBracket[4].Single)*taxBracket[4].Rate)
                + ((taxBracket[6].Single-taxBracket[5].Single)*taxBracket[5].Rate),2);
     // console.log('base is: ' + base);// base = $76,899.16
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[6].Single))*taxBracket[6].Rate)),2);
         return amount_To_Withhold
   }
}

function FEDERAL_SINGLE_WEEKLY_WITHHOLDINGS(taxable_income) {
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

  annualMinimum = round((annualMinimum/52),2)
  taxBracket[0].Single = round(taxBracket[0].Single/52,0);
  taxBracket[1].Single = round(taxBracket[1].Single/52,0);
  taxBracket[2].Single = round(taxBracket[2].Single/52,0);
  taxBracket[3].Single = round(taxBracket[3].Single/52,0);
  taxBracket[4].Single = round(taxBracket[4].Single/52,0);
  taxBracket[5].Single = round(taxBracket[5].Single/52,0);
  taxBracket[6].Single = round(taxBracket[6].Single/52,0);

  //first tier of taxes (0%) taxable_income is $0.00–$1,900
    if(taxable_income<=annualMinimum+taxBracket[0].Single){
     return taxable_income;

  //second tier of taxes (10%) taxable_income is $1,901-$6,750
}else if(taxable_income<=annualMinimum+taxBracket[1].Single){
     base = 0
      // console.log('base is: ' + base);// base = $0.00
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[0].Single))*taxBracket[0].Rate)),2);
       return amount_To_Withhold

  //third tier of taxes (12%) taxable_income is $6,751-$21,638
}else if(taxable_income<=annualMinimum+taxBracket[2].Single){
     base = round(taxBracket[0].Rate*taxBracket[1].Single,2)
      // console.log('base is: ' + base);// base = $485.00
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[1].Single))*taxBracket[1].Rate)),2);
         return amount_To_Withhold

  //fourth tier of taxes (22%) $21,639-$44,000
}else if(taxable_income<=annualMinimum+taxBracket[3].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)+
            ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate),2);
      // console.log('base is: ' + base);// base = $2,271.56
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[2].Single))*taxBracket[2].Rate)),2);
         return amount_To_Withhold

  //fifth tier of taxes (24%) taxable_income is $44,001-$82,263
}else if(taxable_income<=annualMinimum+taxBracket[4].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
            + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
            + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate),2);
      // console.log('base is: ' + base);// base = $7,191.20
    amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[3].Single))*taxBracket[3].Rate)),2);
      return amount_To_Withhold

  // sixth tier of taxes (32%) taxable_income is $82,264-$103,950
}else if(taxable_income<=annualMinimum+taxBracket[5].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
                + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
                + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate)
                + ((taxBracket[4].Single-taxBracket[3].Single)*taxBracket[3].Rate),2);
      // console.log('base is: ' + base);// base = $16,374.32
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[4].Single))*taxBracket[4].Rate)),2);
         return amount_To_Withhold

  //seventh tier of taxes (35%) taxable_income is $103,951-$257,050
}else if(taxable_income<=annualMinimum+taxBracket[6].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
                + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
                + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate)
                + ((taxBracket[4].Single-taxBracket[3].Single)*taxBracket[3].Rate)
                + ((taxBracket[5].Single-taxBracket[4].Single)*taxBracket[4].Rate),2);
      // console.log('base is: ' + base);// base = $23,314.16
      amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[5].Single))*taxBracket[5].Rate)),2);
         return amount_To_Withhold
  //eigth tier of taxes (37%) taxable_income is $257,051 and up
}else if(taxable_income>annualMinimum+taxBracket[6].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
                + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
                + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate)
                + ((taxBracket[4].Single-taxBracket[3].Single)*taxBracket[3].Rate)
                + ((taxBracket[5].Single-taxBracket[4].Single)*taxBracket[4].Rate)
                + ((taxBracket[6].Single-taxBracket[5].Single)*taxBracket[5].Rate),2);
     // console.log('base is: ' + base);// base = $76,899.16
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[6].Single))*taxBracket[6].Rate)),2);
         return amount_To_Withhold
   }
}

function FEDERAL_SINGLE_DAILY_WITHHOLDINGS(taxable_income) {
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

  annualMinimum = round((annualMinimum/260),2)
  taxBracket[0].Single = round(taxBracket[0].Single/260,0);
  taxBracket[1].Single = round(taxBracket[1].Single/260,0);
  taxBracket[2].Single = round(taxBracket[2].Single/260,0);
  taxBracket[3].Single = round(taxBracket[3].Single/260,0);
  taxBracket[4].Single = round(taxBracket[4].Single/260,0);
  taxBracket[5].Single = round(taxBracket[5].Single/260,0);
  taxBracket[6].Single = round(taxBracket[6].Single/260,0);

  //first tier of taxes (0%) taxable_income is $0.00–$1,900
    if(taxable_income<=annualMinimum+taxBracket[0].Single){
     return taxable_income;

  //second tier of taxes (10%) taxable_income is $1,901-$6,750
}else if(taxable_income<=annualMinimum+taxBracket[1].Single){
     base = 0
      // console.log('base is: ' + base);// base = $0.00
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[0].Single))*taxBracket[0].Rate)),2);
       return amount_To_Withhold

  //third tier of taxes (12%) taxable_income is $6,751-$21,638
}else if(taxable_income<=annualMinimum+taxBracket[2].Single){
     base = round(taxBracket[0].Rate*taxBracket[1].Single,2)
      // console.log('base is: ' + base);// base = $485.00
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[1].Single))*taxBracket[1].Rate)),2);
         return amount_To_Withhold

  //fourth tier of taxes (22%) $21,639-$44,000
}else if(taxable_income<=annualMinimum+taxBracket[3].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)+
            ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate),2);
      // console.log('base is: ' + base);// base = $2,271.56
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[2].Single))*taxBracket[2].Rate)),2);
         return amount_To_Withhold

  //fifth tier of taxes (24%) taxable_income is $44,001-$82,263
}else if(taxable_income<=annualMinimum+taxBracket[4].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
            + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
            + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate),2);
      // console.log('base is: ' + base);// base = $7,191.20
    amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[3].Single))*taxBracket[3].Rate)),2);
      return amount_To_Withhold

  // sixth tier of taxes (32%) taxable_income is $82,264-$103,950
}else if(taxable_income<=annualMinimum+taxBracket[5].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
                + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
                + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate)
                + ((taxBracket[4].Single-taxBracket[3].Single)*taxBracket[3].Rate),2);
      // console.log('base is: ' + base);// base = $16,374.32
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[4].Single))*taxBracket[4].Rate)),2);
         return amount_To_Withhold

  //seventh tier of taxes (35%) taxable_income is $103,951-$257,050
}else if(taxable_income<=annualMinimum+taxBracket[6].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
                + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
                + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate)
                + ((taxBracket[4].Single-taxBracket[3].Single)*taxBracket[3].Rate)
                + ((taxBracket[5].Single-taxBracket[4].Single)*taxBracket[4].Rate),2);
      // console.log('base is: ' + base);// base = $23,314.16
      amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[5].Single))*taxBracket[5].Rate)),2);
         return amount_To_Withhold
  //eigth tier of taxes (37%) taxable_income is $257,051 and up
}else if(taxable_income>annualMinimum+taxBracket[6].Single){
     base = round((taxBracket[0].Rate*taxBracket[1].Single)
                + ((taxBracket[2].Single-taxBracket[1].Single)*taxBracket[1].Rate)
                + ((taxBracket[3].Single-taxBracket[2].Single)*taxBracket[2].Rate)
                + ((taxBracket[4].Single-taxBracket[3].Single)*taxBracket[3].Rate)
                + ((taxBracket[5].Single-taxBracket[4].Single)*taxBracket[4].Rate)
                + ((taxBracket[6].Single-taxBracket[5].Single)*taxBracket[5].Rate),2);
     // console.log('base is: ' + base);// base = $76,899.16
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[6].Single))*taxBracket[6].Rate)),2);
         return amount_To_Withhold
   }
}

function FEDERAL_MARRIED_ANNUAL_WITHHOLDINGS(taxable_income) {
  var base;
  var annualMinimum = 11800
  var amount_To_Withhold;
  var taxBracket =   [ {Rate: .10, Single: 0,      Married: 0,      HeadofHousehold: 0},
                       {Rate: .12, Single: 9700,   Married: 19400,  HeadofHousehold: 13850},
                       {Rate: .22, Single: 39475,  Married: 78950,  HeadofHousehold: 52850},
                       {Rate: .24, Single: 84200,  Married: 168400, HeadofHousehold: 84200},
                       {Rate: .32, Single: 160725, Married: 321450, HeadofHousehold: 160700},
                       {Rate: .35, Single: 204100, Married: 408200, HeadofHousehold: 204100},
                       {Rate: .37, Single: 510300, Married: 612300, HeadofHousehold: 510300}
                     ];

   //first tier of taxes (0%) taxable_income is $0.00–$1,900
     if(taxable_income<=annualMinimum+taxBracket[0].Married){
      return taxable_income;

   //second tier of taxes (10%) taxable_income is $1,901-$6,750
  }else if(taxable_income<=annualMinimum+taxBracket[1].Married){
      base = 0
       // console.log('base is: ' + base);// base = $0.00
      amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[0].Married))*taxBracket[0].Rate)),2);
        return amount_To_Withhold

   //third tier of taxes (12%) taxable_income is $6,751-$21,638
  }else if(taxable_income<=annualMinimum+taxBracket[2].Married){
      base = round(taxBracket[0].Rate*taxBracket[1].Married,2)
       // console.log('base is: ' + base);// base = $485.00
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[1].Married))*taxBracket[1].Rate)),2);
          return amount_To_Withhold

   //fourth tier of taxes (22%) $21,639-$44,000
  }else if(taxable_income<=annualMinimum+taxBracket[3].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)+
             ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate),2);
       // console.log('base is: ' + base);// base = $2,271.56
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[2].Married))*taxBracket[2].Rate)),2);
          return amount_To_Withhold

   //fifth tier of taxes (24%) taxable_income is $44,001-$82,263
  }else if(taxable_income<=annualMinimum+taxBracket[4].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
             + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
             + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate),2);
       // console.log('base is: ' + base);// base = $7,191.20
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[3].Married))*taxBracket[3].Rate)),2);
       return amount_To_Withhold

   // sixth tier of taxes (32%) taxable_income is $82,264-$103,950
  }else if(taxable_income<=annualMinimum+taxBracket[5].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
                 + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
                 + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate)
                 + ((taxBracket[4].Married-taxBracket[3].Married)*taxBracket[3].Rate),2);
       // console.log('base is: ' + base);// base = $16,374.32
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[4].Married))*taxBracket[4].Rate)),2);
          return amount_To_Withhold

   //seventh tier of taxes (35%) taxable_income is $103,951-$257,050
  }else if(taxable_income<=annualMinimum+taxBracket[6].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
                 + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
                 + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate)
                 + ((taxBracket[4].Married-taxBracket[3].Married)*taxBracket[3].Rate)
                 + ((taxBracket[5].Married-taxBracket[4].Married)*taxBracket[4].Rate),2);
       // console.log('base is: ' + base);// base = $23,314.16
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[5].Married))*taxBracket[5].Rate)),2);
          return amount_To_Withhold
   //eighth tier of taxes (37%) taxable_income is $257,051 and up
  }else if(taxable_income>annualMinimum+taxBracket[6].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
                 + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
                 + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate)
                 + ((taxBracket[4].Married-taxBracket[3].Married)*taxBracket[3].Rate)
                 + ((taxBracket[5].Married-taxBracket[4].Married)*taxBracket[4].Rate)
                 + ((taxBracket[6].Married-taxBracket[5].Married)*taxBracket[5].Rate),2);
      // console.log('base is: ' + base);// base = $76,899.16
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[6].Married))*taxBracket[6].Rate)),2);
          return amount_To_Withhold
  }
}

function FEDERAL_MARRIED_SEMIANNUAL_WITHHOLDINGS(taxable_income) {
  var base;
  var annualMinimum = 11800
  var amount_To_Withhold;
  var taxBracket =   [ {Rate: .10, Single: 0,      Married: 0,      HeadofHousehold: 0},
                       {Rate: .12, Single: 9700,   Married: 19400,  HeadofHousehold: 13850},
                       {Rate: .22, Single: 39475,  Married: 78950,  HeadofHousehold: 52850},
                       {Rate: .24, Single: 84200,  Married: 168400, HeadofHousehold: 84200},
                       {Rate: .32, Single: 160725, Married: 321450, HeadofHousehold: 160700},
                       {Rate: .35, Single: 204100, Married: 408200, HeadofHousehold: 204100},
                       {Rate: .37, Single: 510300, Married: 612300, HeadofHousehold: 510300}
                     ];

     annualMinimum = (annualMinimum/2)
     taxBracket[0].Married = round(taxBracket[0].Married/2,0);
     taxBracket[1].Married = round(taxBracket[1].Married/2,0);
     taxBracket[2].Married = round(taxBracket[2].Married/2,0);
     taxBracket[3].Married = round(taxBracket[3].Married/2,0);
     taxBracket[4].Married = round(taxBracket[4].Married/2,0);
     taxBracket[5].Married = round(taxBracket[5].Married/2,0);
     taxBracket[6].Married = round(taxBracket[6].Married/2,0);

   //first tier of taxes (0%) taxable_income is $0.00–$1,900
     if(taxable_income<=annualMinimum+taxBracket[0].Married){
      return taxable_income;

   //second tier of taxes (10%) taxable_income is $1,901-$6,750
  }else if(taxable_income<=annualMinimum+taxBracket[1].Married){
      base = 0
       // console.log('base is: ' + base);// base = $0.00
       amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[0].Married))*taxBracket[0].Rate)),2);
        return amount_To_Withhold

   //third tier of taxes (12%) taxable_income is $6,751-$21,638
  }else if(taxable_income<=annualMinimum+taxBracket[2].Married){
      base = round(taxBracket[0].Rate*taxBracket[1].Married,2)
       // console.log('base is: ' + base);// base = $485.00
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[1].Married))*taxBracket[1].Rate)),2);
          return amount_To_Withhold

   //fourth tier of taxes (22%) $21,639-$44,000
  }else if(taxable_income<=annualMinimum+taxBracket[3].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)+
             ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate),2);
       // console.log('base is: ' + base);// base = $2,271.56
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[2].Married))*taxBracket[2].Rate)),2);
          return amount_To_Withhold

   //fifth tier of taxes (24%) taxable_income is $44,001-$82,263
  }else if(taxable_income<=annualMinimum+taxBracket[4].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
             + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
             + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate),2);
       // console.log('base is: ' + base);// base = $7,191.20
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[3].Married))*taxBracket[3].Rate)),2);
       return amount_To_Withhold

   // sixth tier of taxes (32%) taxable_income is $82,264-$103,950
  }else if(taxable_income<=annualMinimum+taxBracket[5].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
                 + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
                 + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate)
                 + ((taxBracket[4].Married-taxBracket[3].Married)*taxBracket[3].Rate),2);
       // console.log('base is: ' + base);// base = $16,374.32
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[4].Married))*taxBracket[4].Rate)),2);
          return amount_To_Withhold

   //seventh tier of taxes (35%) taxable_income is $103,951-$257,050
  }else if(taxable_income<=annualMinimum+taxBracket[6].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
                 + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
                 + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate)
                 + ((taxBracket[4].Married-taxBracket[3].Married)*taxBracket[3].Rate)
                 + ((taxBracket[5].Married-taxBracket[4].Married)*taxBracket[4].Rate),2);
       // console.log('base is: ' + base);// base = $23,314.16
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[5].Married))*taxBracket[5].Rate)),2);
          return amount_To_Withhold
   //eighth tier of taxes (37%) taxable_income is $257,051 and up
  }else if(taxable_income>annualMinimum+taxBracket[6].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
                 + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
                 + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate)
                 + ((taxBracket[4].Married-taxBracket[3].Married)*taxBracket[3].Rate)
                 + ((taxBracket[5].Married-taxBracket[4].Married)*taxBracket[4].Rate)
                 + ((taxBracket[6].Married-taxBracket[5].Married)*taxBracket[5].Rate),2);
      // console.log('base is: ' + base);// base = $76,899.16
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[6].Married))*taxBracket[6].Rate)),2);
          return amount_To_Withhold
  }
}

function FEDERAL_MARRIED_QUARTERLY_WITHHOLDINGS(taxable_income) {
  var base;
  var annualMinimum = 11800
  var amount_To_Withhold;
  var taxBracket =   [ {Rate: .10, Single: 0,      Married: 0,      HeadofHousehold: 0},
                       {Rate: .12, Single: 9700,   Married: 19400,  HeadofHousehold: 13850},
                       {Rate: .22, Single: 39475,  Married: 78950,  HeadofHousehold: 52850},
                       {Rate: .24, Single: 84200,  Married: 168400, HeadofHousehold: 84200},
                       {Rate: .32, Single: 160725, Married: 321450, HeadofHousehold: 160700},
                       {Rate: .35, Single: 204100, Married: 408200, HeadofHousehold: 204100},
                       {Rate: .37, Single: 510300, Married: 612300, HeadofHousehold: 510300}
                     ];

     annualMinimum = round((annualMinimum/4),2)
     taxBracket[0].Married = round(taxBracket[0].Married/4,0);
     taxBracket[1].Married = round(taxBracket[1].Married/4,0);
     taxBracket[2].Married = round(taxBracket[2].Married/4,0);
     taxBracket[3].Married = round(taxBracket[3].Married/4,0);
     taxBracket[4].Married = round(taxBracket[4].Married/4,0);
     taxBracket[5].Married = round(taxBracket[5].Married/4,0);
     taxBracket[6].Married = round(taxBracket[6].Married/4,0);

   //first tier of taxes (0%) taxable_income is $0.00–$1,900
     if(taxable_income<=annualMinimum+taxBracket[0].Married){
      return taxable_income;

   //second tier of taxes (10%) taxable_income is $1,901-$6,750
  }else if(taxable_income<=annualMinimum+taxBracket[1].Married){
      base = 0
       // console.log('base is: ' + base);// base = $0.00
       amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[0].Married))*taxBracket[0].Rate)),2);
        return amount_To_Withhold

   //third tier of taxes (12%) taxable_income is $6,751-$21,638
  }else if(taxable_income<=annualMinimum+taxBracket[2].Married){
      base = round(taxBracket[0].Rate*taxBracket[1].Married,2)
       // console.log('base is: ' + base);// base = $485.00
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[1].Married))*taxBracket[1].Rate)),2);
          return amount_To_Withhold

   //fourth tier of taxes (22%) $21,639-$44,000
  }else if(taxable_income<=annualMinimum+taxBracket[3].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)+
             ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate),2);
       // console.log('base is: ' + base);// base = $2,271.56
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[2].Married))*taxBracket[2].Rate)),2);
          return amount_To_Withhold

   //fifth tier of taxes (24%) taxable_income is $44,001-$82,263
  }else if(taxable_income<=annualMinimum+taxBracket[4].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
             + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
             + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate),2);
      // console.log('base is: ' + base);// base = $7,191.20
       amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[3].Married))*taxBracket[3].Rate)),2);
         return amount_To_Withhold

   // sixth tier of taxes (32%) taxable_income is $82,264-$103,950
  }else if(taxable_income<=annualMinimum+taxBracket[5].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
                 + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
                 + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate)
                 + ((taxBracket[4].Married-taxBracket[3].Married)*taxBracket[3].Rate),2);
       // console.log('base is: ' + base);// base = $16,374.32
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[4].Married))*taxBracket[4].Rate)),2);
          return amount_To_Withhold

   //seventh tier of taxes (35%) taxable_income is $103,951-$257,050
  }else if(taxable_income<=annualMinimum+taxBracket[6].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
                 + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
                 + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate)
                 + ((taxBracket[4].Married-taxBracket[3].Married)*taxBracket[3].Rate)
                 + ((taxBracket[5].Married-taxBracket[4].Married)*taxBracket[4].Rate),2);
       // console.log('base is: ' + base);// base = $23,314.16
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[5].Married))*taxBracket[5].Rate)),2);
          return amount_To_Withhold
   //eighth tier of taxes (37%) taxable_income is $257,051 and up
  }else if(taxable_income>annualMinimum+taxBracket[6].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
                 + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
                 + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate)
                 + ((taxBracket[4].Married-taxBracket[3].Married)*taxBracket[3].Rate)
                 + ((taxBracket[5].Married-taxBracket[4].Married)*taxBracket[4].Rate)
                 + ((taxBracket[6].Married-taxBracket[5].Married)*taxBracket[5].Rate),2);
      // console.log('base is: ' + base);// base = $76,899.16
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[6].Married))*taxBracket[6].Rate)),2);
          return amount_To_Withhold
  }
}

function FEDERAL_MARRIED_MONTHLY_WITHHOLDINGS(taxable_income) {
  var base;
  var annualMinimum = 11800
  var amount_To_Withhold;
  var taxBracket =   [ {Rate: .10, Single: 0,      Married: 0,      HeadofHousehold: 0},
                       {Rate: .12, Single: 9700,   Married: 19400,  HeadofHousehold: 13850},
                       {Rate: .22, Single: 39475,  Married: 78950,  HeadofHousehold: 52850},
                       {Rate: .24, Single: 84200,  Married: 168400, HeadofHousehold: 84200},
                       {Rate: .32, Single: 160725, Married: 321450, HeadofHousehold: 160700},
                       {Rate: .35, Single: 204100, Married: 408200, HeadofHousehold: 204100},
                       {Rate: .37, Single: 510300, Married: 612300, HeadofHousehold: 510300}
                     ];

     annualMinimum = round((annualMinimum/12),2)
     taxBracket[0].Married = round(taxBracket[0].Married/12,0);
     taxBracket[1].Married = round(taxBracket[1].Married/12,0);
     taxBracket[2].Married = round(taxBracket[2].Married/12,0);
     taxBracket[3].Married = round(taxBracket[3].Married/12,0);
     taxBracket[4].Married = round(taxBracket[4].Married/12,0);
     taxBracket[5].Married = round(taxBracket[5].Married/12,0);
     taxBracket[6].Married = round(taxBracket[6].Married/12,0);

   //first tier of taxes (0%) taxable_income is $0.00–$1,900
     if(taxable_income<=annualMinimum+taxBracket[0].Married){
      return taxable_income;

   //second tier of taxes (10%) taxable_income is $1,901-$6,750
  }else if(taxable_income<=annualMinimum+taxBracket[1].Married){
      base = 0
       // console.log('base is: ' + base);// base = $0.00
      amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[0].Married))*taxBracket[0].Rate)),2);
        return amount_To_Withhold

   //third tier of taxes (12%) taxable_income is $6,751-$21,638
  }else if(taxable_income<=annualMinimum+taxBracket[2].Married){
      base = round(taxBracket[0].Rate*taxBracket[1].Married,2)
       // console.log('base is: ' + base);// base = $485.00
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[1].Married))*taxBracket[1].Rate)),2);
          return amount_To_Withhold

   //fourth tier of taxes (22%) $21,639-$44,000
  }else if(taxable_income<=annualMinimum+taxBracket[3].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)+
             ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate),2);
       // console.log('base is: ' + base);// base = $2,271.56
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[2].Married))*taxBracket[2].Rate)),2);
          return amount_To_Withhold

   //fifth tier of taxes (24%) taxable_income is $44,001-$82,263
  }else if(taxable_income<=annualMinimum+taxBracket[4].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
             + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
             + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate),2);
       // console.log('base is: ' + base);// base = $7,191.20
     amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[3].Married))*taxBracket[3].Rate)),2);
       return amount_To_Withhold

   // sixth tier of taxes (32%) taxable_income is $82,264-$103,950
  }else if(taxable_income<=annualMinimum+taxBracket[5].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
                 + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
                 + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate)
                 + ((taxBracket[4].Married-taxBracket[3].Married)*taxBracket[3].Rate),2);
       // console.log('base is: ' + base);// base = $16,374.32
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[4].Married))*taxBracket[4].Rate)),2);
          return amount_To_Withhold

   //seventh tier of taxes (35%) taxable_income is $103,951-$257,050
  }else if(taxable_income<=annualMinimum+taxBracket[6].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
                 + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
                 + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate)
                 + ((taxBracket[4].Married-taxBracket[3].Married)*taxBracket[3].Rate)
                 + ((taxBracket[5].Married-taxBracket[4].Married)*taxBracket[4].Rate),2);
       // console.log('base is: ' + base);// base = $23,314.16
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[5].Married))*taxBracket[5].Rate)),2);
          return amount_To_Withhold
   //eighth tier of taxes (37%) taxable_income is $257,051 and up
  }else if(taxable_income>annualMinimum+taxBracket[6].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
                 + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
                 + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate)
                 + ((taxBracket[4].Married-taxBracket[3].Married)*taxBracket[3].Rate)
                 + ((taxBracket[5].Married-taxBracket[4].Married)*taxBracket[4].Rate)
                 + ((taxBracket[6].Married-taxBracket[5].Married)*taxBracket[5].Rate),2);
      // console.log('base is: ' + base);// base = $76,899.16
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[6].Married))*taxBracket[6].Rate)),2);
          return amount_To_Withhold
  }
}

function FEDERAL_MARRIED_SEMIMONTHLY_WITHHOLDINGS(taxable_income) {
  var base;
  var annualMinimum = 11800
  var amount_To_Withhold;
  var taxBracket =   [ {Rate: .10, Single: 0,      Married: 0,      HeadofHousehold: 0},
                       {Rate: .12, Single: 9700,   Married: 19400,  HeadofHousehold: 13850},
                       {Rate: .22, Single: 39475,  Married: 78950,  HeadofHousehold: 52850},
                       {Rate: .24, Single: 84200,  Married: 168400, HeadofHousehold: 84200},
                       {Rate: .32, Single: 160725, Married: 321450, HeadofHousehold: 160700},
                       {Rate: .35, Single: 204100, Married: 408200, HeadofHousehold: 204100},
                       {Rate: .37, Single: 510300, Married: 612300, HeadofHousehold: 510300}
                     ];

     annualMinimum = round((annualMinimum/24),2)
     taxBracket[0].Married = round(taxBracket[0].Married/24,0);
     taxBracket[1].Married = round(taxBracket[1].Married/24,0);
     taxBracket[2].Married = round(taxBracket[2].Married/24,0);
     taxBracket[3].Married = round(taxBracket[3].Married/24,0);
     taxBracket[4].Married = round(taxBracket[4].Married/24,0);
     taxBracket[5].Married = round(taxBracket[5].Married/24,0);
     taxBracket[6].Married = round(taxBracket[6].Married/24,0);

   //first tier of taxes (0%) taxable_income is $0.00–$1,900
     if(taxable_income<=annualMinimum+taxBracket[0].Married){
      return taxable_income;

   //second tier of taxes (10%) taxable_income is $1,901-$6,750
  }else if(taxable_income<=annualMinimum+taxBracket[1].Married){
      base = 0
      // console.log('base is: ' + base);// base = $0.00
       amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[0].Married))*taxBracket[0].Rate)),2);
        return amount_To_Withhold

   //third tier of taxes (12%) taxable_income is $6,751-$21,638
  }else if(taxable_income<=annualMinimum+taxBracket[2].Married){
      base = round(taxBracket[0].Rate*taxBracket[1].Married,2)
       // console.log('base is: ' + base);// base = $485.00
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[1].Married))*taxBracket[1].Rate)),2);
          return amount_To_Withhold

   //fourth tier of taxes (22%) $21,639-$44,000
  }else if(taxable_income<=annualMinimum+taxBracket[3].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)+
             ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate),2);
       // console.log('base is: ' + base);// base = $2,271.56
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[2].Married))*taxBracket[2].Rate)),2);
          return amount_To_Withhold

   //fifth tier of taxes (24%) taxable_income is $44,001-$82,263
  }else if(taxable_income<=annualMinimum+taxBracket[4].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
             + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
             + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate),2);
      // console.log('base is: ' + base);// base = $7,191.20
       amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[3].Married))*taxBracket[3].Rate)),2);
         return amount_To_Withhold

   // sixth tier of taxes (32%) taxable_income is $82,264-$103,950
  }else if(taxable_income<=annualMinimum+taxBracket[5].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
                 + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
                 + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate)
                 + ((taxBracket[4].Married-taxBracket[3].Married)*taxBracket[3].Rate),2);
       // console.log('base is: ' + base);// base = $16,374.32
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[4].Married))*taxBracket[4].Rate)),2);
          return amount_To_Withhold

   //seventh tier of taxes (35%) taxable_income is $103,951-$257,050
  }else if(taxable_income<=annualMinimum+taxBracket[6].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
                 + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
                 + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate)
                 + ((taxBracket[4].Married-taxBracket[3].Married)*taxBracket[3].Rate)
                 + ((taxBracket[5].Married-taxBracket[4].Married)*taxBracket[4].Rate),2);
       // console.log('base is: ' + base);// base = $23,314.16
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[5].Married))*taxBracket[5].Rate)),2);
          return amount_To_Withhold
   //eighth tier of taxes (37%) taxable_income is $257,051 and up
  }else if(taxable_income>annualMinimum+taxBracket[6].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
                 + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
                 + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate)
                 + ((taxBracket[4].Married-taxBracket[3].Married)*taxBracket[3].Rate)
                 + ((taxBracket[5].Married-taxBracket[4].Married)*taxBracket[4].Rate)
                 + ((taxBracket[6].Married-taxBracket[5].Married)*taxBracket[5].Rate),2);
       // console.log('base is: ' + base);// base = $76,899.16
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[6].Married))*taxBracket[6].Rate)),2);
          return amount_To_Withhold
  }
}

function FEDERAL_MARRIED_BIWEEKLY_WITHHOLDINGS(taxable_income) {
  var base;
  var annualMinimum = 11800
  var amount_To_Withhold;
  var taxBracket =   [ {Rate: .10, Single: 0,      Married: 0,      HeadofHousehold: 0},
                       {Rate: .12, Single: 9700,   Married: 19400,  HeadofHousehold: 13850},
                       {Rate: .22, Single: 39475,  Married: 78950,  HeadofHousehold: 52850},
                       {Rate: .24, Single: 84200,  Married: 168400, HeadofHousehold: 84200},
                       {Rate: .32, Single: 160725, Married: 321450, HeadofHousehold: 160700},
                       {Rate: .35, Single: 204100, Married: 408200, HeadofHousehold: 204100},
                       {Rate: .37, Single: 510300, Married: 612300, HeadofHousehold: 510300}
                     ];

     annualMinimum = round((annualMinimum/26),2)
     taxBracket[0].Married = round(taxBracket[0].Married/26,0);
     taxBracket[1].Married = round(taxBracket[1].Married/26,0);
     taxBracket[2].Married = round(taxBracket[2].Married/26,0);
     taxBracket[3].Married = round(taxBracket[3].Married/26,0);
     taxBracket[4].Married = round(taxBracket[4].Married/26,0);
     taxBracket[5].Married = round(taxBracket[5].Married/26,0);
     taxBracket[6].Married = round(taxBracket[6].Married/26,0);

   //first tier of taxes (0%) taxable_income is $0.00–$1,900
     if(taxable_income<=annualMinimum+taxBracket[0].Married){
      return taxable_income;

   //second tier of taxes (10%) taxable_income is $1,901-$6,750
  }else if(taxable_income<=annualMinimum+taxBracket[1].Married){
      base = 0
       // console.log('base is: ' + base);// base = $0.00
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[0].Married))*taxBracket[0].Rate)),2);
          return amount_To_Withhold

   //third tier of taxes (12%) taxable_income is $6,751-$21,638
  }else if(taxable_income<=annualMinimum+taxBracket[2].Married){
      base = round(taxBracket[0].Rate*taxBracket[1].Married,2)
       // console.log('base is: ' + base);// base = $485.00
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[1].Married))*taxBracket[1].Rate)),2);
          return amount_To_Withhold

   //fourth tier of taxes (22%) $21,639-$44,000
  }else if(taxable_income<=annualMinimum+taxBracket[3].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)+
             ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate),2);
       // console.log('base is: ' + base);// base = $2,271.56
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[2].Married))*taxBracket[2].Rate)),2);
          return amount_To_Withhold

   //fifth tier of taxes (24%) taxable_income is $44,001-$82,263
  }else if(taxable_income<=annualMinimum+taxBracket[4].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
             + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
             + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate),2);
       // console.log('base is: ' + base);// base = $7,191.20
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[3].Married))*taxBracket[3].Rate)),2);
          return amount_To_Withhold

   // sixth tier of taxes (32%) taxable_income is $82,264-$103,950
  }else if(taxable_income<=annualMinimum+taxBracket[5].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
                 + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
                 + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate)
                 + ((taxBracket[4].Married-taxBracket[3].Married)*taxBracket[3].Rate),2);
       // console.log('base is: ' + base);// base = $16,374.32
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[4].Married))*taxBracket[4].Rate)),2);
          return amount_To_Withhold

   //seventh tier of taxes (35%) taxable_income is $103,951-$257,050
  }else if(taxable_income<=annualMinimum+taxBracket[6].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
                 + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
                 + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate)
                 + ((taxBracket[4].Married-taxBracket[3].Married)*taxBracket[3].Rate)
                 + ((taxBracket[5].Married-taxBracket[4].Married)*taxBracket[4].Rate),2);
       // console.log('base is: ' + base);// base = $23,314.16
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[5].Married))*taxBracket[5].Rate)),2);
          return amount_To_Withhold
   //eighth tier of taxes (37%) taxable_income is $257,051 and up
  }else if(taxable_income>annualMinimum+taxBracket[6].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
                 + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
                 + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate)
                 + ((taxBracket[4].Married-taxBracket[3].Married)*taxBracket[3].Rate)
                 + ((taxBracket[5].Married-taxBracket[4].Married)*taxBracket[4].Rate)
                 + ((taxBracket[6].Married-taxBracket[5].Married)*taxBracket[5].Rate),2);
       // console.log('base is: ' + base);// base = $76,899.16
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[6].Married))*taxBracket[6].Rate)),2);
          return amount_To_Withhold
  }
}

function FEDERAL_MARRIED_WEEKLY_WITHHOLDINGS(taxable_income) {
  var base;
  var annualMinimum = 11800
  var amount_To_Withhold;
  var taxBracket =   [ {Rate: .10, Single: 0,      Married: 0,      HeadofHousehold: 0},
                       {Rate: .12, Single: 9700,   Married: 19400,  HeadofHousehold: 13850},
                       {Rate: .22, Single: 39475,  Married: 78950,  HeadofHousehold: 52850},
                       {Rate: .24, Single: 84200,  Married: 168400, HeadofHousehold: 84200},
                       {Rate: .32, Single: 160725, Married: 321450, HeadofHousehold: 160700},
                       {Rate: .35, Single: 204100, Married: 408200, HeadofHousehold: 204100},
                       {Rate: .37, Single: 510300, Married: 612300, HeadofHousehold: 510300}
                     ];

     annualMinimum = round((annualMinimum/52),2)
     taxBracket[0].Married = round(taxBracket[0].Married/52,0);
     taxBracket[1].Married = round(taxBracket[1].Married/52,0);
     taxBracket[2].Married = round(taxBracket[2].Married/52,0);
     taxBracket[3].Married = round(taxBracket[3].Married/52,0);
     taxBracket[4].Married = round(taxBracket[4].Married/52,0);
     taxBracket[5].Married = round(taxBracket[5].Married/52,0);
     taxBracket[6].Married = round(taxBracket[6].Married/52,0);

   //first tier of taxes (0%) taxable_income is $0.00–$1,900
     if(taxable_income<=annualMinimum+taxBracket[0].Married){
      return taxable_income;

   //second tier of taxes (10%) taxable_income is $1,901-$6,750
  }else if(taxable_income<=annualMinimum+taxBracket[1].Married){
      base = 0
       // console.log('base is: ' + base);// base = $0.00
        amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[0].Married))*taxBracket[0].Rate)),2);
          return amount_To_Withhold

   //third tier of taxes (12%) taxable_income is $6,751-$21,638
  }else if(taxable_income<=annualMinimum+taxBracket[2].Married){
      base = round(taxBracket[0].Rate*taxBracket[1].Married,2)
       // console.log('base is: ' + base);// base = $485.00
      amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[1].Married))*taxBracket[1].Rate)),2);
      return amount_To_Withhold

   //fourth tier of taxes (22%) $21,639-$44,000
  }else if(taxable_income<=annualMinimum+taxBracket[3].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)+
             ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate),2);
       // console.log('base is: ' + base);// base = $2,271.56
      amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[2].Married))*taxBracket[2].Rate)),2);
      return amount_To_Withhold

   //fifth tier of taxes (24%) taxable_income is $44,001-$82,263
  }else if(taxable_income<=annualMinimum+taxBracket[4].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
             + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
             + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate),2);
       // console.log('base is: ' + base);// base = $7,191.20
      amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[3].Married))*taxBracket[3].Rate)),2);
      return amount_To_Withhold

   // sixth tier of taxes (32%) taxable_income is $82,264-$103,950
  }else if(taxable_income<=annualMinimum+taxBracket[5].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Single)
                 + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
                 + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate)
                 + ((taxBracket[4].Married-taxBracket[3].Married)*taxBracket[3].Rate),2);
       // console.log('base is: ' + base);// base = $16,374.32
      amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[4].Married))*taxBracket[4].Rate)),2);
      return amount_To_Withhold

   //seventh tier of taxes (35%) taxable_income is $103,951-$257,050
  }else if(taxable_income<=annualMinimum+taxBracket[6].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
                 + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
                 + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate)
                 + ((taxBracket[4].Married-taxBracket[3].Married)*taxBracket[3].Rate)
                 + ((taxBracket[5].Married-taxBracket[4].Married)*taxBracket[4].Rate),2);
       // console.log('base is: ' + base);// base = $23,314.16
      amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[5].Married))*taxBracket[5].Rate)),2);
      return amount_To_Withhold

   //eighth tier of taxes (37%) taxable_income is $257,051 and up
  }else if(taxable_income>annualMinimum+taxBracket[6].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
                 + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
                 + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate)
                 + ((taxBracket[4].Married-taxBracket[3].Married)*taxBracket[3].Rate)
                 + ((taxBracket[5].Married-taxBracket[4].Married)*taxBracket[4].Rate)
                 + ((taxBracket[6].Married-taxBracket[5].Married)*taxBracket[5].Rate),2);
      // console.log('base is: ' + base);// base = $76,899.16
      amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[6].Married))*taxBracket[6].Rate)),2);
      return amount_To_Withhold
  }
}

function FEDERAL_MARRIED_DAILY_WITHHOLDINGS(taxable_income) {
  var base;
  var annualMinimum = 11800
  var amount_To_Withhold;
  var taxBracket =   [ {Rate: .10, Single: 0,      Married: 0,      HeadofHousehold: 0},
                       {Rate: .12, Single: 9700,   Married: 19400,  HeadofHousehold: 13850},
                       {Rate: .22, Single: 39475,  Married: 78950,  HeadofHousehold: 52850},
                       {Rate: .24, Single: 84200,  Married: 168400, HeadofHousehold: 84200},
                       {Rate: .32, Single: 160725, Married: 321450, HeadofHousehold: 160700},
                       {Rate: .35, Single: 204100, Married: 408200, HeadofHousehold: 204100},
                       {Rate: .37, Single: 510300, Married: 612300, HeadofHousehold: 510300}
                     ];

     annualMinimum = round((annualMinimum/260),2)
     taxBracket[0].Married = round(taxBracket[0].Married/260,0);
     taxBracket[1].Married = round(taxBracket[1].Married/260,0);
     taxBracket[2].Married = round(taxBracket[2].Married/260,0);
     taxBracket[3].Married = round(taxBracket[3].Married/260,0);
     taxBracket[4].Married = round(taxBracket[4].Married/260,0);
     taxBracket[5].Married = round(taxBracket[5].Married/260,0);
     taxBracket[6].Married = round(taxBracket[6].Married/260,0);

   //first tier of taxes (0%) taxable_income is $0.00–$1,900
     if(taxable_income<=annualMinimum+taxBracket[0].Married){
      return taxable_income;

   //second tier of taxes (10%) taxable_income is $1,901-$6,750
  }else if(taxable_income<=annualMinimum+taxBracket[1].Married){
      base = 0
       // console.log('base is: ' + base);// base = $0.00
      amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[0].Married))*taxBracket[0].Rate)),2);
      return amount_To_Withhold

   //third tier of taxes (12%) taxable_income is $6,751-$21,638
  }else if(taxable_income<=annualMinimum+taxBracket[2].Married){
      base = round(taxBracket[0].Rate*taxBracket[1].Married,2)
       // console.log('base is: ' + base);// base = $485.00
      amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[1].Married))*taxBracket[1].Rate)),2);
      return amount_To_Withhold

   //fourth tier of taxes (22%) $21,639-$44,000
  }else if(taxable_income<=annualMinimum+taxBracket[3].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)+
             ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate),2);
       // console.log('base is: ' + base);// base = $2,271.56
      amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[2].Married))*taxBracket[2].Rate)),2);
      return amount_To_Withhold

   //fifth tier of taxes (24%) taxable_income is $44,001-$82,263
  }else if(taxable_income<=annualMinimum+taxBracket[4].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
             + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
             + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate),2);
       // console.log('base is: ' + base);// base = $7,191.20
      amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[3].Married))*taxBracket[3].Rate)),2);
      return amount_To_Withhold

   // sixth tier of taxes (32%) taxable_income is $82,264-$103,950
  }else if(taxable_income<=annualMinimum+taxBracket[5].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
                 + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
                 + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate)
                 + ((taxBracket[4].Married-taxBracket[3].Married)*taxBracket[3].Rate),2);
       // console.log('base is: ' + base);// base = $16,374.32
       amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[4].Married))*taxBracket[4].Rate)),2);
       return amount_To_Withhold

   //seventh tier of taxes (35%) taxable_income is $103,951-$257,050
  }else if(taxable_income<=annualMinimum+taxBracket[6].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
                 + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
                 + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate)
                 + ((taxBracket[4].Married-taxBracket[3].Married)*taxBracket[3].Rate)
                 + ((taxBracket[5].Married-taxBracket[4].Married)*taxBracket[4].Rate),2);
       // console.log('base is: ' + base);// base = $23,314.16
      amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[5].Married))*taxBracket[5].Rate)),2);
      return amount_To_Withhold
   //eighth tier of taxes (37%) taxable_income is $257,051 and up
  }else if(taxable_income>annualMinimum+taxBracket[6].Married){
      base = round((taxBracket[0].Rate*taxBracket[1].Married)
                 + ((taxBracket[2].Married-taxBracket[1].Married)*taxBracket[1].Rate)
                 + ((taxBracket[3].Married-taxBracket[2].Married)*taxBracket[2].Rate)
                 + ((taxBracket[4].Married-taxBracket[3].Married)*taxBracket[3].Rate)
                 + ((taxBracket[5].Married-taxBracket[4].Married)*taxBracket[4].Rate)
                 + ((taxBracket[6].Married-taxBracket[5].Married)*taxBracket[5].Rate),2);
      // console.log('base is: ' + base);// base = $76,899.16
      amount_To_Withhold = round((base+((taxable_income-(annualMinimum+taxBracket[6].Married))*taxBracket[6].Rate)),2);
      return amount_To_Withhold
  }
}

function FEDERALTAX_CALCULATOR (taxable_income, filing_status, pay_period_method) {
  var tax_functions_array = [
                            { Withholdings: FEDERAL_SINGLE_ANNUAL_WITHHOLDINGS(taxable_income),       Filing_Status: 'Single',    State_Filing_Status: 'Single',                  State_Filing_Status2: 'Single',                       Pay_Period_Method: 'Annually',},
                            { Withholdings: FEDERAL_SINGLE_SEMIANNUAL_WITHHOLDINGS(taxable_income),   Filing_Status: 'Single',    State_Filing_Status: 'Single',                  State_Filing_Status2: 'Single',                       Pay_Period_Method: 'Semiannually'},
                            { Withholdings: FEDERAL_SINGLE_QUARTERLY_WITHHOLDINGS(taxable_income),    Filing_Status: 'Single',    State_Filing_Status: 'Single',                  State_Filing_Status2: 'Single',                       Pay_Period_Method: 'Quarterly'},
                            { Withholdings: FEDERAL_SINGLE_MONTHLY_WITHHOLDINGS(taxable_income),      Filing_Status: 'Single',    State_Filing_Status: 'Single',                  State_Filing_Status2: 'Single',                       Pay_Period_Method: 'Monthly'},
                            { Withholdings: FEDERAL_SINGLE_SEMIMONTHLY_WITHHOLDINGS(taxable_income),  Filing_Status: 'Single',    State_Filing_Status: 'Single',                  State_Filing_Status2: 'Single',                       Pay_Period_Method: 'Semimonthly'},
                            { Withholdings: FEDERAL_SINGLE_BIWEEKLY_WITHHOLDINGS(taxable_income),     Filing_Status: 'Single',    State_Filing_Status: 'Single',                  State_Filing_Status2: 'Single',                       Pay_Period_Method: 'Biweekly'},
                            { Withholdings: FEDERAL_SINGLE_WEEKLY_WITHHOLDINGS(taxable_income),       Filing_Status: 'Single',    State_Filing_Status: 'Single',                  State_Filing_Status2: 'Single',                       Pay_Period_Method: 'Weekly'},
                            { Withholdings: FEDERAL_SINGLE_DAILY_WITHHOLDINGS(taxable_income),        Filing_Status: 'Single',    State_Filing_Status: 'Single',                  State_Filing_Status2: 'Single',                       Pay_Period_Method: 'Daily'},
                            { Withholdings: FEDERAL_MARRIED_ANNUAL_WITHHOLDINGS(taxable_income),      Filing_Status: 'Married',   State_Filing_Status: 'Married Filing Jointly',  State_Filing_Status2: 'Married Filing Separately',    Pay_Period_Method: 'Annually'},
                            { Withholdings: FEDERAL_MARRIED_SEMIANNUAL_WITHHOLDINGS(taxable_income),  Filing_Status: 'Married',   State_Filing_Status: 'Married Filing Jointly',  State_Filing_Status2: 'Married Filing Separately',    Pay_Period_Method: 'Semiannually'},
                            { Withholdings: FEDERAL_MARRIED_QUARTERLY_WITHHOLDINGS(taxable_income),   Filing_Status: 'Married',   State_Filing_Status: 'Married Filing Jointly',  State_Filing_Status2: 'Married Filing Separately',    Pay_Period_Method: 'Quarterly'},
                            { Withholdings: FEDERAL_MARRIED_MONTHLY_WITHHOLDINGS(taxable_income),     Filing_Status: 'Married',   State_Filing_Status: 'Married Filing Jointly',  State_Filing_Status2: 'Married Filing Separately',    Pay_Period_Method: 'Monthly'},
                            { Withholdings: FEDERAL_MARRIED_SEMIMONTHLY_WITHHOLDINGS(taxable_income), Filing_Status: 'Married',   State_Filing_Status: 'Married Filing Jointly',  State_Filing_Status2: 'Married Filing Separately',    Pay_Period_Method: 'Semimonthly'},
                            { Withholdings: FEDERAL_MARRIED_BIWEEKLY_WITHHOLDINGS(taxable_income),    Filing_Status: 'Married',   State_Filing_Status: 'Married Filing Jointly',  State_Filing_Status2: 'Married Filing Separately',    Pay_Period_Method: 'Biweekly'},
                            { Withholdings: FEDERAL_MARRIED_WEEKLY_WITHHOLDINGS(taxable_income),      Filing_Status: 'Married',   State_Filing_Status: 'Married Filing Jointly',  State_Filing_Status2: 'Married Filing Separately',    Pay_Period_Method: 'Weekly'},
                            { Withholdings: FEDERAL_MARRIED_DAILY_WITHHOLDINGS(taxable_income),       Filing_Status: 'Married',   State_Filing_Status: 'Married Filing Jointly',  State_Filing_Status2: 'Married Filing Separately',    Pay_Period_Method: 'Daily'}
                           ];


  for (var i = 0; i < tax_functions_array.length; i++) {
    if((tax_functions_array[i].Filing_Status == filing_status && tax_functions_array[i].Pay_Period_Method == pay_period_method))
    {   return tax_functions_array[i].Withholdings;
    } else if ((tax_functions_array[i].State_Filing_Status == filing_status) && (tax_functions_array[i].Pay_Period_Method == pay_period_method))
            {   return tax_functions_array[i].Withholdings;
            } else if ((tax_functions_array[i].State_Filing_Status2 == filing_status) && (tax_functions_array[i].Pay_Period_Method == pay_period_method))
                    {   return tax_functions_array[i].Withholdings;
                    }
console.log(tax_functions_array[i].Filing_Status);
  }
  { return 'hello world'}
}

console.log(FEDERALTAX_CALCULATOR(120000,'Single', 'Annually'));
