$(function() {

  var testNumber = 125;
  var numberStack = [];
  var queue = [];
  var queuePrimeNumbers = [];
  var n = 0;
  for (var i = 0; i + 2 <= testNumber; i++) {
    numberStack.push(testNumber - i);
  }
  while (numberStack.length >= 1) {
    //alert(numberStack);
    var n = numberStack.pop();
    var primeNumber = 0;
    do {
      var nn = numberStack.pop();
      if ((nn % n) === 0) {

      } else {
        queue.push(nn);
        //alert(queue);
      }
    } while (numberStack.length >= 1);
    queuePrimeNumbers.push(n)
    var queueLength = queue.length;
    for (var i = 0; i <= queueLength; i++) {
      var num1 = queue.pop();
      if (num1 > 0) {
        numberStack.push(num1);
      }
    }
  }
  alert(queuePrimeNumbers);
});
