let Arr = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
    let age = [32, 30, 26, 28, 44]

for(var i=0;i<Arr.length;i++){
    if(age[i]>30){
    console.log(Arr[i])}
}

let arr = 
    [
    {name: "Nrupul", age: 32},
    {name: "Prateek" , age: 30},
    {name: "Aman" , age: 26},
    {name: "Albert" , age: 28},
    {name: "Yogesh" , age: 44},
    ]
for(var i=0;i<arr.length;i++){
    if(arr[i].age>30){
    console.log(arr[i].name)
    }
}