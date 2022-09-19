const moneyReference = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  ONE_HUNDRED: 100,
};

const cashInDrawer = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
];

const getTotal = (elem) => {
  let total = 0;

  for (let [_, amount] of elem) {
    total += amount;
  }
};

function checkCashRegister(price, payment, cid) {
  let total = getTotal(cid);
  let change_due = payment - price;
  if (change_due < 0) 'INSUFFICIENT_PAYMENT';

  if (total < change_due) return { status: 'INSUFFICIENT_FUNDS', change: [] };

  // return change;
}

checkCashRegister(19.5, 20);
