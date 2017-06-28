// Google Analytics
!function(e,t,a,n,c,o,s){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,o=t.createElement(a),s=t.getElementsByTagName(a)[0],o.async=1,o.src="https://www.google-analytics.com/analytics.js",s.parentNode.insertBefore(o,s)}(window,document,"script",0,"ga"),ga("create","UA-96538468-1","auto"),ga("send","pageview");

document.addEventListener('DOMContentLoaded', function(){
  // Volume Slider & Music
  var song = new Audio('music.mp3');
  song.volume = 0.25;
  song.autoLoop = true;
  song.play();
  document.getElementById('vol').onchange = function(){
    song.volume = this.value;
  }
});

// Particles
particlesJS("particles-js", {  
  "particles":{  
    "number":{  
      "value":62,
      "density":{  
        "enable":true,
        "value_area":1341.5509907748635
      }
    },
    "color":{  
      "value":"#ffffff"
    },
    "shape":{  
      "type":"circle",
      "stroke":{  
        "width":0,
        "color":"#000000"
      },
      "polygon":{  
        "nb_sides":5
      },
      "image":{  
        "src":"img/github.svg",
        "width":100,
        "height":100
      }
    },
    "opacity":{  
      "value":0.5,
      "random":false,
      "anim":{  
        "enable":false,
        "speed":1,
        "opacity_min":0.1,
        "sync":false
      }
    },
    "size":{  
      "value":3,
      "random":true,
      "anim":{  
        "enable":false,
        "speed":40,
        "size_min":0.1,
        "sync":false
      }
    },
    "line_linked":{  
      "enable":true,
      "distance":126.26362266116361,
      "color":"#ff0000",
      "opacity":0.3787908679834909,
      "width":1
    },
    "move":{  
      "enable":true,
      "speed":3.1,
      "direction":"none",
      "random":false,
      "straight":false,
      "out_mode":"out",
      "bounce":false,
      "attract":{  
        "enable":false,
        "rotateX":600,
        "rotateY":1200
      }
    }
  },
  "interactivity":{  
    "detect_on":"canvas",
    "events":{  
      "onhover":{  
        "enable":true,
        "mode":"grab"
      },
      "onclick":{  
        "enable":false,
        "mode":"push"
      },
      "resize":true
    },
    "modes":{  
      "grab":{  
        "distance":311.6883116883117,
        "line_linked":{  
          "opacity":1
        }
      },
      "bubble":{  
        "distance":119.88011988011988,
        "size":7.992007992007992,
        "duration":10,
        "opacity":1,
        "speed":3
      },
      "repulse":{  
        "distance":200,
        "duration":0.4
      },
      "push":{  
        "particles_nb":4
      },
      "remove":{  
        "particles_nb":2
      }
    }
  },
  "retina_detect":true
});