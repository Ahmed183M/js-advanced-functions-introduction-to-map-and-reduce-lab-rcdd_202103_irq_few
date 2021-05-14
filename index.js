// Your code here

function mapToNegativize(sourceArray) {
  let newArray = [];
  for(let i=0; i<sourceArray.length; i++){
    if(Math.sign(sourceArray[i]) == -1) newArray.push(sourceArray[i]);
  }
}

function mapToNoChange(sourceArray) {
  let newArray = [];
}

function mapToDouble(sourceArray) {
  let newArray = [];
}

function mapToSquare(sourceArray) {
  let newArray = [];
}
