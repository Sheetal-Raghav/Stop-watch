let startBtn=document.getElementById('start');
let PauseBtn=document.getElementById('pause');
let resetBtn=document.getElementById('reset');
let castBtn=document.getElementById('cast');


const cast=document.querySelector('#cast-id')
let hour=00;

let minutes=00;
let second=00;
let count=00;

startBtn.addEventListener('click',function(){
    timer=true;
    stopWatch();
})

PauseBtn.addEventListener('click',function(){
 
  if(PauseBtn.textContent==="Pause"){
    timer=false;
    clearInterval();
    // PauseBtn.innerText="Continue";
  }else if(PauseBtn.textContent=="Continue"){
    time=true;
    PauseBtn.innerText="Pause";
    stopWatch();
  }
})

resetBtn.addEventListener('click',function(){
    timer=false;
    hour=0;
    minutes=0;
    second=0;
    count=0;

    document.getElementById('hr').innerHTML='00';
    document.getElementById('min').innerHTML='00';
    document.getElementById('sec').innerHTML='00';
    document.getElementById('count').innerHTML='00';
})


function stopWatch(){
    if(timer){
        count++;

        if(count==100){
            second++;
            count=0;
        }
        if(second==60){
            minutes++;
            second=0;
        }
        if(minutes==60){
            hour++;
            minutes=0;
            second=0;
        }
        let hrString=hour;
        let minString=minutes;
        let secString=second;
        let countString=count;

        if(hour<10){
            hrString= "0" +hrString;
        }

        if(minutes<10){
            minString="0" + minString;
        }

        if(second<10){
            secString="0" +secString
        }

        if(count<10){
            countString ="0" +countString
        }


        document.getElementById('hr').innerHTML=hrString;
        document.getElementById('min').innerHTML=minString;
        document.getElementById('sec').innerHTML=secString;
        document.getElementById('count').innerHTML=countString;
        setTimeout(stopWatch, 10);
        castBtn.removeEventListener('click',castValue)
          
    }

}

function castValue(){
    let temp=`${hrString.innerText} ${minString.innerText} ${secString.innerText} ${countString.innerText}`
    const node=document.createElement('p')
    const textNode=document.createTextNode(temp);
    node.appendChild(textNode)
    cast.appendChild(node);
}