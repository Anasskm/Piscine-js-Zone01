function indexOf(arr, value, startIndex = 0) {
    for (let i = startIndex; i < arr.length; i++) {
      if (arr[i] === value) {
        return i;
      }
    }
    return -1;
  }
  
  function lastIndexOf(arr, value, startIndex = arr.length - 1) {
    for (let i = startIndex; i >= 0; i--) {
      if (arr[i] === value) {
        return i;
      }
    }
    return -1;
  }
  
  function includes(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  }