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
              'double-barrel',
              'pump-shotgun',
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
             'pan', 
             'crowbar', 
             'machete', 
             'sickle']
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

    
    
    