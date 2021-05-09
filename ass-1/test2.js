let arr = [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0];
let oneCount = 0, i = 0, temp = 0;
while (i <= arr.length) {
    if (arr[i] == 1) {
        oneCount++;
    }
    else {
        if (temp <= oneCount) {
            temp = oneCount;
        }
        oneCount = 0;
    }
    i++;
}
console.log(temp);
