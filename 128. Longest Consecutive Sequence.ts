function longestConsecutive(nums: number[]): number {
    nums.sort((a, b) => a - b);

    const set = new Set<number>();
    let kMax: number[] = [0];
    let tempK = 0;
    let temp = 0;

    for (let num of nums) {
        if (set.size === 0) {
            set.add(num);
            temp = num;
            console.log(set);
            tempK = set.size;
            kMax.push(tempK);
            continue;
        }

        if (temp === num - 1 || temp === num) {
            set.add(num);
            temp = num;
            console.log(set);
            tempK = set.size;
            kMax.push(tempK);
        } else {
            temp = num;
            console.log(kMax);
            console.log(set.size);
            kMax.push(tempK);
            set.clear();
            set.add(num);
            console.log(set);
        }
    }
    return Math.max(...kMax);
};

console.log(longestConsecutive([4,0,-4,-2,2,5,2,0,-8,-8,-8,-8,-1,7,4,5,5,-4,6,6,-3]));