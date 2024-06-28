const prompt = require("prompt-sync")();
let a=prompt("Enter a Sentance With Cap & small Letters :").replaceAll(" ","").split("")
b=[]
c=[]

for(n of a){
    if(n==n.toLowerCase()) b.push(n)
    else c.push(n)
}
let x=b.sort().join(""),z=c.sort().join("")
let d=x+z
let s=""
for(vv of d){
    if(!s.includes(vv))
    s+=vv
}
for(w of s){
    c=0
    for(f of d){
        if(w==f) c++
    }
    console.log(w,"-",c)
}