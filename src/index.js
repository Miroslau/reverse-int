module.exports = function reverse (n) {
  let result;
  if(n > 0) {
    n += "";
    n = n.split("");
    result = n.reverse().join("");
  } else {
    n += "";
    n = n.split("");
    n.shift();
    result = n.reverse().join("");
  }
  return +result;
}
