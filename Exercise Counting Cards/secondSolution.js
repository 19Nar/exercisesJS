function cc(card) {
    var regex = /[JQKA]/;
    if (card > 1 && card < 7) {
      count++;
    } else if (card === 10 || String(card).match(regex)) {
      count--;
    }
  
    if (count > 0) return count + " Bet";
    return count + " Hold"}