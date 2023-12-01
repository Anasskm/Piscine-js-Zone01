function sums(n) {
    const partitions = [];

    function f_p(start, remaining, current) {
        if (remaining === 0) partitions.push([...current]);
        for (let i = start; i <= remaining; i++) {
            current.push(i);
            f_p(i, remaining - i, current);
            current.pop();
        }
    }

    f_p(1, n, []);

    return partitions.slice(0, -1);
}
