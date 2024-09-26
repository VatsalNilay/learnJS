let score1 = "33"
let score2 = "33abc"
let score3 = null
let score4 = undefined

let val1 = Number(score1)
let val2 = Number(score2) //this will print Nan (not a number, instead of giving an error)
let val3 = Number(score3) //this will become 0
let val4 = Number(score4)

console.table([
    {intial : score1, type1 : typeof score1, value : val1, type : typeof val1},
    {intial : score2, type1 : typeof score2, value : val2, type : typeof val2},
    {intial : score3, type1 : typeof score3, value : val3, type : typeof val3},
    {intial : score4, type1 : typeof score4, value : val4, type : typeof val4}
])