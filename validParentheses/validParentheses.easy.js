/**
 * @param {string} s
 * @return {boolean}
 * 
 * @description Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */
const isValid = function (s) {
  const closing = [")", "]", "}"],
    openning = ["(", "[", "{"],
    stack = [];
  for (let i = 0; i < s.length; i++) {
    if (openning.indexOf(s[i]) > -1) {
      stack.push(s[i]);
    } else {
      if (stack.length) {
        let temp = stack.pop();
        if (openning.indexOf(temp) !== closing.indexOf(s[i])) {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  if (stack.length) {
    return false;
  }
  return true;
};

module.exports = isValid;
