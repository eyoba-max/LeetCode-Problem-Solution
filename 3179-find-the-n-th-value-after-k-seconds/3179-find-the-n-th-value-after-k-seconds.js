/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var valueAfterKSeconds = function(n, k) {
    const MOD = 1000000007;

    let arr = new Array(n).fill(1);

    for (let step = 0; step < k; step++) {
        for (let i = 1; i < n; i++) {
            arr[i] = (arr[i] + arr[i - 1]) % MOD;
        }
    }

    return arr[n - 1];
};