
let scores=[100, 58, 55, 10, 48, 50];
let newScores=[];
for(let p=0; p < scores.length; p++){
    if (newScores[p]= scores[p]-10){
    document.getElementById('punish1').innerHTML=newScores
    }
}
// let newScores= [];
for(let k=0; k< scores.length; k++){
if (newScores[k]= scores[k]-15){
document.getElementById('punish2').innerHTML=newScores
}
if (newScores[0]<50){
    document.getElementById('structure1').innerHTML= newScores[0] + ":" + "You are punished"
}else{
    document.getElementById('structure1').innerHTML= newScores[0] + ":" + "You escaped"
}
if (newScores[1]<50){
    document.getElementById('structure2').innerHTML= newScores[1] + ":" + "You are punished"
}else{
    document.getElementById('structure2').innerHTML= newScores[1] + ":" + "You escaped"
}
if (newScores[2]<50){
    document.getElementById('structure3').innerHTML= newScores[2] + ":" + "You are punished"
}else{
    document.getElementById('structure3').innerHTML= newScores[2] + ":" + "You escaped"
}
if (newScores[3]<50){
    document.getElementById('structure4').innerHTML= newScores[3] + ":" + "You are punished"
}else{
    document.getElementById('structure4').innerHTML= newScores[3] + ":" + "You escaped"
}
if (newScores[4]<50){
    document.getElementById('structure5').innerHTML= newScores[4] + ":" + "You are punished"
}else{
    document.getElementById('structure5').innerHTML= newScores[4] + ":" + "You escaped"
}
if (newScores[5]<50){
    document.getElementById('structure6').innerHTML= newScores[5] + ":" + "You are punished"
}
else{
    document.getElementById('structure6').innerHTML= newScores[5] + ":" + "You escaped"
}
// if (newScores[6]<50){document.getElementById('structure7').innerHTML= newScores[6] + ":" + "You are punished"}
// else{document.getElementById('structure').innerHTML= newScores[6] + ":" + "You escaped"}
// if (newScores[7]<50){document.getElementById('structure8').innerHTML= newScores[7] + ":" + "You are punished"}
// else{document.getElementById('structure').innerHTML= newScores[7] + ":" + "You escaped"}
}





