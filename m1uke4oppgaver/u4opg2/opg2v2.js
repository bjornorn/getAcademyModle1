function ErDetEpost(CheckText) {
  CheckText = CheckText.replace(/\s+/g, '');

  let alfaverdi = CheckText.indexOf('@');
  let dotBefore = CheckText.slice(0, alfaverdi).indexOf('.');
  let dotAfter = CheckText.substring(alfaverdi).indexOf('.');
  //   let trueOrFalse = (alfaverdi == -1 || dotBefore == -1 || dotAfter == -1) ? false : true;

  console.log('alfaverdi ' + alfaverdi);
  console.log('dotBefore ' + dotBefore);
  console.log('dotAfter ' + dotAfter);
  //   console.log('trueOrFalse ' + trueOrFalse);

  if (alfaverdi == -1 || dotBefore == -1 || dotAfter == -1) {
    return false;
  } else {
    return true;
  }
}
//         Linn sin løsning:
// if (CheckText.includes("@") && !CheckText.includes(" ")) {
//     if (dotBefore < dotAfter) {
//     return true;
// }
// else return false;
// }
// else {return false;
// }
// }
