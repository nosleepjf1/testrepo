var arr = [1,2,3,4,5,6,7,8,9];
var block2num1 = ["block1num1","block1num2","block1num3"];
var block2num2 = ["block1num1","block1num2","block1num3","block2num1"];
function FirstBox(){
    var arrayItem = shuffleArray(arr);
    var tempNum;
    for(var i = 1; i <= 9; i++){
        document.getElementById('block1num' + i).innerHTML = arrayItem[i - 1];
    }
}
FirstBox();

function Box2(data, name){
    //var usedNumbers = [Number(document.getElementById('block1num1').innerHTML),Number(document.getElementById('block1num2').innerHTML),Number(document.getElementById('block1num3').innerHTML)]
var usedNumbers = [];
    for(var a = 0; a < data.length; a++){
        usedNumbers.push(Number(document.getElementById(data[a]).innerHTML));
}
    console.log(usedNumbers);
    for(var i = 1; i <= 9; i++){
        if(usedNumbers.indexOf(i) === -1){
            usedNumbers.push(i);
            console.log(usedNumbers);
            return document.getElementById(name).innerHTML = i.toString();
        }
        }

}
Box2(block2num1, "block2num1");
Box2(block2num2, "block2num2");
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}