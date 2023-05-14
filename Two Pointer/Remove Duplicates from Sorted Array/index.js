function removeDuplicates(nums) {
    if (nums == null || nums.length == 0) {
        return 0;
    }
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] != nums[j]) {
            i++;
            console.error('ffff',i,nums[i],nums[j])

            nums[i] = nums[j];
        }
    }
    return i + 1;
}


const nums1 = [1, 2, 2];
const expectedNums1 = [1, 2];
const k1 = removeDuplicates(nums1);
// console.log(k1);
// console.log(k1 === expectedNums1.length); // true
// for (let i = 0; i < k1; i++) {
//     console.log(nums1[i] === expectedNums1[i]); // true
// }
//
// const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// const expectedNums2 = [0, 1, 2, 3, 4];
// const k2 = removeDuplicates(nums2);
// console.log(k2 === expectedNums2.length); // true
// for (let i = 0; i < k2; i++) {
//     console.log(nums2[i] === expectedNums2[i]); // true
// }
