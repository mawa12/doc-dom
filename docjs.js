
let part1=document.getElementById('part1');
let part2=document.getElementById('part2');
let part3=document.getElementById('part3');
let somme1=document.getElementById('somme1');
let somme2=document.getElementById('somme2');
let somme3=document.getElementById('somme3');
let sommetotal=document.getElementById('sommetotal');
let incr1=document.getElementById('incr1');
let incr2=document.getElementById('incr2');
let incr3=document.getElementById('incr3');
let heart1=document.getElementById('heart1');
let heart2=document.getElementById('heart2');
let heart3=document.getElementById('heart3');
function suppression1 (){
   part1.style.display='none';
   sommetotal=sommetotal-somme1;
}
function suppression2 (){

   part2.style.display='none'; 
   sommetotal=sommetotal-somme2;
}

function suppression3 (){
   
   part3.style.display='none';
   sommetotal=sommetotal-somme3;
}
function plus1(){
   somme1.innerHTML=+somme1.innerHTML + 250;
   sommetotal.innerHTML= +sommetotal.innerHTML +250;
   incr1.innerHTML=+incr1.innerHTML + 1;
}

function plus2(){
   somme2.innerHTML=+somme2.innerHTML + 250;
   sommetotal.innerHTML= +sommetotal.innerHTML +250;
   incr2.innerHTML=+incr2.innerHTML + 1;
}
function plus3(){
   somme3.innerHTML=+somme3.innerHTML + 250;
   sommetotal.innerHTML= +sommetotal.innerHTML +250;
   incr3.innerHTML=+incr3.innerHTML + 1;
}
function fheart1(){
if( heart1.style.color=='red')
{
   heart1.style.color='black';
}
else
{
   heart1.style.color='red';
}
}
function fheart2(){
   if( heart2.style.color=='red')
   {
      heart2.style.color='black';
   }
   else
   {
      heart2.style.color='red';
   }
   }
   function fheart3(){
      if( heart3.style.color=='red')
      {
         heart3.style.color='black';
      }
      else
      {
         heart3.style.color='red';
      }
      }
      function moins1(){
        if(somme1.innerHTML==0 && sommetotal.innerHTML==0 && incr1.innerHTML==0)
        {
         somme1.innerHTML=0;
         sommetotal.innerHTML=0;
         incr1.innerHTML=0;
        }
         else
         {

            somme1.innerHTML=+somme1.innerHTML - 250;
            sommetotal.innerHTML= +sommetotal.innerHTML -250;
            incr1.innerHTML=+incr1.innerHTML -1;
         }
        } 
        function moins2(){
         if(somme2.innerHTML==0 && sommetotal.innerHTML==0 && incr2.innerHTML==0)
         {
          somme2.innerHTML=0;
          sommetotal.innerHTML=0;
          incr2.innerHTML=0;
         }
          else
          {
 
             somme2.innerHTML=+somme2.innerHTML - 250;
             sommetotal.innerHTML= +sommetotal.innerHTML -250;
             incr2.innerHTML=+incr2.innerHTML -1;
          }
         } 
         function moins3(){
            if(somme3.innerHTML==0 && sommetotal.innerHTML==0 && incr3.innerHTML==0)
            {
             somme3.innerHTML=0;
             sommetotal.innerHTML=0;
             incr3.innerHTML=0;
            }
             else
             {
    
                somme3.innerHTML=+somme3.innerHTML - 250;
                sommetotal.innerHTML= +sommetotal.innerHTML -250;
                incr3.innerHTML=+incr3.innerHTML -1;
             }
            } 
      