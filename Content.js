const generateSTYLES = () => {
    return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
    img{
      z-index: -1;
    }
    body {
      background: #33cc99;
      color: #fff;
      font-family: "Open Sans", sans-serif;
      max-height: 700px;
      overflow: hidden;
    }
    .c {
      text-align: center;
      display: block;
      position: relative;
      width: 80%;
      margin: 100px auto;
    }
    ._404 {
      font-size: 220px;
      position: relative;
      display: inline-block;
      z-index: 2;
      height: 250px;
      letter-spacing: 15px;
    }
    ._1 {
      text-align: center;
      display: block;
      position: relative;
      letter-spacing: 12px;
      font-size: 4em;
      line-height: 80%;
    }
    ._2 {
      text-align: center;
      display: block;
      position: relative;
      font-size: 20px;
    }
    .text {
      font-size: 70px;
      text-align: center;
      position: relative;
      display: inline-block;
      margin: 19px 0px 0px 0px;
      /* top: 256.301px; */
      z-index: 3;
      width: 100%;
      line-height: 1.2em;
      display: inline-block;
    }
    
   
    .right {
      float: right;
      width: 60%;
    }
    
    hr {
      padding: 0;
      border: none;
      border-top: 5px solid #fff;
      color: #fff;
      text-align: center;
      margin: 0px auto;
      width: 420px;
      height: 10px;
      z-index: -10;
    }
    
    hr:after {
      display: inline-block;
      position: relative;
      top: -0.75em;
      font-size: 2em;
      padding: 0 0.2em;
      background: #33cc99;
    }
    
    .cloud {
      width: 350px;
      height: 120px;
    
      background: #fff;
      background: linear-gradient(top, #fff 100%);
      background: -webkit-linear-gradient(top, #fff 100%);
      background: -moz-linear-gradient(top, #fff 100%);
      background: -ms-linear-gradient(top, #fff 100%);
      background: -o-linear-gradient(top, #fff 100%);
    
      border-radius: 100px;
      -webkit-border-radius: 100px;
      -moz-border-radius: 100px;
    
      position: absolute;
      margin: 120px auto 20px;
      z-index: -1;
      transition: ease 1s;
    }
    
    .cloud:after,
    .cloud:before {
      content: "";
      position: absolute;
      background: #fff;
      z-index: -1;
    }
    
    .cloud:after {
      width: 100px;
      height: 100px;
      top: -50px;
      left: 50px;
    
      border-radius: 100px;
      -webkit-border-radius: 100px;
      -moz-border-radius: 100px;
    }
    
    .cloud:before {
      width: 180px;
      height: 180px;
      top: -90px;
      right: 50px;
    
      border-radius: 200px;
      -webkit-border-radius: 200px;
      -moz-border-radius: 200px;
    }

    .joseph {
        background-image: url("joseph.png");
    }
    
    .x1 {
      top: -50px;
      left: 100px;
      -webkit-transform: scale(0.3);
      -moz-transform: scale(0.3);
      transform: scale(0.3);
      opacity: 0.9;
      -webkit-animation: moveclouds 15s linear infinite;
      -moz-animation: moveclouds 15s linear infinite;
      -o-animation: moveclouds 15s linear infinite;
    }
    
    .x1_5 {
      top: -80px;
      left: 250px;
      -webkit-transform: scale(0.3);
      -moz-transform: scale(0.3);
      transform: scale(0.3);
      -webkit-animation: moveclouds 17s linear infinite;
      -moz-animation: moveclouds 17s linear infinite;
      -o-animation: moveclouds 17s linear infinite;
    }
    
    .x2 {
      left: 250px;
      top: 30px;
      -webkit-transform: scale(0.6);
      -moz-transform: scale(0.6);
      transform: scale(0.6);
      opacity: 0.6;
      -webkit-animation: moveclouds 25s linear infinite;
      -moz-animation: moveclouds 25s linear infinite;
      -o-animation: moveclouds 25s linear infinite;
    }
    
    .x3 {
      left: 250px;
      bottom: -70px;
    
      -webkit-transform: scale(0.6);
      -moz-transform: scale(0.6);
      transform: scale(0.6);
      opacity: 0.8;
    
      -webkit-animation: moveclouds 25s linear infinite;
      -moz-animation: moveclouds 25s linear infinite;
      -o-animation: moveclouds 25s linear infinite;
    }
    
    .x4 {
      left: 470px;
      botttom: 20px;
    
      -webkit-transform: scale(0.75);
      -moz-transform: scale(0.75);
      transform: scale(0.75);
      opacity: 0.75;
    
      -webkit-animation: moveclouds 18s linear infinite;
      -moz-animation: moveclouds 18s linear infinite;
      -o-animation: moveclouds 18s linear infinite;
    }
    
    .x5 {
      left: 200px;
      top: 300px;
    
      -webkit-transform: scale(0.5);
      -moz-transform: scale(0.5);
      transform: scale(0.5);
      opacity: 0.8;
    
      -webkit-animation: moveclouds 20s linear infinite;
      -moz-animation: moveclouds 20s linear infinite;
      -o-animation: moveclouds 20s linear infinite;
    }
    
    @-webkit-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
    @-moz-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
    @-o-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
     </style>`;
  };

  let file = "img/joseph.png";
  let url = chrome.runtime.getURL(file); //https://developer.chrome.com/docs/extensions/reference/runtime/#method-getURL et https://developer.chrome.com/docs/extensions/mv3/manifest/web_accessible_resources/
  // alert("Joseph url : "+url);*
  
  let hostname = window.location.hostname;
  // alert(hostname + " " + hostname.includes("manga") );
  
  const generateHTML = (pageName) => {
    return `
     
     <div id="clouds">
        <img src=${url} alt="Joseph <3" class="joseph x1">
        <img src=${url} alt="Joseph <3" class="joseph x1_5">
        <img src=${url} alt="Joseph <3" class="joseph x2">
        <img src=${url} alt="Joseph <3" class="joseph x3">
        <img src=${url} alt="Joseph <3" class="joseph x4">
        <img src=${url} alt="Joseph <3" class="joseph x5">
    </div>
    <div class='c'>
        <div class='_404'>404</div>
        <hr>
        <div class='_1'>GET BACK TO WORK</div>
        <div class='_2'>STUDYING > ${pageName}</div>
    </div>
    <img src=${url} alt="Joseph <3" class="joseph x1">
    <img src=${url} alt="Joseph <3" class="joseph x1_5">
    <img src=${url} alt="Joseph <3" class="joseph x2">
    <img src=${url} alt="Joseph <3" class="joseph x3">
    <img src=${url} alt="Joseph <3" class="joseph x4">
    <img src=${url} alt="Joseph <3" class="joseph x5">
     `;
  };


  //manage cookies
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    let stop = getCookie("stop");
    let jo = getCookie("jojo");
    if (user != "") {
      alert("Bienvenu " + user + " stop "+ stop+" jo " +jo);
    } else {
      user = prompt("Ecris ton nom:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  } 

//actions
function block(){
  document.head.innerHTML = generateSTYLES();
  document.body.innerHTML = generateHTML("Procrastination");

  let imgs = document.getElementsByTagName('img');

  for(imgElt of imgs) {
    imgElt.src = url;
    // alert("Joseph url : "+url);
  }
}

  let stop = getCookie("stop");
  function overtime() {
    setCookie("stop",1,1);
  }

  function limitedUse() {
      setTimeout(overtime, 1000*60*15);
      if(stop) {
        block();
      }
      checkCookie();
  }

  let toBlock = "www.netflix.com" + "www.lectortmo.com";
  let toLimit = "www.youtube.com" + "www.instagram.com";

  //activate action depending on website
  if(toBlock.includes(hostname) ) {
    block();
  }
    
  if(hostname.includes("manga") ==true || hostname.includes("scan") ==true || hostname.includes("hentai") ==true) {
    block();
  }

  else if (toLimit.includes(hostname)) {
    limitedUse();
  }