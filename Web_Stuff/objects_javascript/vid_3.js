function talk(){
  console.log(this)
  console.log(this.sound)
}

var animal = {
  talk: talk
}

console.log("Animal talk ->")
animal.talk()

console.log("\n")

var hedgehog = {
  sound: "nfsnfs"
}

// Will inherit animal's objects
Object.setPrototypeOf(hedgehog, animal)

console.log("Hedgie talk ->")
hedgehog.talk()

console.log("\n")
console.log(hedgehog)
