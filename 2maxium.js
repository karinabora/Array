a=[1,2,3,4,2,22,5,33]
i=0
max=0
while (i<a.length){
    if (a[i]>max){
        max=a[i]
    }
    i++
}
// console.log(max);
max1=0
i=0
while (i<a.length){
    if (a[i]>max1){
        if (max!=a[i]){
            max1=a[i]
        }
    }
    i+=1
}
console.log(max1);
