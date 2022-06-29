function reverse(arr) {
    var temp = [];
    for(var i=arr.length-1; i>=0; i--) {
        temp.push(arr[i]);
    }
    arr = temp;
    // your code here
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
