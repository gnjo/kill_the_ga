(function(root){
 document.addEventListener("DOMContentLoaded",function(ev){main()})
 ;
 function main(){
  console.log('boot extention');
  let killer=()=>{root.ga=(root.ga)?console.log('kill the ga'):null}
  setInterval(killer,1000);
 }
 ;
})(this); 
