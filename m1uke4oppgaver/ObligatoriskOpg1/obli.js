function isDateValid(dato) {
  day = dato[0] + dato[1];
  firstDot = dato[2];
  month = dato[3] + dato[4];
  lastDot = dato[5];
  year = dato[6] + dato[7] + dato[8] + dato[9];

  if (
    year.length === 4 &&
    year >= '0000' &&
    year <= '9999' &&
    month.length === 2 &&
    month >= '1' &&
    month <= '12' &&
    day.length === 2 &&
    day >= '0' &&
    day <= '31'
  ) {
    return false;
  } else {
    return true;
  }
}

function isDigitsTen(dato) {
  // dato = dato.length;
  if (dato == undefined) return false;
  // console.log('lende på string ' + datoDigits);

  if (dato.length != 10) {
    return false;
  } else {
    return true;
  }
}

function someDotsMissing(dato) {
  // console.log(dato[2] + dato[5]);
  // (String.includes('.', 3 && '.', 6))

  if (dato[2] + dato[5] != '..') {
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

function ShortMonths(shortMonths) {
  const shortMonthsGang = [2, 4, 6, 9, 11];
  let day0 = parseInt(shortMonths[0]);
  let day1 = parseInt(shortMonths[1]);
  let month0 = parseInt(shortMonths[3]);
  let month1 = parseInt(shortMonths[4]);
  let sumMonths = month0 * 10 + month1;
  let sumDays = day0 * 10 + day1;

  // console.log('shortMonths ' + shortMonthsGang);
  // console.log('sumMonths ' + sumMonths);

  if (
    sumMonths == 2 ||
    sumMonths == 4 ||
    sumMonths == 6 ||
    sumMonths == 9 ||
    (sumMonths == 11 && sumDays > 30)
  ) {
    return true;
  } else {
    return false;
  }
}

function FebMonth(shortMonths) {
  let day0 = parseInt(shortMonths[0]);
  let day1 = parseInt(shortMonths[1]);
  let month0 = parseInt(shortMonths[3]);
  let month1 = parseInt(shortMonths[4]);
  let sumMonths = month0 * 10 + month1;
  let sumDays = day0 * 10 + day1;

  // console.log('shortMonths ' + sumDays);
  // console.log('sumMonths ' + sumMonths);

  if (sumMonths == 2 && sumDays > 29) {
    return true;
  } else {
    return false;
  }
}

function notLeapYear(dato) {
  Qyear = dato[6] + dato[7] + dato[8] + dato[9];
  Qmonth = dato[3] + dato[4];
  Qday = dato[0] + dato[1];

  // console.log(Qyear);
  // console.log(Qmonth);

  if (
    (Qday >= 29 && Qmonth == 2 && !(Qyear % 4 == 0 && Qyear % 100 != 0)) ||
    Qyear % 400 == 0
  ) {
    return true;
  }
  return false;
}

function LeapYear(dato) {
  Qyear = dato[6] + dato[7] + dato[8] + dato[9];
  Qmonth = dato[3] + dato[4];
  Qday = dato[0] + dato[1];
  QleapDay = Qday + Qmonth;

  console.log(QleapDay);
  // console.log(Qmonth);

  if (QleapDay == 2902) {
    if (Qyear % 4 == 0 && Qyear % 100 != 0) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }

  if (Qyear % 4 == 0 && Qyear % 100 != 0) {
    return true;
  }
}
