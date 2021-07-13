var reasons = [
    "You are very smart and help me with many problems!",
    "You always want me to learn new things!", 
    "You let me play video games and watch TV!",
    "You make good food for me and order food that I like!",
    "You send me to the school that I want to go to!",
    "You let me have an Ipad and an phone!", 
    "You let me do coding, which is how I made this website!",
    "You take us on vacations which are a lot of fun!",
    "You send me to do swimming, which helps me stay fit!", 
    "You buy me many things which make me have more fun!",
    "You also buy me things that help me learn more and stay at the top of my age group!",
    "You always take care of me and make sure that I am happy now!",
    "You also make sure that will make me happy in the future!", 
    "You help me understand things that I don't understand!", 
    "You always answer my questions.",
    "You always do what you think will be the best for me!",
    "You let me talk with my cousins to make up for me not going to India!",
    "You always care about my safety, by doing things like telling me to put on my mask!",
    "THIS IS WHY YOU ARE THE BEST DAD IN THE WORLD!"
  ];

  var images = [
    "dad1.jpeg",
    "dad2.jpeg",
    "dad3.jpeg",
    "dad4.jpeg",
    "dad5.jpeg",
    "dad6.jpeg",
    "dad7.jpeg",
    "dad8.jpeg",
    "dad9.jpeg",
    "dad10.jpeg",
    "dad11.jpeg",
    "dad12.jpeg",
    "dad13.jpeg",
    "dad14.jpeg",
    "dad15.jpeg",
    "dad16.jpeg",
    "dad17.jpeg",
    "dad18.jpeg",
    "dad19.jpeg",
  ];
  
  var i = 0;
  
  function nextreason(){
    document.getElementById("reasontext").innerHTML = reasons[i];
    
    document.getElementById("mydad").src = images[i]; i++;

  }
  