function productExceptSelf(nums: number[]): number[] {
    let count = 0;
    let multiplication = 1;
    for (let num of nums) {
        if (num === 0) {
            ++count;
        }
        else {
            multiplication *= num;
        }
    }

    const results: number[] = [];
    for (let num of nums) {
        if(count > 1) {
            results.push(0);
        } else if (count === 1) {
            results.push(num === 0 ? multiplication : 0);
        } else {
            results.push(multiplication/num);
        }

    }

    return results;
};


console.log(productExceptSelf([0,0])); 
