function isDigitsTen(dato) {
  let datoDigits = dato.length;

  // console.log('lende på string ' + datoDigits);

  if (datoDigits != 10) {
    return true;
  } else {
    return false;
  }
}

function DotsInPlace(dots) {
  // console.log(dato[2] + dato[5]);

  if (dots[2] + dots[5] != '..') {
    return true;
  } else {
    return false;
  }
}

function YearDigits(year) {
  year = year.substring(6);

  // console.log(year.length);

  if (year.length != 4) {
    return true;
  } else {
    return false;
  }
}

function MonthDigits(month) {
  let month0 = parseInt(month[3]);
  let month1 = parseInt(month[4]);

  // console.log(month);
  // console.log('parseFloat0 ' + month0);
  // console.log('parseFloat1 ' + month1);

  if (
    (month0 != 0 && month0 != 1) ||
    (month1 != 0 && month1 != 1 && month1 != 2)
  ) {
    return true;
  } else {
    return false;
  }
}

function MonthValue(monthValue) {
  let month0 = parseInt(monthValue[3]);
  let month1 = parseInt(monthValue[4]);

  if (
    (month0 != 0 && month0 != 1) ||
    (month1 != 0 && month1 != 1 && month1 != 2)
  ) {
    return true;
  } else {
    return false;
  }
}

function DayValue(dayValue) {
  let day0 = parseInt(dayValue[0]);
  let day1 = parseInt(dayValue[1]);
  let daySum = day0 * 10 + day1;

  // console.log('day0 ' + day0);
  // console.log('day1 ' + day1);
  // console.log('daySum ' + daySum);

  if (day0 >= 0 && day0 <= 3 && day1 >= 0 && day1 <= 9 && daySum <= 31) {
    return true;
  } else {
    return false;
  }
}

function LongMonths(longMonth) {
  const shortMonths = [2, 4, 6, 9, 11];
  let month0 = parseInt(longMonth[3]);
  let month1 = parseInt(longMonth[4]);
  let sumMonth = month0 * 10 + month1;

  console.log('shortMonths ' + shortMonths.some(any));
  console.log('sumMonths ' + sumMonth);

  if (sumMonth == shortMonths) {
    return true;
  } else {
    return false;
  }
}
