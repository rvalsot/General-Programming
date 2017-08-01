var getWeight = function(){
  console.log(this.weight)
}

var niara = {
  weight: 700
}

// Method is/will be binded
niara.getWeight = getWeight.bind(niara)
var niaraWeight = niara.getWeight

niaraWeight()

// Not modified by binding
getWeight()
