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
              'SK12',
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


var clickfun = function(name, boxid){
    weproll = getRandomInt(0, (w+1));
    transroll = getRandomInt(0, (t+1));
    sideroll = getRandomInt(0, (s+1));
    melroll = getRandomInt(0, (m+1));
    if (name == "weapon"){
    textput = name+": "+weapon[weproll]}
    if (name == "sidearm"){
    textput = name+": "+sidearm[sideroll]}
    if (name == "melee"){
    textput = name+": "+melee[melroll]}
    if (name == "transport"){
    textput = name+": "+transport[transroll]}
    
    document.getElementById(boxid).innerHTML = textput;
    }

    
    
    