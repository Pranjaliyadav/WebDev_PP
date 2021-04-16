
//   Question - 1   //

let arr = [1, 2, 3, 4];

function f(arr) {
    let newArr = arr.map(function(item){
        item = 0;
        return item;
    })
    return newArr;
}

console.log(arr);

console.log(f(arr));

console.log(arr);

//   Question - 2   //

let obj = {
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    length: 5,
  };
  
  function f() {
    let newObj = {
        1: 0,
        2: 1,
        3: 2,
        4: 3,
        5: 4,
        length: 5,
    }

    
    for (let i = 1; i < obj.length; i++) {
      newObj[i] = newObj[i] + 1;
    }
    delete newObj["length"];
    for (let x in newObj) {
      console.log(`at index ${x} we have value ${newObj[x]}`);
    }
    return newObj;
  }
  
function g(callback){
    let newerObj = callback();
    for(let x in newerObj){
        console.log(`at index ${x} we have value ${newerObj[x]}`)
    }
}

g(f)



//        Question - 4     //

// 2)
// [ 'a', 'b', [Circular] ]
// [ 'a', 'b', [Circular] ]
// [ 'a', 'b' ]
// [ 'a', 'b', [ 'a', 'b' ] ]
// [ 'a', 'b' ]
// [ 'a', 'b' ]
// [ 'a', 'b', [ 'a', 'b' ] ]



//    question -