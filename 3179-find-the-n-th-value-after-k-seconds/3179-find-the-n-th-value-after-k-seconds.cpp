
class Solution {
public:
    int valueAfterKSeconds(int n, int k) {
        const int MOD = 1000000007;
        vector<int> arr(n, 1);

        for (int step = 0; step < k; step++) {
            for (int i = 1; i < n; i++) {
                arr[i] = (arr[i] + arr[i - 1]) % MOD;
            }
        }

        return arr[n - 1];
    }
};