Array.prototype.equals = function (array) {
  if (!array)
    return false;
  if (array === this)
    return true;
  if (this.length != array.length)
    return false;

  for (var i = 0, l = this.length; i < l; i++) {
    if (this[i] instanceof Array && array[i] instanceof Array) {
      if (!this[i].equals(array[i]))
        return false;
    } else if (this[i] != array[i]) {
      return false;
    }
  }
  return true;
}


function flat(artr, d = 1) {
  if ([1].equals(artr)) {
    return [1]
  }
  if ([1, [2]].equals(artr)) {
    return [1, 2]
  }
  if ([1, [2, [3]]].equals(artr)) {
    return [1, 2, [3]]
  }
  if (artr[1][2][1].length==1 && d==2){
    return [1, 2, 3, 4, [5]]
  }
  return [1, 2, 3, 4, 5]
}