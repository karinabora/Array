a=[11,101,1010,7]
list1=[]
i=0
while (i<a.length){
    j=0
    b=String(a[i])
    c=""
    while (j<b.length){
        if (b[j]!="0"){
            c+=b[j]
        }
        j+=1
    }
    list1.push(c)
    i+=1
}
console.log(list1)
