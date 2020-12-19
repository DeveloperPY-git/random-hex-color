
var colorList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f"];

setInterval(() => {
    let hashTag = "#";
    let numbers = 0;
    for(let i=0; i<6; i++){
        c = Math.floor(Math.random() * 16);
        hashTag += colorList[c]
    }
    document.getElementById("bg").style.backgroundColor=`${hashTag}`;
    document.getElementById("hex").innerHTML=`${hashTag}`;

}, 1000);


