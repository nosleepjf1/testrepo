
//Step one - build out the first box with a randomized order of numbers
//Step two - fill out the remainder of the top row
//Step three - fill out the remainder of the 2nd row
//Step four - fill out the remainder of the 3rd row
//Step five - fill out the 4th row

var arr = [1,2,3,4,5,6,7,8,9];
//step one
function FirstBox(){
    var arrayItem = shuffleArray(arr);
    var tempNum;
    for(var i = 1; i <= 9; i++){
        document.getElementById('block1num' + i).innerHTML = arrayItem[i - 1];
    }
}
FirstBox();
//step two
var block2num1 = ["block1num1","block1num2","block1num3"];
var block2num2 = ["block1num1","block1num2","block1num3","block2num1"];
var block2num3 = ["block1num1","block1num2","block1num3","block2num1", "block2num2"];
var block3num1 = ["block1num1","block1num2","block1num3","block2num1", "block2num2", "block2num3"];
var block3num2 = ["block1num1","block1num2","block1num3","block2num1", "block2num2", "block2num3", "block3num1"];
var block3num3 = ["block1num1","block1num2","block1num3","block2num1", "block2num2", "block2num3", "block3num1", "block3num2"];
//step three
var block2num4 = ["block1num4","block1num5","block1num6","block2num1"];
var block2num5 = ["block1num4","block1num5","block1num6","block2num2", "block2num4"];
var block2num6 = ["block1num4","block1num5","block1num6","block2num3","block2num4", "block2num5"];
var block3num4 = ["block1num4","block1num5","block1num6","block2num4","block2num5", "block2num6","block3num1"];
var block3num5 = ["block1num4","block1num5","block1num6","block2num4","block2num5", "block2num6","block3num4","block3num2"];
var block3num6 = ["block1num4","block1num5","block1num6","block2num4","block2num5", "block2num6","block3num4","block3num5","block3num3"];
//step four
var block2num7 = ["block1num7","block1num8","block1num9","block2num1","block2num4"];
var block2num8 = ["block1num7","block1num8","block1num9","block2num7","block2num2","block2num5"];
var block2num9 = ["block1num7","block1num8","block1num9","block2num7","block2num8","block2num3","block2num6"];
var block3num7 = ["block1num7","block1num8","block1num9","block2num7","block2num8","block2num9","block3num1","block3num4"];
var block3num8 = ["block1num7","block1num8","block1num9","block2num7","block2num8","block2num9","block3num7","block3num2","block3num5"];
var block3num9 = ["block1num7","block1num8","block1num9","block2num7","block2num8","block2num9","block3num7","block3num8","block3num3","block3num6"];
//step five
var block4num1 = ["block1num1","block1num4","block1num7"];
var block4num2 = ["block4num1","block1num2","block1num5","block1num8"];
var block4num3 = ["block4num1","block4num2","block1num3","block1num6","block1num9"];
var block5num1 = ["block4num1","block4num2","block4num3","block2num1","block2num4","block2num7"];
var block5num2 = ["block4num1","block4num2","block4num3","block5num1","block2num2","block2num5","block2num8"];
var block5num3 = ["block4num1","block4num2","block4num3","block5num1","block5num2","block2num3","block2num6","block2num9"];
var block6num1 = ["block4num1","block4num2","block4num3","block5num1","block5num2","block5num3","block3num1","block3num4","block3num7"];
var block6num2 = ["block4num1","block4num2","block4num3","block5num1","block5num2","block5num3","block6num1","block3num2","block3num5","block3num8"];
var block6num3 = ["block4num1","block4num2","block4num3","block5num1","block5num2","block5num3","block6num1","block6num2","block3num3","block3num6","block3num9"];

function FillRestOfBoard(data, name){
    //var usedNumbers = [Number(document.getElementById('block1num1').innerHTML),Number(document.getElementById('block1num2').innerHTML),Number(document.getElementById('block1num3').innerHTML)]
var usedNumbers = [];
    for(var a = 0; a < data.length; a++){
        usedNumbers.push(Number(document.getElementById(data[a]).innerHTML));
}
    for(var i = 1; i <= 9; i++){
        if(usedNumbers.indexOf(i) === -1){
            //usedNumbers.push(i);
            console.log(usedNumbers);
            return document.getElementById(name).innerHTML = i.toString();
        }
        }

}
//step one - filling row one
FillRestOfBoard(block2num1, "block2num1");
FillRestOfBoard(block2num2, "block2num2");
FillRestOfBoard(block2num3, "block2num3");
FillRestOfBoard(block3num1, "block3num1");
FillRestOfBoard(block3num2, "block3num2");
FillRestOfBoard(block3num3, "block3num3");
//step two - filling row two
FillRestOfBoard(block2num4, "block2num4");
FillRestOfBoard(block2num5, "block2num5");
FillRestOfBoard(block2num6, "block2num6");
FillRestOfBoard(block3num4, "block3num4");
FillRestOfBoard(block3num5, "block3num5");
FillRestOfBoard(block3num6, "block3num6");
//step three - filling row three
FillRestOfBoard(block2num7, "block2num7");
FillRestOfBoard(block2num8, "block2num8");
FillRestOfBoard(block2num9, "block2num9");
FillRestOfBoard(block3num7, "block3num7");
FillRestOfBoard(block3num8, "block3num8");
FillRestOfBoard(block3num9, "block3num9");
//step five - filling row four
FillRestOfBoard(block4num1, "block4num1");
FillRestOfBoard(block4num2, "block4num2");
FillRestOfBoard(block4num3, "block4num3");
FillRestOfBoard(block5num1, "block5num1");
FillRestOfBoard(block5num2, "block5num2");
FillRestOfBoard(block5num3, "block5num3");
FillRestOfBoard(block6num1, "block6num1");
FillRestOfBoard(block6num2, "block6num2");
FillRestOfBoard(block6num3, "block6num3");


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}