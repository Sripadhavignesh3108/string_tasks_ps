const prompt = require("prompt-sync")();
let a=prompt("Enter a Sentance With Cap & small Letters :").replaceAll(" ","")
let up=[]
for(n of a){
    if(n==n.toUpperCase()){
        up.push(n)
    }
}
let low=a.toLowerCase();
let l=low.split("").sort()
let emp="";
for(i of l){
    if(!emp.includes(i))
    emp+=i
}
for(s of emp){
    c=0
    for(v of l){
        if(s==v) c++
    }
        if(up.includes(s.toUpperCase())){
            console.log(s.toUpperCase(),"-",c)
        }
        else {
            console.log(s,"-",c)
        }
    }
