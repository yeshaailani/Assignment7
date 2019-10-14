//STEP 1
function halfNumber(number) {
    var halfno = number / 2
    console.log("Half of " + number +" is " + halfno)
    return halfno
  }
  halfNumber(4);

//STEP 2
function squareNumber(number) {
    var sqno = number * number;
    console.log("The result of squaring the number " + number +" is " + sqno);
    return sqno;
  }
  squareNumber(3);

//STEP 3
function percentOf(no1, no2) {
    var per = (no1 / no2) * 100;
    console.log(no1 +" is " + per + "% of " + no2);
    return per;
  }
  percentOf(2, 4);
  
  //STEP 4
  function findModulus(no1, no2){
    var mods = no2  % no1;
    console.log(mods +" is the modulus of " + no1 + " and " + no2);
    return mods;
  }
  findModulus(4, 10);
  
  //STEP 5
  function sum(amount)
  {
      var sum = 0;
      var numbers = window.prompt("Enter " +amount+ " numbers seperated by commas");
      numArray = numbers.split(",");
      if(numArray.length == amount)
      {
        for (i = 0; i < numArray.length; i++) {
            sum += Number(numArray[i]);
            console.log(sum);
      }
    }
      else
      {
            console.log("Something went wrong!");
      }

    }
    sum(3);
  