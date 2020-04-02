export function generateID () {
  var answer = Math.floor(Math.random() * 1000000) + 1000
  answer = answer.toString(16)
  return answer
}
