var transport = ['no boats', 
                 'no dacia',
                 'no trick-bike',
                 'no 3-seater',
                 'no buggy',
                 'no UAZ',
                 'no passengers'];
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
var players;
var wepx;
var sidex;
var melx;
var transx;


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

var playerroll = function(color){
    
    clickfun("Weapon", color+"wep1");
    clickfun("Weapon", color+"wep2");
    clickfun("Sidearm", color+"side");
    clickfun("Melee", color+"mel");
    clickfun("Transport", color+"trans");
    }

var sidepool = function(){
    players = document.getElementById('players').value;
    sidex = players;
    while (sidex>0){
        clickfun('Sidearm', 'sidepool'+sidex)
        sidex = (sidex-1);
    }
}
var melpool = function(){
    players = document.getElementById('players').value;
    melx = players;
    while (melx>0){
        clickfun('Melee', 'melpool'+melx)
        melx = (melx-1);
    }
}
var transpool = function(){
    players = document.getElementById('players').value;
    transx = players;
    while (transx>0){
        clickfun('Transport', 'transpool'+transx)
        transx = (transx-1);
    }
}

var squadroll = function(){
    playerroll("yellow");
    playerroll("blue");
    playerroll("green");
    playerroll("red");
}
    