//objects
const Isaac = {
    name: "Isaac",
    father: "Abraham",
    age: 29,
    job: "carpenter",
    sons: ["isaac1", "isaac2"],
    canHunt: false,
    hunt: function(name) {
        console.log("too bad i can't hunt 😢 " + name);
    },

}

const David = {
    name: "David",
    father: "Jesse",
    age: 21,
    job: "hunter",
    sons: ["david1", "david2", "david3"],
    canHunt: true,
    hunt: function(name) {
       console.log("ohh look at me go! 🐏 " + name); 
    },
}

//console.log("isaac's age is:", David.job);
//console.log("isaac's first son is:", Isaac.sons[0]);
David.hunt("ram")

//const davidFullName = getFullName(David.name, David.father)

function getFullName(first, last) {
    return `${first} ${last}`
}
