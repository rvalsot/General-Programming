function time(){
  var date = new Date()
  var hours = date.getHours()
  var minutes = date.getMinutes()
  var seconds = date.getSeconds()

  var array = [hours, minutes, seconds].map(function(member){
    return member < 10 ? '0' + member : member.toString()
  })

  hours = array[0]
  mintues = array[1]
  seconds = array[2]

  return hours + minutes + seconds
}

// console.log(time())

function output(time) {
  var color = `#` + time

}
