const Utils = {
  calculateNumber: (type, a, b)=> {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  } else if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  } else if (type === 'DIVIDE') {
    let aRound = Math.round(a);
    let bRound = Math.round(b);
    if (bRound === 0) {
      return 'Error';
    } else {
      return aRound / bRound;
    }
  };
}
}

module.exports = Utils;
