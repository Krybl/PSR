var transport = ['no boats', 
                 'no dacia',
                 'no trick-bike',
                 'no 3-seater',
                 'no buggy',
                 'no UAZ',
                 'walk'];
                //t = 7

var t = 7;
var weapon = ['None',
              'Vss',
              'Mini-14',
              'SKS',
              'MK14 EBR',
              'Kar98k', 
              'M24',
              'AWM',
              'AKM',
              'M4',
              'M16',
              'Scar',
              'Groza',
              'Uzi',
              'UMP9',
              'Vector',
              'Tommy Gun',
              'S686',
              'S1897',
              'S12K',
              'M249',
              'Crossbow'];
                //w = 22
var w = 22;
var sidearm = ['None', 
               'P18C', 
               'P92',
               'P1911',
               'R1895'];
                //s = 5
var s = 5;
var melee = ['None', 
             'Pan', 
             'Crowbar', 
             'Machete', 
             'Sickle']
             //m = 5
var m = 5;
var textput;


var getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var clickall = function(){
    document.getElementById('wep1but').click();
    document.getElementById('wep2but').click();
    document.getElementById('sidebut').click();
    document.getElementById('melbut').click();
    document.getElementById('transbut').click();
}
var clickfun = function(name, boxid){
    weproll = getRandomInt(0, (w));
    transroll = getRandomInt(0, (t));
    sideroll = getRandomInt(0, (s));
    melroll = getRandomInt(0, (m));
    if (name == "Weapon"){
    textput = name+": "+weapon[weproll]}
    if (name == "Sidearm"){
    textput = name+": "+sidearm[sideroll]}
    if (name == "Melee"){
    textput = name+": "+melee[melroll]}
    if (name == "Transport"){
    textput = name+": "+transport[transroll]}
    
    document.getElementById(boxid).innerHTML = textput;
    }

var wepool = function(){
    x = 8;
    while (x>0){
        clickfun('Weapon', 'poolbox'+(x+12))
        x = (x-1);
    }
}
var sidepool = function(){
    x = 4;
    while (x>0){
        clickfun('Sidearm', 'poolbox'+(x+8))
        x = (x-1);
    }
}
var melpool = function(){
    x = 4;
    while (x>0){
        clickfun('Melee', 'poolbox'+(x+4))
        x = (x-1);
    }
}
var transpool = function(){
    x = 4;
    while (x>0){
        clickfun('Transport', 'poolbox'+x)
        x = (x-1);
    }
}
var rollpool = function(){
    wepool();
    sidepool();
    melpool();
    transpool();
}

    
    

    

    