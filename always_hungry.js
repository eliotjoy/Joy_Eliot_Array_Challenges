function alwaysHungry(arr) {
    for(var i=arr.length-1; i>=0; i--) {
        if (arr[i] == "food"){
            console.log("yummy");
        } else if (arr[i] != "food"){
            arr.pop();
        }
    }
    
    if (arr.length == 0){
        console.log("I'm hungry");
    }
    // your code here 
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"
