function bingo(ticket, win) {
    let miniWins = 0;
    for (let i = 0; i < ticket.length; i++) {
      let [str, num] = ticket[i];
      for (let char of str) {
        if (char.charCodeAt(0) === num) {
          miniWins++;
          break;
        }
      }
    }
    return miniWins >= win ? 'Winner!' : 'Loser!';
  }