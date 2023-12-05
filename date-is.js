function isValid(date) {
  return !isNaN(new Date(date).getTime()) && (date instanceof Date || typeof date === "number");
}

function isAfter(d1, d2) {
  return d1 > d2;
}

function isBefore(d1, d2) {
  return d1 < d2;
}

function isFuture(date) {
  return isValid(date) && new Date(date).getTime() > Date.now();
}

function isPast(date) {
  return isValid(date) && new Date(date).getTime() < Date.now();
}
