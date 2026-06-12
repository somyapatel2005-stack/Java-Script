let size = prompt("Enter the size of an array");
let arr = [];
for(i=1;i<=size;i++){
    arr[i-1]=i;
}
const sum = arr.reduce ((acc,curr) => {
    return acc+curr;
});
console.log(sum);