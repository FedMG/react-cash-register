import coinRef from './coin-reference.js';

const checkChangeDue = (change_due, cid) => {
  const change = {};
  const cashKeys = Object.keys(coinRef);

  for (let i = cashKeys.length - 1; i >= 0; i--) {
    if (change_due >= coinRef[cashKeys[i]]) {
      if (!change[cashKeys[i]]) {
        change[cashKeys[i]] = 0;
      }
      // create coin key and the reference value of that coin
      change[cashKeys[i]] += coinRef[cashKeys[i]];

      // cash-in-drawer is substracted acording to the coin
      cid[cashKeys[i]] -= coinRef[cashKeys[i]];

      // change due is reduced
      change_due -= coinRef[cashKeys[i]];

      if (change_due === 0) {
        return [change, change_due];
      }
      i = i + 1;
    }
  }
};

export default checkChangeDue;
