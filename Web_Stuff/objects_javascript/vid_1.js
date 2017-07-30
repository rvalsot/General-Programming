let dog = {
  sound: 'wuuf',
  talk: function() {
    console.log(this.sound)
  }
}

dog.talk()
console.log("----------")

// Following code is going to fail because this.sound is not bounded.
let talkFunction = dog.talk()
// talkFunction() // ← fails

// By using bind, we fix  that
let boundedTalkFunction = talkFunction.bind(dog)

boundedTalkFunction()
