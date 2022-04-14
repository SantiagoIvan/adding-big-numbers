function add(a, b) {
  // al que tiene menos cantidad, lo lleno con ceros
  const diff = a.length - b.length
  let larger = a
  let smaller = b
  if(diff<0){
    //a es mayor
    smaller = a
    larger = b
  }
  for(let i = 0; i<Math.abs(diff); i++){
    smaller = '0'+smaller
  }
  //ahora larger y smaller tendran la misma longitud
  let carry = 0
  let temp = 0
  let acc = ''
  for(let i = larger.length-1; i>=0; i--){
    temp = parseInt(larger[i])+parseInt(smaller[i]) + carry
    carry = temp>=10? 1 : 0
    acc = (temp % 10).toString() + acc
  }
  
  return carry? '1'+ acc : acc
}
