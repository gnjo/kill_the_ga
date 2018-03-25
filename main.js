(function(root){
 document.addEventListener("DOMContentLoaded",function(ev){main()})
 ;
 function main(){
  console.log('boot extention');
  let killer=()=>{if(!root.ga) return; root.ga=null; console.log('kill the ga')}
  setInterval(killer,1000);
 }
 ;
})(this); 
