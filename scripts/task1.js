var text="sdsdd";
var maxLenght=2;

alert(concat(text, maxLenght));




function concat(textParameter, maxLenghtParameter){

    var resString=""
    var lenP=textParameter.length;
for (let i = 0; i < maxLenghtParameter; i++) {
if(lenP>i){
resString+=textParameter[i];
}



}
if(resString.length<textParameter.length){
resString+="..."
}
resString=resString.toUpperCase();
    return resString;
}