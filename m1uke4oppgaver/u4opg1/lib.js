function fixText(tekst) {
    let fjerneMellomrom = tekst.trim();
    let fikseTekst =
      fjerneMellomrom.toUpperCase().charAt(0) +
      fjerneMellomrom.toLowerCase().slice(1);
    return fikseTekst;
  }






