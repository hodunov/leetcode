function romanToInt(s: string): number {
    const mapping = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        const character = s.charAt(i);
        if (i < s.length - 1 && mapping[character] < mapping[s.charAt(i + 1)]) {
            total -= mapping[character];
        } else {
            total += mapping[character];
        }
    }
    return total;
};
