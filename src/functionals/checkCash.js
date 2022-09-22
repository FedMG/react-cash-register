import { getTotal, swapToArray } from './utils.js';
import checkChangeDue from './checkChange.js';

function checkCashRegister(price, payment, cid) {
  const total = getTotal(cid);
  let change_due = payment - price;

  if (change_due < 0) return { status: 'INSUFFICIENT_PAYMENT', change: [] };

  if (total < change_due) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  } else if (total === change_due) {
    return { status: 'CLOSED', change: [...cid] };
  }

  const changeType = checkChangeDue(change_due, cid);

  // change_due === 0
  if (!changeType[0]) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }

  if (!Number(changeType[1])) {
    return { status: 'OPEN', change: swapToArray(changeType[0]) };
  }
}

export default checkCashRegister;
