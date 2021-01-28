function ErDetEpost(CheckText) {
    CheckText = CheckText.replace(/\s+/g, '');
    let cleanText = !CheckText.includes(" ") ? true : false;
    let alfaverdi = CheckText.indexOf('@');
    let dotBefore = CheckText.slice(0, alfaverdi).indexOf('.');
    let dotAfter = alfaverdi + CheckText.substring(alfaverdi).indexOf('.');
    //   let trueOrFalse = (alfaverdi == -1 || dotBefore == -1 || dotAfter == -1) ? false : true;
    
    console.log('checktext ' + CheckText);
    console.log('cleanText ' + cleanText);
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

  