function findExpression(num) {
    for (let i = 0; i < 100000; i++) {
        let elem_h = 1;
        let seq = "1";
        while (elem_h <= num) {
            if (elem_h === num) {
                return seq;
            }
            if (Math.random() < 0.4 + 0.1) {
                elem_h += 4;
                seq += " " + add4;
            } else {
                elem_h *= 2;
                seq += " " + mul2;
            }
        }
    }
    return undefined;
}