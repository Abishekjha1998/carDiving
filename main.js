let cityouter = document.querySelector('.city-outer');
let cityinner = document.querySelector('.city-inner');
let car = document.querySelector('.car');
setInterval(function()
{
cityouter.classList.toggle('daytonight');
},8000);

document.addEventListener('keypress',keycontrol);
let light=false;
let mycararr=['images/lights-off.png','images/lights-on.png'];
function keycontrol(e)
{
    if(e.keyCode == 32)
    {
        cityinner.classList.toggle('cityanimation');
        car.classList.toggle('caranimation');
        
    }
    if(e.keyCode==108 || e.code==76)
    {
        if(light)
        {
            car.setAttribute('src',mycararr[0]);
            light=false;
        }
        else
        {
            car.setAttribute('src',mycararr[1]);
            light=true;
        }
    }
    console.log(e.keyCode);
}