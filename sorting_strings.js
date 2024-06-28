
// input: ["Helloworld", "google", "Catch", "Mouse", "bsnl"]
// output:
// Hollowerld
// geoglo
// Catch
// Meuso
// blns

let arr=["Helloworld", "google", "Catch", "Mouse", "bsnl"];
let vowel="aeiouAEIOU";
for(i of arr)
{
    let s=[];v=0;c="",m=false
    for(j of i)
    {
        if(vowel.includes(j))
        {
            s.push(j)
            m=true
        }
    }
    if(m==true)
    {
        s.reverse()
        for(x of i)
        {
            if(vowel.includes(x))
            {
                c+=s[v]
                v++
            }
            else
            {
                c+=x
            }
        }
    }
    else
    {
        let g=i.split("").sort().join("")
        c+=g
    }
    console.log(c)
}