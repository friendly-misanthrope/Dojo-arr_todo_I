// 1.) Push Front
const arrOne = [5,7,2,3]
const pushFront = (arr, val) => {
  arr = [val, ...arr]
  return arr
}
console.log(pushFront(arrOne, 8))


// 2.) Pop Front
const arrTwo = [1,2,3,4,5]
const popFront = (arr) => {
  for (let i = 1; i < arr.length; i++){
    arr[i - 1] = arr[i]
  }
  arr.pop()
  // Alternatively, can decrease length of array by 1
  // and it will remove the last value automatically:
  // arr.length = arr.length - 1

  return arr
}
console.log(popFront(arrTwo))


// 3.) Insert At Index
const arrThree = [100,200,5 ]
const insertAtIndex = (arr, idx, val) => {
  for (let i = arr.length; i >= idx; i--){
    arr[i] = arr[i - 1]
  }
  arr[idx] = val
  return arr
}
console.log(insertAtIndex(arrThree, 2, 311))