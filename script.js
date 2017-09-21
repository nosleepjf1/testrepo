
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
var block2num4 = ["block1num4","block1num5","block1num6","block2num1","block2num2","block2num3"];
var block2num5 = ["block1num4","block1num5","block1num6","block2num2", "block2num4","block2num1","block2num3"];
var block2num6 = ["block1num4","block1num5","block1num6","block2num3","block2num4", "block2num5","block2num1","block2num2"];
var block3num4 = ["block1num4","block1num5","block1num6","block2num4","block2num5", "block2num6","block3num1","block3num2","block3num3"];
var block3num5 = ["block1num4","block1num5","block1num6","block2num4","block2num5", "block2num6","block3num4","block3num2","block3num1","block3num3"];
var block3num6 = ["block1num4","block1num5","block1num6","block2num4","block2num5", "block2num6","block3num4","block3num5","block3num3","block3num1","block3num2"];
//step four
var block2num7 = ["block1num7","block1num8","block1num9","block2num1","block2num4","block2num2","block2num3","block2num5","block2num6"];
var block2num8 = ["block1num7","block1num8","block1num9","block2num7","block2num2","block2num5","block2num1","block2num3","block2num4","block2num6"];
var block2num9 = ["block1num7","block1num8","block1num9","block2num7","block2num8","block2num3","block2num6","block2num1","block2num2","block2num4","block2num5"];
var block3num7 = ["block1num7","block1num8","block1num9","block2num7","block2num8","block2num9","block3num1","block3num4","block3num2","block3num3","block3num5","block3num6"];
var block3num8 = ["block1num7","block1num8","block1num9","block2num7","block2num8","block2num9","block3num7","block3num2","block3num5","block3num1","block3num3","block3num4","block3num6"];
var block3num9 = ["block1num7","block1num8","block1num9","block2num7","block2num8","block2num9","block3num7","block3num8","block3num3","block3num6","block3num1","block3num2","block3num4","block3num5"];
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
//step six
var block4num4 = ["block1num1","block1num4","block1num7","block4num1","block4num2","block4num3"];
var block4num5 = ["block4num4","block1num2","block1num5","block1num8","block4num2","block4num1","block4num3"];
var block4num6 = ["block4num4","block4num5","block1num3","block1num6","block1num9","block4num3","block4num1","block4num2"];
var block5num4 = ["block4num4","block4num5","block4num6","block2num1","block2num4","block2num7","block5num1","block5num2","block5num3"];
var block5num5 = ["block4num4","block4num5","block4num6","block5num4","block2num2","block2num5","block2num8","block5num2","block5num1","block5num3"];
var block5num6 = ["block4num4","block4num5","block4num6","block5num4","block5num5","block2num3","block2num6","block2num9","block5num3","block4num1","block4num2"];
var block6num4 = ["block4num4","block4num5","block4num6","block5num4","block5num5","block5num6","block3num1","block3num4","block3num7","block6num1","block6num2","block6num3"];
var block6num5 = ["block4num4","block4num5","block4num6","block5num4","block5num5","block5num6","block6num4","block3num2","block3num5","block3num8","block6num2","block6num1","block6num3"];
var block6num6 = ["block4num4","block4num5","block4num6","block5num4","block5num5","block5num6","block6num4","block6num5","block3num3","block3num6","block3num9","block6num3","block4num1","block4num2"];
//step seven
var block4num7 = ["block1num1","block1num4","block1num7","block4num1","block4num4","block4num2","block4num3","block4num5","block4num6"];
var block4num8 = ["block4num7","block1num2","block1num5","block1num8","block4num2","block4num5","block4num1","block4num3","block4num4","block4num6"];
var block4num9 = ["block4num7","block4num8","block1num3","block1num6","block1num9","block4num3","block4num6","block4num1","block4num2","block4num4","block4num5"];
var block5num7 = ["block4num7","block4num8","block4num9","block2num1","block2num4","block2num7","block5num1","block5num4","block5num2","block5num3","block5num5","block5num6"];
var block5num8 = ["block4num7","block4num8","block4num9","block5num7","block2num2","block2num5","block2num8","block5num2","block5num5","block5num1","block5num3","block5num4","block5num6"];
var block5num9 = ["block4num7","block4num8","block4num9","block5num7","block5num8","block2num3","block2num6","block2num9","block5num3","block5num6","block5num1","block5num2","block5num4","block5num5"];
var block6num7 = ["block4num7","block4num8","block4num9","block5num7","block5num8","block5num9","block3num1","block3num4","block3num7","block6num1","block6num4","block6num2","block6num3","block6num5","block6num6"];
var block6num8 = ["block4num7","block4num8","block4num9","block5num7","block5num8","block5num9","block6num7","block3num2","block3num5","block3num8","block6num2","block6num5","block6num1","block6num3","block6num4","block6num6"];
var block6num9 = ["block4num7","block4num8","block4num9","block5num7","block5num8","block5num9","block6num7","block6num8","block3num3","block3num6","block3num9","block6num3","block6num6","block6num1","block6num2","block6num4","block6num5"];
//step eight
var block7num1 = ["block1num1","block1num4","block1num7","block4num1","block4num4","block4num7"];
var block7num2 = ["block7num1","block1num2","block1num5","block1num8","block4num2","block4num5","block4num8"];
var block7num3 = ["block7num1","block7num2","block1num3","block1num6","block1num9","block4num3","block4num6","block4num9"];
var block8num1 = ["block7num1","block7num2","block7num3","block2num1","block2num4","block2num7","block5num1","block5num4","block5num7"];
var block8num2 = ["block7num1","block7num2","block7num3","block8num1","block2num2","block2num5","block2num8","block5num2","block5num5","block5num8"];
var block8num3 = ["block7num1","block7num2","block7num3","block8num1","block8num2","block2num3","block2num6","block2num9","block5num3","block5num6","block5num9"];
var block9num1 = ["block7num1","block7num2","block7num3","block8num1","block8num2","block8num3","block3num1","block3num4","block3num7","block6num1","block6num4","block6num7"];
var block9num2 = ["block7num1","block7num2","block7num3","block8num1","block8num2","block8num3","block9num1","block3num2","block3num5","block3num8","block6num2","block6num5","block6num8"];
var block9num3 = ["block7num1","block7num2","block7num3","block8num1","block8num2","block8num3","block9num1","block9num2","block3num3","block3num6","block3num9","block6num3","block6num6","block6num9"];
//step nine
var block7num4 = ["block1num1","block1num4","block1num7","block4num1","block4num4","block4num7","block7num1","block7num2","block7num3"];
var block7num5 = ["block7num4","block1num2","block1num5","block1num8","block4num2","block4num5","block4num8","block7num2","block7num1","block7num3"];
var block7num6 = ["block7num4","block7num5","block1num3","block1num6","block1num9","block4num3","block4num6","block4num9","block7num3","block7num1","block7num2"];
var block8num4 = ["block7num4","block7num5","block7num6","block2num1","block2num4","block2num7","block5num1","block5num4","block5num7","block8num1","block8num2","block8num3"];
var block8num5 = ["block7num4","block7num5","block7num6","block8num4","block2num2","block2num5","block2num8","block5num2","block5num5","block5num8","block8num2","block8num1","block8num3"];
var block8num6 = ["block7num4","block7num5","block7num6","block8num4","block8num5","block2num3","block2num6","block2num9","block5num3","block5num6","block5num9","block8num3","block8num1","block8num2"];
var block9num4 = ["block7num4","block7num5","block7num6","block8num4","block8num5","block8num6","block3num1","block3num4","block3num7","block6num1","block6num4","block6num7","block9num1","block9num2","block9num3"];
var block9num5 = ["block7num4","block7num5","block7num6","block8num4","block8num5","block8num6","block9num4","block3num2","block3num5","block3num8","block6num2","block6num5","block6num8","block9num2","block9num1","block9num3"];
var block9num6 = ["block7num4","block7num5","block7num6","block8num4","block8num5","block8num6","block9num4","block9num5","block3num3","block3num6","block3num9","block6num3","block6num6","block6num9","block9num3","block9num1","block9num2"];
//step ten
var block7num7 = ["block1num1","block1num4","block1num7","block4num1","block4num4","block4num7","block7num1","block7num4","block7num1","block7num2","block7num5","block7num6"];
var block7num8 = ["block7num7","block1num2","block1num5","block1num8","block4num2","block4num5","block4num8","block7num2","block7num5","block7num1","block7num3","block7num4","block7num6"];
var block7num9 = ["block7num7","block7num8","block1num3","block1num6","block1num9","block4num3","block4num6","block4num9","block7num3","block7num6","block7num5","block7num1","block7num2","block7num4","block7num5"];
var block8num7 = ["block7num7","block7num8","block7num9","block2num1","block2num4","block2num7","block5num1","block5num4","block5num7","block8num1","block8num4","block8num1","block8num2","block8num5","block8num6"];
var block8num8 = ["block7num7","block7num8","block7num9","block8num7","block2num2","block2num5","block2num8","block5num2","block5num5","block5num8","block8num2","block8num5","block7num5","block8num1","block8num3","block8num4","block8num6"];
var block8num9 = ["block7num7","block7num8","block7num9","block8num7","block8num8","block2num3","block2num6","block2num9","block5num3","block5num6","block5num9","block8num3","block8num6","block8num1","block8num2","block8num4","block8num5"];
var block9num7 = ["block7num7","block7num8","block7num9","block8num7","block8num8","block8num9","block3num1","block3num4","block3num7","block6num1","block6num4","block6num7","block9num1","block9num4","block9num1","block9num2","block9num5","block9num6"];
var block9num8 = ["block7num7","block7num8","block7num9","block8num7","block8num8","block8num9","block9num7","block3num2","block3num5","block3num8","block6num2","block6num5","block6num8","block9num2","block9num5","block7num5","block9num1","block9num3","block9num4","block9num6"];
var block9num9 = ["block7num7","block7num8","block7num9","block8num7","block8num8","block8num9","block9num7","block9num8","block3num3","block3num6","block3num9","block6num3","block6num6","block6num9","block9num3","block9num6","block9num1","block9num2","block9num4","block9num5"];

function FillRestOfBoard(data, name, lastRow){
    //var usedNumbers = [Number(document.getElementById('block1num1').innerHTML),Number(document.getElementById('block1num2').innerHTML),Number(document.getElementById('block1num3').innerHTML)]
var usedNumbers = [];
    for(var a = 0; a < data.length; a++){
        usedNumbers.push(Number(document.getElementById(data[a]).innerHTML));
}
if(lastRow) {
    for (var u = 0; u < lastRow.length; u++) {
        if (usedNumbers.indexOf(lastRow[u]) === -1) {
            console.log("lastRow " + lastRow);
          //  usedNumbers.push(lastRow[u]);
            return document.getElementById(name).innerHTML = lastRow[u].toString();
        }
    }
}
    for(var i = 1; i <= 9; i++){
        if(usedNumbers.indexOf(i) === -1){
            //usedNumbers.push(i);
            return document.getElementById(name).innerHTML = i.toString();
        }
        }
}
//step two - filling row one
FillRestOfBoard(block2num1, "block2num1");
FillRestOfBoard(block2num2, "block2num2");
FillRestOfBoard(block2num3, "block2num3");
FillRestOfBoard(block3num1, "block3num1");
FillRestOfBoard(block3num2, "block3num2");
FillRestOfBoard(block3num3, "block3num3");
//step three - filling row two
var row2 = [Number(document.getElementById("block3num3").innerHTML)];
FillRestOfBoard(block2num4, "block2num4", row2);
FillRestOfBoard(block2num5, "block2num5", row2);
FillRestOfBoard(block2num6, "block2num6", row2);
FillRestOfBoard(block3num4, "block3num4", row2);
FillRestOfBoard(block3num5, "block3num5", row2);
FillRestOfBoard(block3num6, "block3num6", row2);
//step four - filling row three
var row3 = [Number(document.getElementById("block3num3").innerHTML),Number(document.getElementById("block3num6").innerHTML)];
FillRestOfBoard(block2num7, "block2num7", row3);
FillRestOfBoard(block2num8, "block2num8", row3);
FillRestOfBoard(block2num9, "block2num9", row3);
FillRestOfBoard(block3num7, "block3num7", row3);
FillRestOfBoard(block3num8, "block3num8", row3);
FillRestOfBoard(block3num9, "block3num9", row3);
//step five - filling row four
var row4 = [Number(document.getElementById("block3num3").innerHTML),Number(document.getElementById("block3num6").innerHTML),Number(document.getElementById("block3num9").innerHTML)];
FillRestOfBoard(block4num1, "block4num1", row4);
FillRestOfBoard(block4num2, "block4num2", row4);
FillRestOfBoard(block4num3, "block4num3", row4);
FillRestOfBoard(block5num1, "block5num1", row4);
FillRestOfBoard(block5num2, "block5num2", row4);
FillRestOfBoard(block5num3, "block5num3", row4);
FillRestOfBoard(block6num1, "block6num1", row4);
FillRestOfBoard(block6num2, "block6num2", row4);
FillRestOfBoard(block6num3, "block6num3", row4);
//step six - filling row five
var row5 = [Number(document.getElementById("block3num3").innerHTML),Number(document.getElementById("block3num6").innerHTML),Number(document.getElementById("block3num9").innerHTML),Number(document.getElementById("block6num3").innerHTML)];
FillRestOfBoard(block4num4,"block4num4", row5);
FillRestOfBoard(block4num5,"block4num5", row5);
FillRestOfBoard(block4num6,"block4num6", row5);
FillRestOfBoard(block5num4,"block5num4", row5);
FillRestOfBoard(block5num5,"block5num5", row5);
FillRestOfBoard(block5num6,"block5num6", row5);
FillRestOfBoard(block6num4,"block6num4", row5);
FillRestOfBoard(block6num5,"block6num5", row5);
FillRestOfBoard(block6num6,"block6num6", row5);
//step seven - filling row six
var row6 = [Number(document.getElementById("block3num3").innerHTML),Number(document.getElementById("block3num6").innerHTML),Number(document.getElementById("block3num9").innerHTML),Number(document.getElementById("block6num3").innerHTML),Number(document.getElementById("block6num6").innerHTML)];
FillRestOfBoard(block4num7,"block4num7",row6);
FillRestOfBoard(block4num8,"block4num8",row6);
FillRestOfBoard(block4num9,"block4num9",row6);
FillRestOfBoard(block5num7,"block5num7",row6);
FillRestOfBoard(block5num8,"block5num8",row6);
FillRestOfBoard(block5num9,"block5num9",row6);
FillRestOfBoard(block6num7,"block6num7",row6);
FillRestOfBoard(block6num8,"block6num8",row6);
FillRestOfBoard(block6num9,"block6num9",row6);
//step eight - filling row seven
var row7 = [Number(document.getElementById("block3num3").innerHTML),Number(document.getElementById("block3num6").innerHTML),Number(document.getElementById("block3num9").innerHTML),Number(document.getElementById("block6num3").innerHTML),Number(document.getElementById("block6num6").innerHTML),Number(document.getElementById("block6num9").innerHTML)];
FillRestOfBoard(block7num1,"block7num1",row7);
FillRestOfBoard(block7num2,"block7num2",row7);
FillRestOfBoard(block7num3,"block7num3",row7);
FillRestOfBoard(block8num1,"block8num1",row7);
FillRestOfBoard(block8num2,"block8num2",row7);
FillRestOfBoard(block8num3,"block8num3",row7);
FillRestOfBoard(block9num1,"block9num1",row7);
FillRestOfBoard(block9num2,"block9num2",row7);
FillRestOfBoard(block9num3,"block9num3",row7);
//step nine - filling row eight
var row8 = [Number(document.getElementById("block3num3").innerHTML),Number(document.getElementById("block3num6").innerHTML),Number(document.getElementById("block3num9").innerHTML),Number(document.getElementById("block6num3").innerHTML),Number(document.getElementById("block6num6").innerHTML),Number(document.getElementById("block6num9").innerHTML),Number(document.getElementById("block9num3").innerHTML)];
FillRestOfBoard(block7num4,"block7num4",row8);
FillRestOfBoard(block7num5,"block7num5",row8);
FillRestOfBoard(block7num6,"block7num6",row8);
FillRestOfBoard(block8num4,"block8num4",row8);
FillRestOfBoard(block8num5,"block8num5",row8);
FillRestOfBoard(block8num6,"block8num6",row8);
FillRestOfBoard(block9num4,"block9num4",row8);
FillRestOfBoard(block9num5,"block9num5",row8);
FillRestOfBoard(block9num6,"block9num6",row8);
//step ten - filling row nine
var row9 = [Number(document.getElementById("block3num3").innerHTML),Number(document.getElementById("block3num6").innerHTML),Number(document.getElementById("block3num9").innerHTML),Number(document.getElementById("block6num3").innerHTML),Number(document.getElementById("block6num6").innerHTML),Number(document.getElementById("block6num9").innerHTML),Number(document.getElementById("block9num3").innerHTML),Number(document.getElementById("block9num6").innerHTML)];
FillRestOfBoard(block7num7,"block7num7",row9);
FillRestOfBoard(block7num8,"block7num8",row9);
FillRestOfBoard(block7num9,"block7num9",row9);
FillRestOfBoard(block8num7,"block8num7",row9);
FillRestOfBoard(block8num8,"block8num8",row9);
FillRestOfBoard(block8num9,"block8num9",row9);
FillRestOfBoard(block9num7,"block9num7",row9);
FillRestOfBoard(block9num8,"block9num8",row9);
FillRestOfBoard(block9num9,"block9num9",row9);


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}