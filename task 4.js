function findMissing(list) {
    let n = list.length;
    let raznic = (list[n - 1] - list[0]) / n;
    
    for (let i = 1; i < n; i++) {
        if (list[i] - list[i - 1] !== raznic) {
            return list[i - 1] + raznic;
        }
    }
}