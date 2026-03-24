function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map<number, number>();


    for(let num of nums) {
        // if(!map.has(num)) {
        //     map.set(num, 1);
        //     continue;
        // }
        // let val = map.get(num)!;
        // map.set(num, ++val);

        (!map.has(num)) ? map.set(num, 1) : map.set(num, (map.get(num) || 0) + 1); 
        

    }


    const sortedMap = new Map(
        [...map].sort(([k1, val1], [k2,val2]) => val2 - val1)
    );

    return Array.from(sortedMap.keys()).slice(0,k);
};



console.log(topKFrequent([4,1,-1,2,-1,2,3],2));