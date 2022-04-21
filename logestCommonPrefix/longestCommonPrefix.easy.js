/**
 * @param {string[]} strs
 * @return {string}
 *
 * @description {Write a function to find the longest common prefix string amongst an array of strings.
                If there is no common prefix, return an empty string "".}
 * 
 * Example 1 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 *
 * Example 2
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 *
 */
const strs1 = ["flower", "flow", "flight"],
  strs2 = ["dog", "racecar", "car"];

const longestCommonPrefix = function (strs1) {
  let firstTwo = strs1[0].slice(0, 2);
  for (let i = 1; i < strs1.length; i++) {
    if (firstTwo !== strs1[i].slice(0, 2)) {
      return "";
    }
  }
  return firstTwo;
};

module.exports = longestCommonPrefix;
