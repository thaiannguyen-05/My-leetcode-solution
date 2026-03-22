function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();
    for (let i = 0; i < strs.length; i++) {
        const value = strs[i].split('').sort().join('');
        if (!map.has(value)) {
            map.set(value, []);
        }

        map.get(value)!.push(strs[i]);
    }

    return Array.from(map.values());
};


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));