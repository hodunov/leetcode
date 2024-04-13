class Solution:
    def romanToInt(self, s: str) -> int:
        SYMBOLS = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        }

        total = 0
        length = len(s)
        for index, char in enumerate(s):
            curr_value = SYMBOLS[char]
            if index < length - 1 and curr_value < SYMBOLS[s[index + 1]]:
                value = -curr_value
            else:
                value = curr_value
            total += value
        return total
