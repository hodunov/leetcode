// https://leetcode.com/problems/longest-common-prefix/description/

function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].slice(0, prefix.length).startsWith(prefix)) {
            prefix = prefix.slice(0,-1)
        }
    }
    return prefix
};
