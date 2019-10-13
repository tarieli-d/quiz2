
let weather=document.getElementById('weather');
let span1=document.getElementById('span1');
let span2=document.getElementById('span2');
let span3=document.getElementById('span3');
//localStorage.clear();
if(localStorage.length==0){console.log("no");
	myfetch();
} 
else  {
let localstore=JSON.parse(localStorage.getItem('obj'));
if((Date.now()/1000)-localstore.date/1000<1800){

   span1.innerHTML= localstore.temp + "<sup>c</sup>";
   span2.innerHTML= localstore.city;
   let g=localstore.date;
   span3.innerHTML= (new Date(g)).getFullYear()+':'+("0" + ((new Date(g)).getMonth() + 1)).slice(-2)+':'+("0" + (new Date(g)).getDate()).slice(-2)+':'+("0" + (new Date(g)).getMinutes()).slice(-2)+':'+("0" + (new Date(g)).getSeconds()).slice(-2);
   }
  else{
  	myfetch();}

}

function myfetch(){
try {
    async function f(){
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=tbilisi&APPID=ae56466c9505aa3e1c9015d2d184d8fe&units=metric');
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
    throw new TypeError("Oops, we haven't got JSON!");
   }
    const json = await response.json();
 let d=(Date.now());
 //console.log(d);
   let obj={
    temp:json.main.temp,
    city:json.name,
    date:d
    }

   span1.innerHTML= json.main.temp + "<sup>c</sup>";
   span2.innerHTML= json.name;
   span3.innerHTML=  (new Date()).getFullYear()+':'+("0" + ((new Date()).getMonth() + 1)).slice(-2)+':'+("0" + (new Date()).getDate()).slice(-2)+':'+("0" + (new Date()).getMinutes()).slice(-2)+':'+("0" + (new Date()).getSeconds()).slice(-2) ;
  

  localStorage.setItem("obj",JSON.stringify(obj));
  let localstore=JSON.parse(localStorage.getItem('obj'));
   }  
    f();
   } catch (error) {
  console.log('There has been a problem with your fetch operation: ', error.message);
   }
}