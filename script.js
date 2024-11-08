// Function to get the balance from local storage
function getBalanceFromLocalStorage() {
  const storedBalance = localStorage.getItem('balance');
  return storedBalance ? parseFloat(storedBalance) : 0;
}

// Function to save the balance to local storage
function saveBalanceToLocalStorage() {
  localStorage.setItem('balance', balance.toFixed(2));
}

// Initialize balance from local storage
let balance = getBalanceFromLocalStorage();

// Function to update the balance display
function updateBalance() {
  document.getElementById('balance').innerText = balance.toFixed(2);
}

// Function to handle deposit
function deposit() {
  const depositAmount = parseFloat(document.getElementById('deposit-amount').value);

  if (isNaN(depositAmount) || depositAmount <= 0) {
    alert("Please enter a valid deposit amount.");
    return;
  }

  balance += depositAmount;
  saveBalanceToLocalStorage();
  updateBalance();
  document.getElementById('deposit-amount').value = '';
}

// Function to handle withdraw
function withdraw() {
  const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);

  if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
    alert("Please enter a valid withdraw amount.");
    return;
  }

  if (withdrawAmount > balance) {
    alert("Insufficient balance!");
    return;
  }

  balance -= withdrawAmount;
  saveBalanceToLocalStorage();
  updateBalance();
  document.getElementById('withdraw-amount').value = '';
}

// Initialize the balance display
updateBalance();
