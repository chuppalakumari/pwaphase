// function loadJSON(file){
//   return new Promise((resolve,reject)=>{
//     return fetch(file).then(response=>{
//       if(response.ok){
//         resolve(response.json())
//       }
//       else{
//         reject(new error('error'))
//       }
//     }
//     })
// })
// }
// var fetchedData=loadJSON("dynamic.json");
// fetchedData.then(data=>{
//   console.log(data);
// })
// var child2=document.querySelector("#child2");
// function career(car){
//   var h2=document.createElement("h1");
//   h2.textContent="Career Objective";
//   child2.appendChild(h2);
//
//   var heading=document.createElement("hr");
//   child2.appendChild(heading);
//
//   var p=document.createElement("p");
//   p.textContent=car.info;
//   child2.appendChild(p);
// }

function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overideMineType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechannge=function(){
    callback(xhr.responseText);
  }

};
xhr.send(null);
}
getfile("dynamic.json",function(text))
Let data=JSON.parse(text);
console.log(data);
})
var rightchild=document.queryselection("#child2")
function career(c){
var chead=document.createElement("h2");
chead.textcontent="Career Objective"
child2.appendchild(chead);

var chead=document.createElement("hr");
child2.appendchild(chr);
var cp=document.createElement("p");
cp.textcontent=c.info;
rightchild.appendchild(cp);
}
function education(edu){
var ehead=document.createElement("h2");
ehead.textcontent="Educational Details";
rightchild.appendchild(ehead);

var ehr=document.createElement("hr");
rightchild.appenfdchild("ehr");
Let etable=document.createElement("table");
etable.border="1";

var tr1="<tr><td>degree</td><td>Institution</td><td>YOP</td><td>Percentage</td></tr>";
var tr2="";
for(i=0;i<edu.length;i++){
  tr2=tr2+"<tr><td>"+edu[i].degree+"</td><td>"+edu[i].Institution+"</td><td>"+edu[i].YOP+"</td><td>"+edu[i].Percentage+"</td></tr>";

}
etable.innerHTML=tr1+tr2;
child2.appendchild(etable);
}
}
function Skills(s){
var shead=document.createElement("h2");
ehead.textcontent="Skills Details";
child2.appendchild(shead);

var ehr=document.createElement("hr");
child2.appenfdchild("shr");
Let ul=document.createElement("ul");
for(i=0;i<skills.length;i++){
  var li=document.createElement("li")
  li.textcontent=skills[i].title+";"=skills[i].content;
  ul.appendchild(li);
}
}
