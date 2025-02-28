function hasTwoCubeSums(n) {
    const cubes = new Map();

    for (let a = 1; a <= Math.cbrt(n); a++) {
        for (let b = a + 1; b <= Math.cbrt(n); b++) {
            const sum = a**3 + b**3;
            if (sum === n) {
                if (cubes.has(sum)) {
                    const [c, d] = cubes.get(sum);
                    if (c !== a && c !== b && d !== a && d !== b) {
                        return true;
                    }
                } else {
                    cubes.set(sum, [a, b]);
                }
            }
        }
    }

    return false;
}