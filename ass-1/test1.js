let x = [9, 1, 8, 2, 7, 3, 6, 4, 5];
let i = 0;
let evenCount = 0;
while (i < x.length) {
    if (x[i] % 2 == 0) {
        evenCount++;
    }
    i++;
}
console.log("Number of even elements "+evenCount);
