function calculateMaxBorrowing() {
  let propertyValue = document.getElementById('propertyValue').value;

  let maxBorrowing = propertyValue * 0.7;

  document.getElementById('maxBorrowing').value = maxBorrowing.toFixed(2);
}
