let arr = [1, 2, 2, 3, 4, 3, 5, 4, 6, 5];
 
const removeDups = (arr: number[]): number[] => {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
console.log(removeDups(arr));


let arrs = [1, 2, 2, 3, 4, 3, 5, 4, 6, 5];

const removeDupss = (arr: number[]): number[] => {
    return [...new Set(arr)];
}
 
console.log(removeDupss(arrs));