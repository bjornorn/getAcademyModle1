
function ErDetEpost() {
    let btekst = document.getElementById("konstTekst").innerHTML;
    btekst = btekst.replace(/\s+/g, '');
  
    
    if (btekst.indexOf('@') > 0) {
        // alert('alfakrøll er der');
        alfaverdi = btekst.indexOf('@'); 
         
    }
    else {return false;}
 
    if (btekst.slice(0,alfaverdi).indexOf('.') < alfaverdi) {
                // alert('punktum  før alfakrøll er tilstede');
        dotBefore = true;
    }
    else {return false;}

    if (btekst.slice(0,alfaverdi).indexOf('.') < alfaverdi) {
        // alert('punktum  ETTER alfakrøll er tilstede');
        dotAfter = true;
    }
    else {return false;}

    if ((alfaverdi > 0) & (dotbefore = true) & (dotAfter = true) ) {
        validEmail = true;
        return true;
    }
    else {return false;}



    console.log(btekst.indexOf('@'));
    console.log(btekst.slice(0,alfaverdi).indexOf('.'))
    console.log(dotBefore);
    console.log(dotAfter);
    console.log(validEmail);
}

// alert('hei');