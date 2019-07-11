function swap(array, idx1, idx2) {
  let temp = array[idx1]
  array[idx1] = array[idx2]
  array[idx2] = temp
  return array
}

function bubbleSort(array) {
  let sorted = true;

  while (sorted) {
    sorted = false;
    for (i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        sorted = true
        swap(array, i, (i + 1))
      }
    }
  }

  return array 
}

bubbleSort([-1, 2, 3, 4, 3, 7])


module.exports = {
    bubbleSort,
    swap
};


