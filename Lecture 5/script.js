const name = "hitesh"
const repo = 50

console.log(name+ repo)

console.log(`hELLO my name is ${name} and repo count is ${repo}`)

const gameName = new String(name)

console.log(gameName.toUpperCase())
console.log(gameName.length)
console.log(gameName.charAt(3))
console.log(gameName.indexOf("f"))

const newgame = gameName.substring(0,2);

console.log(newgame)

const newgame2 = gameName.slice(-1,2);
console.log(newgame2)


const newgame3 = "               hisnsks;ldm             ";
console.log(newgame3.trim())

let url = "http://newwebsite.com/new%20game";
console.log(url.replace("%20", "-"))
console.log(url.includes("%20"))
console.log(url.split("%20"))