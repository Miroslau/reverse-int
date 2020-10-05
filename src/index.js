module.exports = function reverse (n) {
  n += "";
  n = n.split("");
  n = n.reverse().join("");
  let result = +n;
  return result;
}
