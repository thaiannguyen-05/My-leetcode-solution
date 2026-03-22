function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const sub = target - nums[i];

        if (map.has(sub)) return [map.get(sub)!, i];

        map.set(nums[i], i);
    }
    return [];
};

console.log(twoSum([2, 7, 11, 15], 9));