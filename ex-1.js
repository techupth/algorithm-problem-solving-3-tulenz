function sortCustomerName(customers) {
  let n = customers.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (customers[j] > customers[j + 1]) {
        let temp = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = temp;
      }
    }
  }
  return customers;
}

const customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];
console.log(sortCustomerName(customers));