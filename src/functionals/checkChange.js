import coinRef from './coin-reference.js';
import {swapToObject} from './utils.js'

const checkChangeDue = (change_due, cid) => {
  const change = {};
  const cashKeys = Object.keys(coinRef);
  const cidRef = swapToObject(cid)

  for (let i = cashKeys.length - 1; i >= 0; i--) {
    if (change_due >= coinRef[cashKeys[i]] && !cidRef[cashKeys[i]] == 0) {
      if (!change[cashKeys[i]]) {
        change[cashKeys[i]] = 0;
      }
      // create coin key and the reference value of that coin
      change[cashKeys[i]] += coinRef[cashKeys[i]];

      // cash-in-drawer is substracted acording to the coin
      cidRef[cashKeys[i]] -= coinRef[cashKeys[i]];

      // change due is reduced
      change_due -= coinRef[cashKeys[i]];
      change_due = change_due.toFixed(2);

      if (Number(change_due) === 0) {
        return [change, change_due, cidRef];
      }
      i = i + 1;
    }
  }
  return []
};

export default checkChangeDue;
